import React from 'react';
import { Helmet } from 'react-helmet';

const Test = () => (
    <div>
    <Helmet>

	<style type="text/css">{`
			#contenteditor{height:500px;}
			.seooverview .score .num{font-size: 50px;float: left;width: 20%;text-align:center}
			.seooverview .score {font-weight:bold}
			.seooverview .terrible{color:red}
			.seooverview .vbad{color:#bf4f3d}
			.seooverview .bad{color:#bf913d}
			.seooverview .mediocre{color:#bdbf3d}
			.seooverview .good{color:#81bf3d}
			.seooverview .vgood{color:#1fce1f}
			.seooverview .perfect{color:green}
			
			#targetkw, #ptitle{margin-bottom:10px; padding:5px; width:100%;}
			.keypoints .main{font-weight: bold; font-size: 18px;}
			.keypoints .detail{font-style: italic;}
			.keypoints{margin-bottom:20px; height:75px;}
			.score .det{font-size:15px;}
			
			.detailedpoints .level0, .detailedpoints .level1{background-color:#d1ffaf;}
			.detailedpoints .level2{background-color:#fdc660;}
			.detailedpoints .level3{background-color:#ffbaba;}
			.detailedpoints .level4{background-color:#d6d6d6;}
			.detailedpoints .pointlevel{display:none; padding:10px;margin-top:10px;border: 1px solid gray;border-radius:2px;}
			.detailedpoints .pointlevel .title{font-size:18px; font-weight:bold; border-bottom:1px solid black;margin-bottom:15px;}
		`}</style>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script async defer type="text/javascript" src="/tiny.js"></script>

		<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
		
</Helmet>
<div>
			<strong>Primary Keyword</strong> <i>You can change this keyword at anytime to see how you rank for a different word</i>
			<input type="text" id="targetkw" placeholder="Enter the keywords you are looking to target" onkeyup="generateContentReportDelayed()" />
		</div>
		<div>
			<strong>Post Title</strong> <i>What do you plan on using as the post title?</i>
			<input type="text" id="ptitle" placeholder="Enter the title of the post you are writing" onkeyup="generateContentReportDelayed()" />
		</div>
		<div class="seooverview">
			<div class="score"><div class="num">N/A</div></div>
			<div class="keypoints">
				<div class="main">Fill in the fields above to get started</div>
				<div class="detail">Please provide the keywords you are targeting for your post and begin typing the content into the editor to get a real time SEO analysis to see how well you will rank for those keywords.</div>
			</div>
		</div>
		<div style="clear:both"></div>
		<div>
			<strong>Type content below to be SEO optimised</strong>
			<textarea id="contenteditor"></textarea>
		</div>
		
		<div class="detailedpoints">
			<div class="pointlevel level0"><div class="title">Perfection!</div><ul></ul></div>
			<div class="pointlevel level1"><div class="title">Great</div><ul></ul></div>
			<div class="pointlevel level2"><div class="title">Needs Work</div><ul></ul></div>
			<div class="pointlevel level3"><div class="title">Critical Issues</div><ul></ul></div>
			<div class="pointlevel level4"><div class="title">Minor Issues</div><ul></ul></div>
		</div>


		<script src="/tinymce.min.js" referrerpolicy="origin"></script>
        </div>
);

export default React.memo(Test);
