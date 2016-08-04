<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $title?></title>
  
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
	<?php if(isset($includes['css']) AND count($includes['css']) > 0): ?>
    <?php foreach($includes['css'] as $file): ?>
        <link rel="stylesheet" href="<?php echo $file['file']; ?>">
    <?php endforeach; ?>
	<?php endif; ?>

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body class="hold-transition skin-blue-light fixed sidebar-mini">
    <div class="wrapper">
        <header class="main-header">
            <!-- Logo -->
            <a href="<?php echo site_url('');?>" class="logo">
                <!-- mini logo for sidebar mini 50x50 pixels -->
                <span class="logo-mini">信研黄金</span>
                <!-- logo for regular state and mobile devices -->
                <span class="logo-lg">信研黄金</span>
            </a>
        <!-- Header Navbar: style can be found in header.less -->
            <?php echo $navbar ?>
        </header>
        <!-- Left side column. contains the logo and sidebar -->
        <aside class="main-sidebar">

        <!-- sidebar: style can be found in sidebar.less -->
        <?php echo $sidebar ?>
        <!-- /.sidebar -->
        </aside>
		<div class="content-wrapper">
			<?php echo $content; ?>
		</div>

	    <footer class="main-footer">
	        <div class="pull-right hidden-xs">
	          <b>Version</b> 2.3.1
	        </div>
	        <strong>Copyright &copy; 2016 <a href="https://www.gong-e.com">信研普惠金融</a>.</strong>
	    </footer>

	    <?php echo $controlbar; ?>
	    
	</div>

<?php if(isset($includes['js']) AND count($includes['js']) > 0): ?>
    <?php foreach($includes['js'] as $js): ?>
    <script type="text/javascript" src="<?php echo $js['file']; ?>"></script>
    <?php endforeach; ?>
<?php endif; ?>
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<script src="<?php echo asset_url('adminlte/dist/js/app.min.js')?>"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="<?php echo asset_url('adminlte/dist/js/pages/dashboard.js')?>"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo asset_url('adminlte/dist/js/demo.js')?>"></script>

<!-- ./wrapper -->



</body>
</html>