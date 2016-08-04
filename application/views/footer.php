
    <footer class="main-footer">
        <div class="pull-right hidden-xs">
          <b>Version</b> 2.3.1
        </div>
        <strong>Copyright &copy; 2016 <a href="https://www.gong-e.com">信研普惠金融</a>.</strong>
    </footer>

    <?php echo $controlbar; ?>
    <!-- Add the sidebar's background. This div must be placed
    immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
</div>
<!-- jQuery 2.2.3 -->
<script src="<?php echo asset_url('adminlte/plugins/jQuery/jquery-2.2.3.min.js')?>"></script>
<!-- jQuery UI 1.11.4 -->
<script src="https://code.jquery.com/ui/1.11.4/jquery-ui.min.js"></script>
<!-- Resolve conflict in jQuery UI tooltip with Bootstrap tooltip -->
<script>
    $.widget.bridge('uibutton', $.ui.button);
</script>
<!-- Bootstrap 3.3.6 -->
<script src="<?php echo asset_url('adminlte/bootstrap/js/bootstrap.min.js')?>"></script>
<!-- Morris.js charts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.1.0/raphael-min.js"></script>
<script src="<?php echo asset_url('adminlte/plugins/morris/morris.min.js')?>"></script>
<!-- Sparkline -->
<script src="<?php echo asset_url('adminlte/plugins/sparkline/jquery.sparkline.min.js')?>"></script>
<!-- jvectormap -->
<script src="<?php echo asset_url('adminlte/plugins/jvectormap/jquery-jvectormap-1.2.2.min.js')?>"></script>
<script src="<?php echo asset_url('adminlte/plugins/jvectormap/jquery-jvectormap-world-mill-en.js')?>"></script>
<!-- jQuery Knob Chart -->
<script src="<?php echo asset_url('adminlte/plugins/knob/jquery.knob.js')?>"></script>
<!-- daterangepicker -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.11.2/moment.min.js"></script>
<script src="<?php echo asset_url('adminlte/plugins/daterangepicker/daterangepicker.js')?>"></script>
<!-- datepicker -->
<script src="<?php echo asset_url('adminlte/plugins/datepicker/bootstrap-datepicker.js')?>"></script>
<!-- Bootstrap WYSIHTML5 -->
<script src="<?php echo asset_url('adminlte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js')?>"></script>
<!-- Slimscroll -->
<script src="<?php echo asset_url('adminlte/plugins/slimScroll/jquery.slimscroll.min.js')?>"></script>
<!-- FastClick -->
<script src="<?php echo asset_url('adminlte/plugins/fastclick/fastclick.js')?>"></script>
<!-- AdminLTE App -->
<script src="<?php echo asset_url('adminlte/dist/js/app.min.js')?>"></script>
<!-- AdminLTE dashboard demo (This is only for demo purposes) -->
<script src="<?php echo asset_url('adminlte/dist/js/pages/dashboard.js')?>"></script>
<!-- AdminLTE for demo purposes -->
<script src="<?php echo asset_url('adminlte/dist/js/demo.js')?>"></script>

<!-- ./wrapper -->

<?php if(isset($includes['js']) AND count($includes['js']) > 0): ?>
    <?php foreach($includes['js'] as $js): ?>
        <?php if($js['options'] === NULL OR $js['options'] == 'footer'): ?>
            <script type="text/javascript" src="<?php echo $js['file']; ?>"></script>
        <?php endif; ?>
    <?php endforeach; ?>
<?php endif; ?>

</body>
</html>