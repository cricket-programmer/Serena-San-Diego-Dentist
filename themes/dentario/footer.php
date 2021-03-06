<?php
/**
 * The template for displaying the footer.
 */

				dentario_close_wrapper();	// <!-- </.content> -->

				dentario_profiler_add_point(esc_html__('After Page content', 'dentario'));
	
				// Show main sidebar
				get_sidebar();

				if (dentario_get_custom_option('body_style')!='fullscreen') dentario_close_wrapper();	// <!-- </.content_wrap> -->
				?>
			
			</div>		<!-- </.page_content_wrap> -->
			
			<?php
			// Footer Testimonials stream
			require_once dentario_get_file_dir('templates/_parts/footer-testimonials.php');


			// Footer sidebar
			require_once dentario_get_file_dir('templates/_parts/footer-sidebar.php');


			// Footer Twitter stream
			require_once dentario_get_file_dir('templates/_parts/twitter-stream.php');


			// Google map
			require_once dentario_get_file_dir('templates/_parts/google-map.php');
			

			// Copyright area
			require_once dentario_get_file_dir('templates/_parts/copyright-area.php');
			

			dentario_profiler_add_point(esc_html__('After Footer', 'dentario'));
			?>
			
		</div>	<!-- /.page_wrap -->

	</div>		<!-- /.body_wrap -->
	
	<?php if ( !dentario_param_is_off(dentario_get_custom_option('show_sidebar_outer')) ) { ?>
	</div>	<!-- /.outer_wrap -->
	<?php } ?>

<?php
// Post/Page views counter
get_template_part(dentario_get_file_slug('templates/_parts/views-counter.php'));

// Login/Register
if (dentario_get_theme_option('show_login')=='yes') {
	dentario_enqueue_popup();
	// Anyone can register ?
	if ( (int) get_option('users_can_register') > 0) {
		get_template_part(dentario_get_file_slug('templates/_parts/popup-register.php'));
	}
	get_template_part(dentario_get_file_slug('templates/_parts/popup-login.php'));
}

// Front customizer
if (dentario_get_custom_option('show_theme_customizer')=='yes') {
	require_once trailingslashit( get_template_directory() ) .'fw/core/core.customizer/front.customizer.php';
}
?>

<a href="#" class="scroll_to_top icon-up" title="<?php esc_attr_e('Scroll to top', 'dentario'); ?>"></a>

<div class="custom_html_section">
<?php echo force_balance_tags(dentario_get_custom_option('custom_code')); ?>
</div>

<?php
echo force_balance_tags(dentario_get_custom_option('gtm_code2'));

dentario_profiler_add_point(esc_html__('After Theme HTML output', 'dentario'));

wp_footer(); 
?>

</body>
</html>