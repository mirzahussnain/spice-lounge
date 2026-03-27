import { SmogIntent } from "@/lib/smog-config";

interface SmogTransitionProps {
	intent: SmogIntent;
	direction?: "down" | "up-down";
}

export function SmogTransition({ intent, direction = "down" }: SmogTransitionProps) {
	return (
		<div className="smog-wrap" data-intent={intent} aria-hidden="true">
			<div className={`smog-css-fallback ${direction === "up-down" ? "flip-y" : ""}`} />
			<div className="smog-css-fallback second" />
		</div>
	);
}
