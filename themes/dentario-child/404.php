<?php
/**
 * Template for Page 404
 */

// Tribe Events hack - create empty post object
global $post;
if (!isset($post)) {
	$post = new stdClass();
	$post->post_type = 'unknown';
}
// End Tribe Events hack

// get_header();
?>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<link rel="icon" type="image/x-icon" href="">
		<title>Page Not Found 404</title>
		<style media="screen">
			body {
				background: #cecece;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			h1 {
				font-family: calibri;
		    font-size: 5em;
		    text-align: center;
			}
			img {
				width: 100%;
				max-width: 600px;
			}
			p {
				text-align: center;
				font-family: calibri;
				font-size: 1.5em;
				line-height: 1.2em;
			}
			a {
				background: #896228;
				padding: 10px 20px;
				color: #fff;
				text-decoration: none;
				display: inline-block;
			}
			@media screen and(max-width: 500px) {
				a {
					margin-top: 20px;
				}
			}
		</style>
	</head>
	<body>
		<div class="error-page">
			<div class="container">
				<h1>Mmm. Awkward</h1>
				<div class="evil">
					<img src="http://serenasandiegodentist.com/wp-content/uploads/panda.png" alt="">
				</div>


				<div class="buttons">
					<p>
						Don’t worry, here are some helpful links instead
						<a href="http://serenasandiegodentist.com/">GO BACK HOME</a>
					</p>
				</div>

		</div>
		</div>
	</body>
</html>


<?php
// get_footer();
?>
