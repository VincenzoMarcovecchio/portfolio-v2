import React from 'react';
import { Helmet } from 'react-helmet';

const Test = () => (
    <div>
    <Helmet>

	<style>{```
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
		```}</style>
		<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
        <script type="text/javascript">{`
			var scorePoints = [];
			tinymce.init({
				selector:'#contenteditor',
				plugins: 'print preview paste importcss searchreplace autolink save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help charmap quickbars',
				menubar: 'file edit view insert format tools table help',
				toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
				setup : function(ed) {      
					ed.on('KeyUp', function (e) {	
						generateContentReportDelayed();				
					});					
				}
			});
			
			var typingTimer;
			function generateContentReportDelayed()
			{
				clearTimeout(typingTimer);
				typingTimer = setTimeout(generateContentReport, 1000);
			}
			
			function generateContentReport()
			{
				jQuery(".detailedpoints .pointlevel").hide();
				scorePoints = [];
				var editorText = tinyMCE.activeEditor.getContent();
				var wordCount = tinyMCE.activeEditor.plugins.wordcount.getCount();
				var targetKW = jQuery("#targetkw").val();
				var pTitle = jQuery("#ptitle").val();
				
				if(targetKW.length > 0)
				{
					if(editorText.length > 30)
					{
						kwparts = targetKW.split(" ");
						//TARGET KW ANALYSIS
						if(kwparts.length >= 10)
							pushPoint(PointLevels.Critical, "Your target keyword contains 10 or more words. Long tail keywords are great for traffic, but this appears to be too long to effectively target.");
						if(targetKW.length <= 5)
							pushPoint(PointLevels.WorthNoting, "Your target keyword is very short. It may be very difficult to target this due to accidential overoptimising and steep competition."); 
						
						//WORD COUNT ANALYSIS
						if(wordCount < 150)
							pushPoint(PointLevels.Critical, "Content is way too short. You need to aim for a minimum of 300 words. Current is " + wordCount + " words");
						else if(wordCount > 150 && wordCount < 300)
							pushPoint(PointLevels.NeedsWork, "Try aiming for 300 words. Current is " + wordCount + " words");
						else if(wordCount > 800)
							pushPoint(PointLevels.Perfection, "You have provided well above the recommended. The amount of content in this post is great and will go a long way toward ranking for various keywords.");
						else 
							pushPoint(PointLevels.Great, "Your content has more than 300 words. Current is " + wordCount + " words");
						
						//KW Count
						var kwCount = editorText.split(targetKW).length - 1;
						var kwDen =  ( kwCount / ( wordCount -( kwCount * ( kwparts.length-1 ) ) ) ) * 100;
						if(kwCount.length == 0)
							pushPoint(PointLevels.Critical, "Your target keyword has not been used once. The keyword must be provided at lease once in the body of the post.");
							
						if(kwDen > 3)
							pushPoint(PointLevels.Critical, "Your keyword is being used too often ("+kwCount.length+" times) in the content. If you use the keyword too much, you could get a penalty for keyword stuffing. Try and reduce the amount of times you use it. Once or twice is generally enough for a a piece of text that is 300 words.");
						
						var titleKwCount = pTitle.split(targetKW).length - 1;
						if(titleKwCount.length == 0)
							pushPoint(PointLevels.Critical, "Your target keyword is not used in the title. It is recommended that the title contain the keyword you are aiming to target.");
							
						//IMAGE ANALYSIS
						var imgCount = editorText.split("<img").length -1;
						if(imgCount == 0)
							pushPoint(PointLevels.NeedsWork, "Your content does not contain any images. Images are highly recommended as the alt tag can help improve the targeting of keywords.");
							
							
							
						//OUTPUT RESULT
						renderScorePoints();
					}
					else
					{
						setScore(0);
						setOverview("Content too short", "You need to provide more than 30 characters for analysis to begin.");
						console.log(editorText);
					}
				}
				else
				{
					setScore(0);
					setOverview("Missing Target Keyword", "You must provide a target keyword in the input box below in order to generate a valid SEO score.");
					console.log(targetKW);
				}
			}
			
			//levels: 0 platinum, 1 good, 2: medium, 3: critical
			const PointLevels = Object.freeze({"Perfection":0, "Great":1, "NeedsWork":2, "Critical":3, "WorthNoting": 4})
			function pushPoint(level, detail)
			{
				scorePoints.push({level:level, detail:detail});
			}
			
			function renderScorePoints()
			{
				//detailedpoints
				var totalPoints = 0;
				for(var i = 0; i < scorePoints.length; i++)
				{
					switch(scorePoints[i].level)
					{
						case 0:
						case 1:
							totalPoints += 10;
						break;
						case 2:
							totalPoints += 5;
						break;
					}
					
					jQuery(".detailedpoints .level" +scorePoints[i].level + " ul").append('<li class="point">'+scorePoints[i].detail);
					jQuery(".detailedpoints .level" +scorePoints[i].level).slideDown();
				}
				
				var average = totalPoints / scorePoints.length;
				console.log(average);
				
				setScore(Math.round( average * 10 ) / 10);
			}
			
			function setOverview(title, detail)
			{
				jQuery(".keypoints .main").text(title);
				jQuery(".keypoints .detail").text(detail);
			}
			
			function setScore(score)
			{
				var detail = "";
				var classcolor = "bad";
				
				if(score == 10)
				{
					detail = "Perfect!";
					setOverview(detail, "The content is perfectly optimised for the keywords you are looking to target");
					classcolor = "perfect";
				}
				else if(score < 10 && score >= 8)
				{
					detail = "Very Good";
					setOverview(detail, "There are some minor improvements you can make to this content. But overall, the quality is very good. You should have no problem getting search engines to identify the target keywords with this content.");
					classcolor = "vgood";
				}
				else if(score < 8 && score >= 7)
				{
					detail = "Good";
					setOverview(detail, "The content is good but there is room for improvement.");
					classcolor = "good";
				}
				else if(score < 7 && score >= 5)
				{
					detail = "Mediocre";
					setOverview(detail, "The content you have written will likely target the keyword you are looking for to some degree, but it will not perform as well as others. You need to optimise further.");
					classcolor = "mediocre";
				}
				else if(score < 5 && score >= 3)
				{
					detail = "Bad";
					setOverview(detail, "The content is not targeting the keyword well enough to rank in search engines.");
					classcolor = "bad";
				}
				else if(score < 3 && score >= 2)
				{
					detail = "Very Bad";
					setOverview(detail, "It is highly unlikely that you will get this content to appear in search results for the target keyword.");
					classcolor = "vbad";
				}
				else if(score < 2 && score >= 1)
				{
					detail = "Terrible";
					setOverview(detail, "It will take a miracle for this content to rank in search engines at all, never mind for the keyword provided. You need to improve this content.");
					classcolor = "terrible";
				}
				else// if(score < 1)
				{
					detail = "Invalid";
					setOverview(detail, "The content you have provided could not be analyzed. Please complete all inputs.");
				}
				
				
				jQuery(".score").html("<div class=\"num "+classcolor+"\">" + score + "<div class=\"det\">" + detail + "</div></div>");
			}
		</script>
			var scorePoints = [];
			tinymce.init({
				selector:'#contenteditor',
				plugins: 'print preview paste importcss searchreplace autolink save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern help charmap quickbars',
				menubar: 'file edit view insert format tools table help',
				toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
				setup : function(ed) {      
					ed.on('KeyUp', function (e) {	
						generateContentReportDelayed();				
					});					
				}
			});
			
			var typingTimer;
			function generateContentReportDelayed()
			{
				clearTimeout(typingTimer);
				typingTimer = setTimeout(generateContentReport, 1000);
			}
			
			function generateContentReport()
			{
				jQuery(".detailedpoints .pointlevel").hide();
				scorePoints = [];
				var editorText = tinyMCE.activeEditor.getContent();
				var wordCount = tinyMCE.activeEditor.plugins.wordcount.getCount();
				var targetKW = jQuery("#targetkw").val();
				var pTitle = jQuery("#ptitle").val();
				
				if(targetKW.length > 0)
				{
					if(editorText.length > 30)
					{
						kwparts = targetKW.split(" ");
						//TARGET KW ANALYSIS
						if(kwparts.length >= 10)
							pushPoint(PointLevels.Critical, "Your target keyword contains 10 or more words. Long tail keywords are great for traffic, but this appears to be too long to effectively target.");
						if(targetKW.length <= 5)
							pushPoint(PointLevels.WorthNoting, "Your target keyword is very short. It may be very difficult to target this due to accidential overoptimising and steep competition."); 
						
						//WORD COUNT ANALYSIS
						if(wordCount < 150)
							pushPoint(PointLevels.Critical, "Content is way too short. You need to aim for a minimum of 300 words. Current is " + wordCount + " words");
						else if(wordCount > 150 && wordCount < 300)
							pushPoint(PointLevels.NeedsWork, "Try aiming for 300 words. Current is " + wordCount + " words");
						else if(wordCount > 800)
							pushPoint(PointLevels.Perfection, "You have provided well above the recommended. The amount of content in this post is great and will go a long way toward ranking for various keywords.");
						else 
							pushPoint(PointLevels.Great, "Your content has more than 300 words. Current is " + wordCount + " words");
						
						//KW Count
						var kwCount = editorText.split(targetKW).length - 1;
						var kwDen =  ( kwCount / ( wordCount -( kwCount * ( kwparts.length-1 ) ) ) ) * 100;
						if(kwCount.length == 0)
							pushPoint(PointLevels.Critical, "Your target keyword has not been used once. The keyword must be provided at lease once in the body of the post.");
							
						if(kwDen > 3)
							pushPoint(PointLevels.Critical, "Your keyword is being used too often ("+kwCount.length+" times) in the content. If you use the keyword too much, you could get a penalty for keyword stuffing. Try and reduce the amount of times you use it. Once or twice is generally enough for a a piece of text that is 300 words.");
						
						var titleKwCount = pTitle.split(targetKW).length - 1;
						if(titleKwCount.length == 0)
							pushPoint(PointLevels.Critical, "Your target keyword is not used in the title. It is recommended that the title contain the keyword you are aiming to target.");
							
						//IMAGE ANALYSIS
						var imgCount = editorText.split("<img").length -1;
						if(imgCount == 0)
							pushPoint(PointLevels.NeedsWork, "Your content does not contain any images. Images are highly recommended as the alt tag can help improve the targeting of keywords.");
							
							
							
						//OUTPUT RESULT
						renderScorePoints();
					}
					else
					{
						setScore(0);
						setOverview("Content too short", "You need to provide more than 30 characters for analysis to begin.");
						console.log(editorText);
					}
				}
				else
				{
					setScore(0);
					setOverview("Missing Target Keyword", "You must provide a target keyword in the input box below in order to generate a valid SEO score.");
					console.log(targetKW);
				}
			}
			
			//levels: 0 platinum, 1 good, 2: medium, 3: critical
			const PointLevels = Object.freeze({"Perfection":0, "Great":1, "NeedsWork":2, "Critical":3, "WorthNoting": 4})
			function pushPoint(level, detail)
			{
				scorePoints.push({level:level, detail:detail});
			}
			
			function renderScorePoints()
			{
				//detailedpoints
				var totalPoints = 0;
				for(var i = 0; i < scorePoints.length; i++)
				{
					switch(scorePoints[i].level)
					{
						case 0:
						case 1:
							totalPoints += 10;
						break;
						case 2:
							totalPoints += 5;
						break;
					}
					
					jQuery(".detailedpoints .level" +scorePoints[i].level + " ul").append('<li class="point">'+scorePoints[i].detail);
					jQuery(".detailedpoints .level" +scorePoints[i].level).slideDown();
				}
				
				var average = totalPoints / scorePoints.length;
				console.log(average);
				
				setScore(Math.round( average * 10 ) / 10);
			}
			
			function setOverview(title, detail)
			{
				jQuery(".keypoints .main").text(title);
				jQuery(".keypoints .detail").text(detail);
			}
			
			function setScore(score)
			{
				var detail = "";
				var classcolor = "bad";
				
				if(score == 10)
				{
					detail = "Perfect!";
					setOverview(detail, "The content is perfectly optimised for the keywords you are looking to target");
					classcolor = "perfect";
				}
				else if(score < 10 && score >= 8)
				{
					detail = "Very Good";
					setOverview(detail, "There are some minor improvements you can make to this content. But overall, the quality is very good. You should have no problem getting search engines to identify the target keywords with this content.");
					classcolor = "vgood";
				}
				else if(score < 8 && score >= 7)
				{
					detail = "Good";
					setOverview(detail, "The content is good but there is room for improvement.");
					classcolor = "good";
				}
				else if(score < 7 && score >= 5)
				{
					detail = "Mediocre";
					setOverview(detail, "The content you have written will likely target the keyword you are looking for to some degree, but it will not perform as well as others. You need to optimise further.");
					classcolor = "mediocre";
				}
				else if(score < 5 && score >= 3)
				{
					detail = "Bad";
					setOverview(detail, "The content is not targeting the keyword well enough to rank in search engines.");
					classcolor = "bad";
				}
				else if(score < 3 && score >= 2)
				{
					detail = "Very Bad";
					setOverview(detail, "It is highly unlikely that you will get this content to appear in search results for the target keyword.");
					classcolor = "vbad";
				}
				else if(score < 2 && score >= 1)
				{
					detail = "Terrible";
					setOverview(detail, "It will take a miracle for this content to rank in search engines at all, never mind for the keyword provided. You need to improve this content.");
					classcolor = "terrible";
				}
				else// if(score < 1)
				{
					detail = "Invalid";
					setOverview(detail, "The content you have provided could not be analyzed. Please complete all inputs.");
				}
				
				
				jQuery(".score").html("<div class=\"num "+classcolor+"\">" + score + "<div class=\"det\">" + detail + "</div></div>");
			}
		`}</script>

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
