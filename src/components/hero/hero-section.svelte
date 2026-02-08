<script lang="ts">
  import PatternBlocks from './pattern-blocks.svelte';
</script>

<main class="flex items-center justify-center relative overflow-x-hidden">
  <aside class="absolute z-10 left-0 top-0 lg:bottom-0 lg:right-auto right-0 lg:w-16 lg:h-auto w-auto h-16 overflow-hidden">
    <div class="lg:hidden">
      <PatternBlocks duration={30} orientation="horizontal" direction="forward" />
    </div>
    <div class="hidden lg:block">
      <PatternBlocks orientation="vertical" direction="forward" />
    </div>
  </aside>

  <div class="inner py-30 relative min-h-screen border-x border-dashed border-border-dark flex flex-col items-center justify-center">
    <div class="absolute left-0 -translate-x-full border-l border-dashed border-border-dark top-0 bottom-0 w-16">
      <svg width="100%" height="100%" aria-hidden="true">
        <defs>
          <pattern
            viewBox="0 0 10 10"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            id="diagonal-left"
          >
            <line
              x1="0"
              y1="10"
              x2="10"
              y2="0"
              stroke="currentColor"
              vector-effect="non-scaling-stroke"
              class="stroke-[hsl(0,0%,0%)] dark:stroke-[hsl(0,0%,30%)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-left)" />
      </svg>
    </div>

    <div class="absolute right-0 translate-x-full border-r border-dashed border-border-dark top-0 bottom-0 w-16">
      <svg width="100%" height="100%" aria-hidden="true">
        <defs>
          <pattern
            viewBox="0 0 10 10"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
            id="diagonal-right"
          >
            <line
              x1="0"
              y1="10"
              x2="10"
              y2="0"
              stroke="currentColor"
              vector-effect="non-scaling-stroke"
              class="stroke-[hsl(0,0%,0%)] dark:stroke-[hsl(0,0%,30%)]"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-right)" />
      </svg>
    </div>
    
    <div class="relative w-full flex flex-col mb-0.75 md:mb-0 xl:-space-y-72 lg:-space-y-60 md:-space-y-42 sm:-space-y-36 -space-y-24 translate-y-2">
      {#each Array(5) as _}
        <span
          class="font-black xl:text-[12rem] lg:text-[10rem] md:text-[7rem] sm:text-[6rem] text-[4rem] select-none leading-[0.8] text-center text-white"
          style="-webkit-text-stroke:1px var(--color-zinc-500);"
        >
          <span data-fitty>LARAVEL</span> <span data-fitty>INDONESIA</span>
        </span>
      {/each}

      <h1
        class="font-black xl:text-[12rem] lg:text-[10rem] md:text-[7rem] sm:text-[6rem] text-[4rem] leading-[0.8] text-center"
      >
        <span data-fitty>LARAVEL</span> <span data-fitty>INDONESIA</span>
      </h1>
    </div>

    <div class="w-full flex flex-col bg-background relative">
      <div class="border-zinc-900 border-t h-4"></div>
      
      <div class="flex md:flex-row md:p-0 p-6 md:gap-0 gap-4 flex-col justify-between group border-y border-zinc-900 items-center">
        <div class="flex justify-center md:border-r border-zinc-900 items-center md:h-16 md:w-40 shrink-0">
          <span class="md:text-lg text-xl md:font-bold text-foreground-heading">
            50+ Anggota
          </span>
        </div>
        
        <div class="w-full relative h-16 md:flex hidden items-center">
          <div class="w-full h-px bg-zinc-800 group-has-[a:hover]:bg-laravel"></div>
          
          <div class="w-px h-[70%] bg-zinc-800 right-130 -bottom-1.5 absolute rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
          <div class="w-px h-[70%] bg-zinc-800 right-130 -top-1.5 absolute -rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
          
          <div class="w-px h-[70%] bg-zinc-800 right-140 -bottom-1.5 absolute rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
          <div class="w-px h-[70%] bg-zinc-800 right-140 -top-1.5 absolute -rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
          
          <div class="w-px h-[70%] bg-zinc-800 right-150 -bottom-1.5 absolute rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
          <div class="w-px h-[70%] bg-zinc-800 right-150 -top-1.5 absolute -rotate-45 group-has-[a:hover]:bg-laravel group-has-[a:hover]:right-4 transition-all"></div>
        </div>
        
        <div class="px-2 shrink-0">
          <a
            href="https://discord.gg/VjUnPtZ8DP"
            target="_blank"
            rel="noopener noreferrer"
            class="text-laravel border-laravel/30 bg-linear-to-b from-transparent to-laravel/6 border hover:text-white hover:after:bg-laravel after:content-[''] after:absolute after:inset-0 after:transition-all h-12 px-6 text-lg relative group/button inline-flex items-center justify-center"
          >
            <div class="absolute border-laravel h-[30%] aspect-square transition-all border-l border-t -left-px -top-px group-hover/button:-left-1 group-hover/button:-top-1"></div>
            <div class="absolute border-laravel h-[30%] aspect-square transition-all border-r border-t -right-px -top-px group-hover/button:-right-1 group-hover/button:-top-1"></div>
            <div class="absolute border-laravel h-[30%] aspect-square transition-all border-l border-b -left-px -bottom-px group-hover/button:-left-1 group-hover/button:-bottom-1"></div>
            <div class="absolute border-laravel h-[30%] aspect-square transition-all border-r border-b -right-px -bottom-px group-hover/button:-right-1 group-hover/button:-bottom-1"></div>
            <span class="relative z-10">Gabung Discord</span>
          </a>
        </div>
      </div>
      
      <div class="border-zinc-900 border-b h-4"></div>
    </div>
  </div>

  <aside class="absolute z-10 right-0 lg:top-0 left-0 lg:left-auto bottom-0 lg:w-16 lg:h-auto w-auto h-16 overflow-hidden">
    <div class="lg:hidden">
      <PatternBlocks duration={30} orientation="horizontal" direction="backward" />
    </div>
    <div class="hidden lg:block">
      <PatternBlocks orientation="vertical" direction="backward" />
    </div>
  </aside>
</main>
