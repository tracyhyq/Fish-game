/**
 * 模拟数据
 * @author tracyqiu
 * @date 2015-1-12
 */

define([], function(){
	return {	
		fishes: [
			{
				name: '金枪鱼',
				code: 50,
				rate: 0.05,
				max: 100,
				min: 96
			},
			{
				name: '闭目鱼',
				code: 30,
				rate: 0.1,
				max: 95,
				min: 86
			},
			{
				name: '三文鱼',
				code: 20,
				rate: 0.15,
				max: 85,
				min: 71
			},
			{
				name: '鲷鱼',
				code: 10,
				rate: 0.2,
				max: 70,
				min: 51
			},
			{
				name: '虾',
				code: 5,
				rate: 0.5,
				max: 50,
				min: 1
			}
		],
		prize: [
			{
				text: "好可惜，差一点就中了~",
				max: 50,
				min: 25
			},
			{
				text: "恭喜您，获得10元代金券~",
				max: 80,
				min: 51
			},
			{
				text: "太给力了，获得了30元代金券~",
				max: 135,
				min: 81
			},
			{
				text: "不敢相信，获得了50元代金券~",
				max: 185,
				min: 136
			},
			{
				text: "神啊，您获得了100元代金券~",
				max: 250,
				min: 186
			}
		]
	};
});