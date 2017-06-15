<?php
// Get template args
extract(dentario_template_last_args('single-footer'));

if (dentario_get_custom_option("show_post_author") == 'yes') {
	$post_author_name = $post_author_socials = '';
	$show_post_author_socials = true;
	if ($post_data['post_type']=='post') {
		$post_author_info = get_user_meta($post_data['post_author_id']);
		if (array_key_exists('user_position', $post_author_info)) {
			$post_author_position = $post_author_info['user_position'][0];
		}
		$post_author_name = $post_data['post_author'];
		$post_author_url = $post_data['post_author_url'];
		$post_author_email = get_the_author_meta('user_email', $post_data['post_author_id']);
		$mult = dentario_get_retina_multiplier();
		$post_author_avatar = get_avatar($post_author_email, 105*$mult);
		$post_author_descr = dentario_do_shortcode(nl2br(get_the_author_meta('description', $post_data['post_author_id'])));
		if ($show_post_author_socials) 
			$post_author_socials = dentario_show_user_socials( array(
				'author_id' => $post_data['post_author_id'],
				'size' => 'tiny',
				'shape' => 'round',
				'echo' => false
				)
			);
	}
	if (!empty($post_author_name) && !empty($post_author_descr)) {
		?>
		<section class="post_author author vcard" itemprop="author" itemscope itemtype="http://schema.org/Person">
			<div class="post_author_avatar"><a href="<?php echo esc_url($post_data['post_author_url']); ?>" itemprop="image"><?php echo trim($post_author_avatar); ?></a></div>
			<h6 class="post_author_title"><span itemprop="name" class="post_author_name"><a href="<?php echo esc_url($post_author_url); ?>" class="fn"><?php echo trim($post_author_name); ?></a></span><?php echo isset($post_author_position) ? '<span class="post_author_position">' . esc_html($post_author_position) . '</span>' : ''?></h6>
			<div class="post_author_info" itemprop="description">
			<?php echo trim($post_author_descr); ?>
			<?php if ($post_author_socials!='') echo trim($post_author_socials); ?>
			</div>
		</section>
		<?php
	}
}
?>