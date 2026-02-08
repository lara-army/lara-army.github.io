<script lang="ts">
  import { cva, type VariantProps } from "class-variance-authority";
  import { cn } from "../../lib/utils";

  const patternBlocksVariants = cva("flex", {
    variants: {
      orientation: {
        vertical: "flex-col -space-y-px",
        horizontal: "flex-row -space-x-px",
      },
      direction: {
        forward: "",
        backward: "",
      },
    },
    compoundVariants: [
      {
        orientation: "vertical",
        direction: "forward",
        class: "scroll-up",
      },
      {
        orientation: "vertical",
        direction: "backward",
        class: "scroll-down",
      },
      {
        orientation: "horizontal",
        direction: "forward",
        class: "scroll-left",
      },
      {
        orientation: "horizontal",
        direction: "backward",
        class: "scroll-right",
      },
    ],
    defaultVariants: {
      orientation: "vertical",
      direction: "forward",
    },
  });

  type PatternBlocksVariants = VariantProps<typeof patternBlocksVariants>;

  interface Props {
    orientation?: PatternBlocksVariants["orientation"];
    direction?: PatternBlocksVariants["direction"];
    duration?: number;
    class?: string;
  }

  let { orientation, direction, duration = 240, class: className }: Props = $props();
</script>

<div class={cn(patternBlocksVariants({ orientation, direction }), className)} style="--scroll-duration: {duration}s">
  {#each Array(10) as _}
    <div class="size-16 border border-border-dark shrink-0" data-pattern-type="half-horizontal-red-top">
      <div class="w-full h-1/2 border-b border-border-dark bg-indonesia-red"></div>
      <div class="w-full h-1/2 bg-background"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 flex" data-pattern-type="half-vertical-red-left">
      <div class="w-1/2 h-full border-r border-border-dark bg-indonesia-red"></div>
      <div class="w-1/2 h-full bg-background"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0" data-pattern-type="half-horizontal-red-bottom">
      <div class="w-full h-1/2 border-b border-border-dark bg-background"></div>
      <div class="w-full h-1/2 bg-indonesia-red"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 flex" data-pattern-type="half-vertical-red-right">
      <div class="w-1/2 h-full border-r border-border-dark bg-background"></div>
      <div class="w-1/2 h-full bg-indonesia-red"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 grid grid-cols-2 grid-rows-2" data-pattern-type="quarter-red-diagonal-tl-br">
      <div class="border-r border-b border-border-dark bg-indonesia-red"></div>
      <div class="bg-background"></div>
      <div class="bg-background"></div>
      <div class="border-l border-t border-border-dark bg-indonesia-red"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 grid grid-cols-2 grid-rows-2" data-pattern-type="quarter-red-diagonal-tr-bl">
      <div class="bg-background"></div>
      <div class="bg-indonesia-red border-l border-b border-border-dark"></div>
      <div class="bg-indonesia-red border-r border-t border-border-dark"></div>
      <div class="bg-background"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 flex flex-col" data-pattern-type="thirds-horizontal-red">
      <div class="h-1/3 w-full bg-indonesia-red"></div>
      <div class="h-1/3 w-full bg-background border-y border-border-dark"></div>
      <div class="h-1/3 w-full bg-indonesia-red"></div>
    </div>
    <div class="size-16 border border-border-dark shrink-0 flex" data-pattern-type="thirds-vertical-red">
      <div class="w-1/3 h-full bg-background"></div>
      <div class="w-1/3 h-full bg-indonesia-red border-x border-border-dark"></div>
      <div class="w-1/3 h-full bg-background"></div>
    </div>
  {/each}
</div>

<style>
  @keyframes scrollUp {
    0% { transform: translateY(-50%); }
    100% { transform: translateY(0); }
  }

  @keyframes scrollDown {
    0% { transform: translateY(0); }
    100% { transform: translateY(-50%); }
  }

  @keyframes scrollLeft {
    0% { transform: translateX(-50%); }
    100% { transform: translateX(0); }
  }

  @keyframes scrollRight {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .scroll-up {
    animation: scrollUp var(--scroll-duration, 240s) linear infinite;
  }

  .scroll-down {
    animation: scrollDown var(--scroll-duration, 240s) linear infinite;
  }

  .scroll-left {
    animation: scrollLeft var(--scroll-duration, 240s) linear infinite;
  }

  .scroll-right {
    animation: scrollRight var(--scroll-duration, 240s) linear infinite;
  }
</style>
