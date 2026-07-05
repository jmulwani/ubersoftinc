import { useEffect, useRef, useState } from "react";
import { Check, Cloud, Database, HardDrive, Server, ShieldCheck, Minus, Square, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COMMAND = "New-AzDeployment -Name Ubersoft-Prod -Template infra.json";

const resources = [
  { icon: Server, name: "Virtual Machines", detail: "Standard_D4s_v5 · Canada Central" },
  { icon: ShieldCheck, name: "Azure Active Directory", detail: "Conditional access enforced" },
  { icon: Database, name: "SQL Database", detail: "Geo-replicated · Always On" },
  { icon: HardDrive, name: "Storage Account", detail: "ZRS · lifecycle policies" },
];

const TYPE_SPEED = 40;
const DEPLOY_TIME = 1100;
const HOLD_TIME = 5000;

/**
 * A Windows-styled Azure console: a PowerShell prompt types a deployment
 * command, then resource tiles provision one by one with a progress bar.
 */
const AzureConsole = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [running, setRunning] = useState(false);
  const [typed, setTyped] = useState("");
  // 0..resources.length = index currently provisioning; done when > last index
  const [stage, setStage] = useState(-1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRunning(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(COMMAND);
      setStage(resources.length + 1);
      return;
    }

    let timeout: ReturnType<typeof setTimeout>;

    if (typed.length < COMMAND.length) {
      timeout = setTimeout(() => setTyped(COMMAND.slice(0, typed.length + 1)), TYPE_SPEED);
    } else if (stage < 0) {
      timeout = setTimeout(() => setStage(0), 500);
    } else if (stage <= resources.length) {
      timeout = setTimeout(() => setStage(stage + 1), DEPLOY_TIME);
    } else {
      timeout = setTimeout(() => {
        setTyped("");
        setStage(-1);
      }, HOLD_TIME);
    }

    return () => clearTimeout(timeout);
  }, [running, typed, stage]);

  const completed = Math.min(Math.max(stage, 0), resources.length);
  const done = stage > resources.length;
  const progress = (completed / resources.length) * 100;

  return (
    <div ref={containerRef} className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
      {/* Windows-style title bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border/60 bg-secondary/60">
        <div className="flex items-center gap-2">
          <Cloud className="w-4 h-4 text-sky-400" />
          <span className="text-xs text-muted-foreground font-mono">Ubersoft Cloud Console — Microsoft Azure</span>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground/70">
          <Minus className="w-3.5 h-3.5" />
          <Square className="w-3 h-3" />
          <X className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* PowerShell prompt */}
      <div className="px-5 py-3.5 bg-[hsl(220_75%_14%)] border-b border-border/40 font-mono text-[13px] leading-relaxed">
        <span className="text-sky-300">PS C:\Ubersoft&gt;</span>{" "}
        <span className="text-foreground">
          {typed}
          {!done && <span className="animate-caret text-sky-300">▊</span>}
        </span>
      </div>

      {/* Resource tiles */}
      <div className="p-5 grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[190px]">
        {resources.map((r, i) => {
          const isDeploying = stage === i;
          const isDone = stage > i;
          return (
            <div
              key={r.name}
              className={cn(
                "flex items-center gap-3 rounded-xl border p-3.5 transition-all duration-500",
                isDone
                  ? "border-border bg-secondary/50 opacity-100 translate-y-0"
                  : isDeploying
                    ? "border-sky-500/40 bg-sky-500/5 opacity-100 translate-y-0"
                    : "border-border/40 bg-transparent opacity-30 translate-y-1"
              )}
            >
              <div
                className={cn(
                  "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-500",
                  isDone ? "bg-gold/10" : "bg-secondary"
                )}
              >
                <r.icon className={cn("w-5 h-5 transition-colors duration-500", isDone ? "text-gold" : "text-muted-foreground")} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{r.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{r.detail}</p>
              </div>
              <div className="shrink-0">
                {isDone ? (
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/15">
                    <Check className="w-3 h-3 text-emerald-400" />
                  </span>
                ) : isDeploying ? (
                  <span className="block w-4 h-4 rounded-full border-2 border-sky-400/30 border-t-sky-400 animate-spin" />
                ) : (
                  <span className="block w-2 h-2 rounded-full bg-muted-foreground/30" />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress / status */}
      <div className="px-5 pb-5">
        <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-400 via-gold to-gold transition-[width] duration-700 ease-out"
            style={{ width: `${done ? 100 : progress}%` }}
          />
        </div>
        <p className="mt-3 font-mono text-xs h-4">
          {done ? (
            <span className="text-emerald-400">✓ Deployment succeeded — all systems operational · uptime 99.99%</span>
          ) : stage >= 0 ? (
            <span className="text-muted-foreground">Provisioning resources… {completed}/{resources.length}</span>
          ) : (
            <span className="text-muted-foreground/60">Waiting for command…</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default AzureConsole;
