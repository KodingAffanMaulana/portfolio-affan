<template>
    <nav class="py-4 px-4 sm:px-32 bg-gray-800 flex justify-between w-full fixed z-10 text-white text-sm font-medium">
        <div>
            <NuxtLink class="hover:text-[aqua]" to="/articles">&larr; Back
            </NuxtLink>
        </div>
        <div>
            <NuxtLink to="/" class="hover:text-[aqua]">Home</NuxtLink>
        </div>
    </nav>

    <slot />
</template>