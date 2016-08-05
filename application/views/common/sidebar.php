<section class="sidebar">
    <!-- Sidebar user panel -->
    <div class="user-panel">
        <div class="pull-left image">
            <img src="<?php echo asset_url('adminlte/dist/img/user2-160x160.jpg');?>" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
            <p>实时金价 (元/克)</p>
            <a href="#"><i class="fa fa-circle text-success"></i> 288.88 </a>
        </div>
    </div>

    <!-- sidebar menu: : style can be found in sidebar.less -->
    <ul class="sidebar-menu">
        <li class="header">主菜单</li>
        <li class="active"><a href="/home"><i class="fa fa-dashboard"></i> <span>控制面板</span></a></li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-files-o"></i>
                <span>项目列表</span>
                <span class="pull-right-container">
                    <span class="label label-primary pull-right">4</span>
                    <span class="label label-success pull-right">6</span>
                    <span class="label label-warning pull-right">6</span>
                </span>
            </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo site_url('project/investing')?>"><i class="fa fa-circle-o"></i> 钱生金</a></li>
                <li><a href="<?php echo site_url('project/recycling')?>"><i class="fa fa-circle-o"></i> 金生金</a></li>
                <li><a href="<?php echo site_url('project/trash')?>"><i class="fa fa-circle-o"></i> 回收站</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-edit"></i> <span>文章管理</span>
                <span class="pull-right-container">
                  <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo site_url('article/daily')?>"><i class="fa fa-circle-o"></i> 每日金评</a></li>
                <li><a href="<?php echo site_url('article/privacy')?>"><i class="fa fa-circle-o"></i> 项目协议</a></li>
                <li><a href="<?php echo site_url('article/category')?>"><i class="fa fa-circle-o"></i> 文章分类</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-folder"></i> <span>选项设定</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo site_url('setting/system')?>"><i class="fa fa-circle-o"></i> 系统参数</a></li>
                <li><a href="<?php echo site_url('setting/marketing')?>"><i class="fa fa-circle-o"></i> 业务参数</a></li>
                <li><a href="<?php echo site_url('setting/api')?>"><i class="fa fa-circle-o"></i> API</a></li>
            </ul>
        </li>
        <li class="treeview">
            <a href="#">
                <i class="fa fa-share"></i> <span>员工管理</span>
                <span class="pull-right-container">
                    <i class="fa fa-angle-left pull-right"></i>
                </span>
            </a>
            <ul class="treeview-menu">
                <li><a href="<?php echo site_url('worker/user')?>"><i class="fa fa-circle-o"></i> 员工列表</a></li>
                <li><a href="<?php echo site_url('worker/role')?>"><i class="fa fa-circle-o"></i> 角色管理</a></li>
                <li><a href="<?php echo site_url('worker/permission')?>"><i class="fa fa-circle-o"></i> 权限节点</a></li>
            </ul>
        </li>
        <li><a href="<?php echo site_url('tool/help')?>"><i class="fa fa-book"></i> <span>帮助文档</span></a></li>
        <li class="header">金价走势</li>
        <li></li>
            
    </ul>
    <div class=" user-panel text-center">
        <div id="sparkline-4"></div>
        <p>月</p>
    </div>
</section>