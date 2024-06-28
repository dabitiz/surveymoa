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
