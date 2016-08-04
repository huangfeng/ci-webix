<?php 
	$this->load->view('header',array(
		'navbar'	=> $navbar,
		'sidebar'	=> $sidebar
	));	?>

	<div class="content-wrapper">
		<?php echo $content; ?>
	</div>

<?php
	$this->load->view('footer',array(
		'controlbar' => $controlbar
	)); ?>