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
