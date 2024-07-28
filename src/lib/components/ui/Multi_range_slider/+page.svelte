<script>
	export let min_age;
	export let max_age;

	let min = 1; // 초기 최소값 설정
	let max = 70; // 초기 최대값 설정
	let min_val = min_age; //바뀌는 최소값
	let max_val = max_age; //바뀌는 최대값
	let min_percent; // 최소값을 백분율로 변환
	let max_percent; // 최대값을 백분율로 변환

	// Convert to percentage
	const get_percent = (value) => Math.round(((value - min) / (max - min)) * 100);

	// Watch for changes
	$: min_percent = get_percent(min_val);
	$: max_percent = get_percent(max_val);
</script>

<div>
	<input
		type="range"
		{min}
		{max}
		bind:value={min_val}
		class="thumb thumb--left"
		style="z-index: {min_val > max - 100 ? '5' : '0'}"
		on:input={(event) => {
			const value = Math.min(Number(event.target.value), max_val - 1);
			min_val = value;
			min_age = value;
		}}
	/>
	<input
		type="range"
		{min}
		{max}
		bind:value={max_val}
		class="thumb thumb--right"
		on:input={(event) => {
			const value = Math.max(Number(event.target.value), min_val + 1);
			max_val = value;
			max_age = value;
		}}
	/>

	<div class="slider">
		<div class="slider__track" />
		<div class="slider__range" style="left: {min_percent}%; width: {max_percent - min_percent}%;" />
		<div class="slider__left-value">{min_val}</div>
		<div class="slider__right-value">{max_val}</div>
	</div>
</div>

<style>
	.slider {
		position: relative;
		width: 270px;
	}

	.slider__track,
	.slider__range,
	.slider__left-value,
	.slider__right-value {
		position: absolute;
	}

	.slider__track,
	.slider__range {
		border-radius: 3px;
		height: 8px;
	}

	.slider__track {
		background-color: #f8f8f8;
		width: 100%;
		z-index: 1;
	}

	.slider__range {
		background-color: #2e81f7;
		z-index: 2;
	}

	.slider__left-value,
	.slider__right-value {
		margin-top: 15px;
		font-size: 14px;
	}

	.slider__left-value {
		left: 6px;
	}

	.slider__right-value {
		right: 0px;
	}

	/* Removing the default appearance */
	.thumb,
	.thumb::-webkit-slider-thumb {
		-webkit-appearance: none;
	}

	.thumb {
		pointer-events: none;
		position: absolute;
		height: 0;
		width: 270px;
		outline: none;
	}

	.thumb--left {
		z-index: 3;
	}

	.thumb--right {
		z-index: 4;
	}

	/* For Chrome browsers */
	.thumb::-webkit-slider-thumb {
		background-color: #2e81f7;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		height: 18px;
		width: 18px;
		margin-top: 6px;
		pointer-events: all;
		position: relative;
	}

	/* For Firefox browsers */
	.thumb::-moz-range-thumb {
		background-color: #2e81f7;
		border: none;
		border-radius: 50%;
		cursor: pointer;
		height: 18px;
		width: 18px;
		margin-top: 6px;
		pointer-events: all;
		position: relative;
	}
</style>
