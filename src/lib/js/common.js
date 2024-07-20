import { toast } from "@zerodevx/svelte-toast";
import Toast from "@/lib/components/ui/Toast/+page.svelte";

/**
 * 숫자 1000단위 마다 컴마 추가
 * @param {number} num - 컴마를 추가할 숫자
 * @return {string} 컴마가 추가된 문자열
 */
export const comma = (num) => {
	return num.toString().replace(/(\d)(?=(?:\d{3})+(?!\d))/g, "$1,");
};

/**
 * 컴마 제거
 * @param {number} num - 컴마를 제거할 숫자
 * @return {string} 컴마가 제거된 문자열
 */
export const uncomma = (num) => {
	return num.toString().replace(/[^\d]+/g, "");
};

/**
 *  날짜 형시 포맷
 * @param {Date|string} get_date
 * @return {string} 'YYYY. MM. DD'
 */
export const format_date = (get_date) => {
	const date = new Date(get_date);

	return `${date?.getFullYear() - 2000}. ${("0" + (date.getMonth() + 1)).slice(-2)}. ${("0" + date.getDate()).slice(-2)}`;
};

/**
 * toast popup 출력
 * @param {text} type - (success, warning)
 * @param {text} message
 */
export const show_toast = (type, message) => {
	toast.push({
		component: {
			src: Toast,
			props: { type: type, message: message }
		}
	});
};

/**
 * 문장 클립보드 카피
 * @param {string} text - copy할 문장
 */
export const copy_to_clipboard = (text) => {
	if (navigator.clipboard && navigator.clipboard.writeText) {
		// Modern browsers
		navigator.clipboard
			.writeText(text)
			.then(() => {
				show_toast("success", "계좌번호가 클립보드에 복사되었습니다.");
			})
			.catch((err) => {
				console.error("클립보드 복사 실패:", err);
				fall_back_copy_text_to_clipboard(text);
			});
	} else {
		// Fallback for older browsers
		fall_back_copy_text_to_clipboard(text);
	}
};

const fall_back_copy_text_to_clipboard = (text) => {
	const textArea = document.createElement("textarea");
	textArea.value = text;

	// Avoid scrolling to bottom
	textArea.style.top = "0";
	textArea.style.left = "0";
	textArea.style.position = "fixed";

	document.body.appendChild(textArea);
	textArea.focus();
	textArea.select();

	try {
		const successful = document.execCommand("copy");
		const msg = successful ? "성공" : "실패";
		console.log("Fallback: 클립보드 복사 " + msg);
		show_toast("success", "계좌번호가 클립보드에 복사되었습니다.");
	} catch (err) {
		console.error("Fallback: 클립보드 복사 실패", err);
	}

	document.body.removeChild(textArea);
};

/**
 * 오늘 날짜로부터 d-day 구하기
 * @param {date} end_date : 끝나는 날짜
 */
export const calculate_d_day = (end_date) => {
	const today = new Date();
	const comparison_date = new Date(end_date);

	today.setHours(0, 0, 0, 0); //시간 차이 제거
	comparison_date.setHours(0, 0, 0, 0); ////시간 차이 제거

	// 두 날짜의 차이(밀리초 단위)를 구함
	let difference_millie_seconds = comparison_date - today;

	// 밀리초 단위의 차이를 일(day) 단위로 변환
	let difference_in_days = difference_millie_seconds / (1000 * 60 * 60 * 24);

	if (difference_in_days < 0) {
		return "마감";
	}

	return difference_in_days;
};

/**
 * 생년월일 기준 만 나이 계산
 * @param {} birth_date
 * @returns {number} age
 */
export const calculate_age = (get_birth_date) => {
	const birth_date = new Date(get_birth_date);
	const current_date = new Date();

	const birth_year = birth_date.getFullYear();
	const birth_month = birth_date.getMonth();
	const birth_day = birth_date.getDate();

	const current_year = current_date.getFullYear();
	const current_month = current_date.getMonth();
	const current_day = current_date.getDate();

	let age = current_year - birth_year;

	if (current_month < birth_month || (current_month === birth_month && current_day < birth_day)) {
		age--;
	}

	return age;
};

/**
 * 에러 처리 함수
 * @param {function} fn - 에러 핸들링할 함수
 * @returns {function}
 */
export const error_handling = (fn) => {
	return async (...args) => {
		try {
			return await fn(...args);
		} catch (error) {
			console.error(`Error: ${error.message}`);
			alert(`Error ${error.message}`);
			throw error;
		}
	};
};
