<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title><?php echo $title?></title>
  
    <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">

    <link rel="stylesheet" href="<?php echo asset_url('adminlte/bootstrap/css/bootstrap.min.css')?>">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">

    <link rel="stylesheet" href="<?php echo asset_url('adminlte/dist/css/AdminLTE.min.css')?>">

    <link rel="stylesheet" href="<?php echo asset_url('adminlte/dist/css/skins/_all-skins.min.css')?>">

    <!-- iCheck -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/iCheck/flat/blue.css');?>">
    <!-- Morris chart -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/morris/morris.css');?>">
    <!-- jvectormap -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.css');?>">
    <!-- Date Picker -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/datepicker/datepicker3.css');?>">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/daterangepicker/daterangepicker.css');?>">
    <!-- bootstrap wysihtml5 - text editor -->
    <link rel="stylesheet" href="<?php echo asset_url('adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css');?>">
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

