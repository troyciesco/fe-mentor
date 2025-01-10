<script setup lang="ts">
import data from "../lib/data.json"
import ReactionIcon from "./icons/ReactionIcon.vue"
import MemoryIcon from "./icons/MemoryIcon.vue"
import VerbalIcon from "./icons/VerbalIcon.vue"
import VisualIcon from "./icons/VisualIcon.vue"

const icons = {
	reaction: ReactionIcon,
	memory: MemoryIcon,
	verbal: VerbalIcon,
	visual: VisualIcon
}
</script>
<template>
	<div class="max-w-[736px] grid grid-cols-2 bg-white rounded-[32px]">
		<div
			class="bg-gradient-to-b from-[#7755FF] via-[#6943FF] to-[#2F2CE9] rounded-[32px] p-10 flex flex-col items-center">
			<h1 class="text-2xl font-bold text-center text-[#CAC9FF] mb-9">
				Your Result
			</h1>
			<div
				class="w-[200px] h-[200px] text-white flex items-center justify-center bg-gradient-to-b from-[#4D21C9] to-[#2521C9]/0 rounded-full mb-7">
				<div class="flex flex-col items-center gap-1">
					<div class="text-7xl font-extrabold">76</div>
					<div class="text-lg font-bold text-[#CAC9FF]">of 100</div>
				</div>
			</div>
			<div class="text-[32px] font-bold text-white mb-1">Great</div>
			<p class="font-medium text-lg text-[#CAC9FF] text-center text-balance">
				Your performance exceed 65% of the people conducting the test here!
			</p>
		</div>
		<div class="bg-white rounded-[32px] p-10">
			<div class="text-2xl font-bold text-[#303B59] mb-7">Summary</div>
			<ul class="space-y-4 mb-10">
				<li v-for="item in data" :key="item.category">
					<div
						class="px-4 py-[18px] flex items-center justify-between rounded-xl"
						:style="`background: ${item.colors.bg}`">
						<div
							class="flex items-center gap-3 text-xl font-medium"
							:style="`color: ${item.colors.text}`">
							<span>
								<component :is="icons[item.icon]"></component>
							</span>
							<span>{{ item.category }}</span>
						</div>
						<div class="text-[#303B59] font-bold text-lg">
							<span>{{ item.score }}</span>
							<span class="opacity-50"> / 100</span>
						</div>
					</div>
				</li>
			</ul>
			<button
				class="w-full text-center bg-[#303B59] text-white rounded-full py-4 text-lg font-bold">
				Continue
			</button>
		</div>
	</div>
</template>
