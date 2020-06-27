import moment from "moment";
const today = () => {
	return moment().format("YYYY-MM-DD");
};

const oneMonthAgoDate = () => {
	return moment()
		.subtract(1, "month")
		.format("YYYY-MM-DD");
};
export { today, oneMonthAgoDate };
