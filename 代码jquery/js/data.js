var provinces = ["广东省", "湖北省", "湖南省", "江西省", "四川省"];

var cities = [
	["深圳市", "广州市", "佛山市", "东莞市", "河源市"],
	["武汉市", "黄石市", "宜昌市", "襄樊市", "孝感市"],
	["长沙市", "衡阳市", "岳阳市", "益阳市", "株洲市", "郴州市", "湘潭市"],
	["赣州市", "吉安市", "南昌市", "九江市", "宜春市", "上饶市", "鹰潭市"],
	["成都市", "绵阳市", "德阳市", "南充市"]
];

var counties = [
	[
		["南山区", "宝安区", "龙华区", "福田区", "罗湖区", "龙岗区", "光明新区"],
		["越秀区", "荔湾区", "海珠区", "天河区", "白云区", "黄埔区", "番禺区", "花都区", "南沙区", "萝岗区", "增城市", "从化市", "其他"],
		["三水区", "南海区", "顺德区", "禅城区", "高明区", "其他"],
		["樟木头镇", "虎门镇", "石排镇", "清溪镇", "塘厦镇", "常平镇"],
		["源城区", "紫金县", "连平县", "和平县", "龙川县", "东源县"]
	],
	[
		["江岸区", "江汉区", "硚口区", "汉阳区", "武昌区", "洪山区", "青山区"], //武汉市
		["黄石港区", "西塞山区", "下陆区", "铁山区"], //黄石市
		["西陵区", "伍家岗区", "点军区", "猇亭区", "夷陵区", "宜都市", "当阳市", "枝江市", "秭归县", "远安县", "兴山县", "五峰土家族自治县", "长阳土家族自治县", "其他"],
		["襄城区", "樊城区", "襄阳区", "老河口市", "枣阳市", "宜城市", "南漳县", "谷城县", "保康县", "其他"],
		["孝南区", "应城市", "安陆市", "汉川市", "云梦县", "大悟县", "孝昌县", "其他"],
	],
	[
		["岳麓区", "芙蓉区", "天心区", "开福区", "雨花区", "浏阳市", "长沙县", "望城县", "宁乡县", "其他"],
		["雁峰区", "珠晖区", "石鼓区", "蒸湘区", "南岳区", "耒阳市", "常宁市", "衡阳县", "衡东县", "衡山县", "衡南县", "祁东县", "其他"],
		["岳阳楼区", "云溪区", "君山区", "临湘市", "汨罗市", "岳阳县", "湘阴县", "平江县", "华容县", "其他"],
		["赫山区", "资阳区", "沅江市", "桃江县", "南县", "安化县", "其他"],
		["天元区", "荷塘区", "芦淞区", "石峰区", "醴陵市", "株洲县", "炎陵县", "茶陵县", "攸县", "其他"],
		["北湖区", "苏仙区", "资兴市", "宜章县", "汝城县", "安仁县", "嘉禾县", "临武县", "桂东县", "永兴县", "桂阳县", "其他"],
		["岳塘区", "雨湖区", "湘乡市", "韶山市", "湘潭县", "其他"]
	],
	[
		["章贡区", "瑞金市", "南康市", "石城县", "安远县", "赣县", "宁都县", "寻乌县", "兴国县", "定南县", "上犹县", "于都县", "龙南县", "崇义县", "信丰县", "全南县",
			"大余县", "会昌县", "其他"
		],
		["吉州区", "青原区", "井冈山市", "吉安县", "永丰县", "永新县", "新干县", "泰和县", "峡江县", "遂川县", "安福县", "吉水县", "万安县", "其他"],
		["东湖区", "西湖区", "青云谱区", "湾里区", "青山湖区", "新建县", "南昌县", "进贤县", "安义县", "其他"],
		["浔阳区", "庐山区", "瑞昌市", "九江县", "星子县", "武宁县", "彭泽县", "永修县", "修水县", "湖口县", "德安县", "都昌县", "其他"],
		["袁州区", "丰城市", "樟树市", "高安市", "铜鼓县", "靖安县", "宜丰县", "奉新县", "万载县", "上高县", "其他"],
		["信州区", "德兴市", "上饶县", "广丰县", "鄱阳县", "婺源县", "铅山县", "余干县", "横峰县", "弋阳县", "玉山县", "万年县", "其他"],
		["月湖区", "贵溪市", "余江县", "其他"]
	],
	[
		["青羊区", "锦江区", "金牛区", "武侯区", "成华区", "龙泉驿区", "青白江区", "新都区", "温江区", "都江堰市", "彭州市", "邛崃市", "崇州市", "金堂县", "郫县", "新津县",
			"双流县", "蒲江县", "大邑县", "其他"
		],
		["涪城区", "游仙区", "江油市", "盐亭县", "三台县", "平武县", "安县", "梓潼县", "北川羌族自治县", "其他"],
		["旌阳区", "广汉市", "什邡市", "绵竹市", "罗江县", "中江县", "其他"],
		["顺庆区", "高坪区", "嘉陵区", "阆中市", "营山县", "蓬安县", "仪陇县", "南部县", "西充县", "其他"]
	]
]
