var index =
[
    [ "Getting set up", "index.html#yarp_setup", null ],
    [ "The basics of using YARP", "index.html#yarp_basics_usage", null ],
    [ "Learning YARP", "index.html#yarp_learning", null ],
    [ "Command line tools", "index.html#yarp_command_line_tools", null ],
    [ "GUIs", "index.html#yarp_guis", null ],
    [ "Interoperability and advanced use", "index.html#yarp_advanced_usage", null ],
    [ "More information", "index.html#yarp_more_info", null ],
    [ "YARP resources", "index.html#yarp_resources", null ],
    [ "Related links", "index.html#yarp_related_links", null ],
    [ "Publications", "index.html#yarp_papers", null ],
    [ "Port monitoring and arbitration using the portmonitor carrier", "portmonitor.html", [
      [ "Contents", "portmonitor.html#content", null ],
      [ "What is the portmonitor carrier?", "portmonitor.html#what_is", null ],
      [ "Which functionalities are we talking about?", "portmonitor.html#which_is", null ],
      [ "What do I need to use portmonitor carrier?", "portmonitor.html#need", null ],
      [ "How can I use port monitor?", "portmonitor.html#use", null ],
      [ "Portmonitor life cycle and API", "portmonitor.html#callbacks", null ],
      [ "Port Arbitration", "portmonitor.html#portarbitrator", null ],
      [ "Examples and tutorials", "portmonitor.html#portmonitor_exmp", null ],
      [ "Further reading", "portmonitor.html#reading", null ]
    ] ],
    [ "Channel Prioritization", "channelprioritization.html", [
      [ "Why channel prioritization?", "channelprioritization.html#why", null ],
      [ "How does prioritization work?", "channelprioritization.html#how", null ],
      [ "An example", "channelprioritization.html#example", null ]
    ] ],
    [ "Download YARP", "download.html", [
      [ "Source Code", "download.html#download_source_code", null ],
      [ "Binary releases", "download.html#download_binary", [
        [ "Windows", "download.html#download_windows", null ],
        [ "Linux (Debian/Ubuntu)", "download.html#download_linux", null ],
        [ "macOS", "download.html#download_macOS", null ]
      ] ],
      [ "Previous releases", "download.html#download_previous_releases", null ]
    ] ],
    [ "Installing YARP", "install.html", "install" ],
    [ "Setting up your network for YARP", "yarp_cluster.html", [
      [ "iperf is your friend", "yarp_cluster.html#yarp_cluster_iperf", null ],
      [ "Checking TCP communication", "yarp_cluster.html#yarp_cluster_tcp", null ],
      [ "Checking UDP communication", "yarp_cluster.html#yarp_cluster_udp", null ],
      [ "Checking multicast communication", "yarp_cluster.html#yarp_cluster_mcast", null ],
      [ "YARP's suggestion", "yarp_cluster.html#yarp_cluster_suggest", null ],
      [ "YARP connection problems", "yarp_cluster.html#yarp_cluster_tweak", null ],
      [ "Relevant source code", "yarp_cluster.html#yarp_cluster_code", null ]
    ] ],
    [ "Compiling a YARP hello world program", "yarp_cmake_hello.html", null ],
    [ "YARP data directories", "yarp_data_dirs.html", [
      [ "Rationale", "yarp_data_dirs.html#datafiles_rationale", null ],
      [ "Data directories contents", "yarp_data_dirs.html#datafiles_datadirs", [
        [ "Linux", "yarp_data_dirs.html#datafiles_lin", null ],
        [ "Windows", "yarp_data_dirs.html#datafiles_win", null ],
        [ "MacOS", "yarp_data_dirs.html#datafiles_macos", null ]
      ] ],
      [ "ResourceFinder Search policy", "yarp_data_dirs.html#datafiles_searchpolicy", [
        [ "Contexts and Robots files", "yarp_data_dirs.html#datafiles_contextsrobots", [
          [ "Shadowing", "yarp_data_dirs.html#datafiles_shadow", null ]
        ] ],
        [ "Plugins Manifest files", "yarp_data_dirs.html#datafiles_plugins", null ],
        [ "Application Deployment files", "yarp_data_dirs.html#datafiles_applications", null ]
      ] ],
      [ "Managing data files: the yarp-config utility", "yarp_data_dirs.html#managing_data_files", null ],
      [ "3rd party packages (for developers)", "yarp_data_dirs.html#datafiles_3rdparty", [
        [ "Installed packages", "yarp_data_dirs.html#datafiles_installedpkgs", null ],
        [ "Extending the search path", "yarp_data_dirs.html#datafiles_extendsearch", null ]
      ] ]
    ] ],
    [ "YARP Tutorials", "tutorials.html", "tutorials" ],
    [ "yarp: the main YARP command-line interface", "yarp.html", "yarp" ],
    [ "yarpserver: the YARP name server", "yarpserver.html", null ],
    [ "yarpdev: the standard YARP device utility", "yarpdev.html", [
      [ "yarpdev", "yarpdev.html#yarpdev_base", null ],
      [ "yarpdev –list", "yarpdev.html#yarpdev_list", null ],
      [ "yarpdev –device DEVICENAME –OPTION1 VALUE1 ...", "yarpdev.html#yarpdev_normal", null ],
      [ "yarpdev –verbose –device DEVICENAME  ...", "yarpdev.html#yarpdev_verbose", null ],
      [ "Detailed parameters description", "yarpdev.html#devices_parameters", null ]
    ] ],
    [ "yarprobotinterface: start all the devices required by a robot", "yarprobotinterface.html", null ],
    [ "yarprun: run programs on a set of machines", "yarprun.html", [
      [ "Running a server", "yarprun.html#yarprun_server", null ],
      [ "Running an application", "yarprun.html#yarprun_cmd", null ],
      [ "Other commands", "yarprun.html#yarprun_other", null ]
    ] ],
    [ "yarp-config: the yarp-config tool", "yarp-config.html", [
      [ "An Example", "yarp-config.html#yarp-config-example", null ]
    ] ],
    [ "yarpdatadumper: the YARP data recorder", "yarpdatadumper.html", [
      [ "Description", "yarpdatadumper.html#intro_sec", null ],
      [ "Libraries", "yarpdatadumper.html#lib_sec", null ],
      [ "Codec Installation", "yarpdatadumper.html#codec_installation", null ],
      [ "Parameters", "yarpdatadumper.html#parameters_sec", null ],
      [ "Ports Accessed", "yarpdatadumper.html#portsa_sec", null ],
      [ "Ports Created", "yarpdatadumper.html#portsc_sec", null ],
      [ "Input Data Files", "yarpdatadumper.html#in_files_sec", null ],
      [ "Output Data Files", "yarpdatadumper.html#out_data_sec", null ],
      [ "Configuration Files", "yarpdatadumper.html#conf_file_sec", null ],
      [ "Tested OS", "yarpdatadumper.html#tested_os_sec", null ],
      [ "Example", "yarpdatadumper.html#example_sec", null ]
    ] ],
    [ "yarpdatadumperAppGenerator: Generate yarpmanager applications for yarpdatadumper", "yarpdatadumperAppGenerator.html", [
      [ "Usage", "yarpdatadumperAppGenerator.html#usage", null ]
    ] ],
    [ "yarphear: listen to YARP audio streams", "yarphear.html", null ],
    [ "yarplogger-console: visualize log from YARP programs", "yarplogger-console.html", null ],
    [ "yarpmanager-console: run and manage multiple programs on a set of machines", "yarpmanager-console.html", null ],
    [ "yarpidl_rosmsg", "yarpidl_rosmsg.html", null ],
    [ "yarpidl_thrift", "yarpidl_thrift.html", null ],
    [ "yarpros", "yarpros.html", null ],
    [ "yarplogger: visualize log from YARP programs", "yarplogger.html", null ],
    [ "yarpview: visualize YARP images", "yarpview.html", [
      [ "Introducton", "yarpview.html#Introducton", null ],
      [ "Debugging connection problems", "yarpview.html#sec-yarpview-stats", null ],
      [ "Getting image coordinates", "yarpview.html#sec-yarpview-getting-clicks", null ],
      [ "Sparing space on the screen", "yarpview.html#sec-yarpview-compact", null ],
      [ "Some advanced options for scripting", "yarpview.html#sec-yarpview-advanced", null ]
    ] ],
    [ "yarpscope: visualize the numerical content of a port", "yarpscope.html", [
      [ "How to initialize the yarpscope", "yarpscope.html#usage_sec", [
        [ "Simple Mode", "yarpscope.html#yarpscope_simple_mode", null ],
        [ "XML Mode", "yarpscope.html#yarpscope_xml_mode", null ]
      ] ]
    ] ],
    [ "yarpmanager: edit, run and manage multiple programs on a set of machines", "yarpmanager.html", [
      [ "Contents", "yarpmanager.html#Contents", null ],
      [ "Features", "yarpmanager.html#features", null ],
      [ "Some Concepts", "yarpmanager.html#concepts", null ],
      [ "Configuration", "yarpmanager.html#configuration", null ],
      [ "Running examples", "yarpmanager.html#examples", [
        [ "Using yarpmanager", "yarpmanager.html#example_y", null ],
        [ "Using yarpmanager", "yarpmanager.html#example_g", null ]
      ] ],
      [ "Application description file", "yarpmanager.html#application", [
        [ "Notes", "yarpmanager.html#app_notes", null ]
      ] ],
      [ "Resource description file", "yarpmanager.html#resource", [
        [ "Notes", "yarpmanager.html#res_notes", null ]
      ] ],
      [ "Module description file", "yarpmanager.html#module", [
        [ "Notes", "yarpmanager.html#mode_notes", null ]
      ] ],
      [ "Create new XML description file", "yarpmanager.html#create", [
        [ "Notes", "yarpmanager.html#create_notes", null ]
      ] ],
      [ "Generate application dependency graph", "yarpmanager.html#export", null ],
      [ "Frequently asked questions", "yarpmanager.html#faq", [
        [ "How to postpone launching a module?", "yarpmanager.html#wait_launch", null ],
        [ "How to quickly launch a single application in command line?", "yarpmanager.html#quick_launch", null ]
      ] ]
    ] ],
    [ "yarpdataplayer: replay recorded data", "yarpdataplayer.html", [
      [ "Running", "yarpdataplayer.html#running_sec", null ],
      [ "yarpdatadumper file example", "yarpdataplayer.html#file-sec", null ],
      [ "Ports Interface", "yarpdataplayer.html#portsif_sec", null ]
    ] ],
    [ "yarpmotorgui: move the joints of a robot", "yarpmotorgui.html", null ],
    [ "yarpbatterygui: visualize battery information", "yarpbatterygui.html", null ],
    [ "yarplaserscannergui: visualize data from a laser scanner", "yarplaserscannergui.html", null ],
    [ "yarpviz", "yarpviz.html", [
      [ "Dependencies", "yarpviz.html#autotoc_md7", [
        [ "Ubuntu or Debian-based distribution", "yarpviz.html#autotoc_md8", null ],
        [ "macOs", "yarpviz.html#autotoc_md9", null ],
        [ "Windows", "yarpviz.html#autotoc_md10", null ]
      ] ]
    ] ],
    [ "Channel Prioritization", "channelprioritization.html", [
      [ "Why channel prioritization?", "channelprioritization.html#why", null ],
      [ "How does prioritization work?", "channelprioritization.html#how", null ],
      [ "An example", "channelprioritization.html#example", null ]
    ] ],
    [ "YARP without YARP", "yarp_without_yarp.html", [
      [ "Test scenario", "yarp_without_yarp.html#yarp_without_yarp_test", null ],
      [ "Talking to a Port", "yarp_without_yarp.html#yarp_without_yarp_begin", null ],
      [ "Talking to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_owner", null ],
      [ "Writing commands from code", "yarp_without_yarp.html#yarp_without_yarp_python_rpc", null ],
      [ "Listening to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_listening", null ],
      [ "Talking to the name server", "yarp_without_yarp.html#yarp_without_yarp_name", null ],
      [ "Binary messages", "yarp_without_yarp.html#yarp_without_yarp_binary", null ]
    ] ],
    [ "Using YARP with ROS", "yarp_with_ros.html", "yarp_with_ros" ],
    [ "Using YARP from python, java, ruby, C#, and other languages", "yarp_swig.html", [
      [ "Overview of steps needed", "yarp_swig.html#yarp_swig_install", null ],
      [ "Installing SWIG on Linux", "yarp_swig.html#yarp_swig_linux", null ],
      [ "Installing SWIG on OSX", "yarp_swig.html#yarp_swig_osx", null ],
      [ "Installing SWIG on Windows", "yarp_swig.html#yarp_swig_windows", null ],
      [ "YARP for Java", "yarp_swig.html#yarp_swig_java", null ],
      [ "YARP for Python", "yarp_swig.html#yarp_swig_python", null ],
      [ "YARP for Matlab", "yarp_swig.html#yarp_swig_matlab", null ],
      [ "YARP for Octave", "yarp_swig.html#yarp_swig_octave", null ],
      [ "YARP for Lua", "yarp_swig.html#yarp_swig_lua", null ],
      [ "YARP for Perl5", "yarp_swig.html#yarp_swig_perl", null ],
      [ "Configuring YARP language bindings", "yarp_swig.html#yarp_swig_configure", [
        [ "Configure bindings while compiling YARP", "yarp_swig.html#yarp_swig_configure_main_build", null ],
        [ "Configure bindings to build separately from YARP", "yarp_swig.html#yarp_swig_configure_separate_build", null ],
        [ "Configuration troubleshooting", "yarp_swig.html#yarp_swig_configure_troubleshooting", null ]
      ] ],
      [ "Compiling YARP language bindings", "yarp_swig.html#yarp_swig_compile", null ],
      [ "Running programs that use the YARP language bindings", "yarp_swig.html#yarp_swig_run", null ],
      [ "Available classes and methods", "yarp_swig.html#yarp_swig_api", null ]
    ] ],
    [ "Port monitoring and arbitration using the portmonitor carrier", "portmonitor.html", [
      [ "Contents", "portmonitor.html#content", null ],
      [ "What is the portmonitor carrier?", "portmonitor.html#what_is", null ],
      [ "Which functionalities are we talking about?", "portmonitor.html#which_is", null ],
      [ "What do I need to use portmonitor carrier?", "portmonitor.html#need", null ],
      [ "How can I use port monitor?", "portmonitor.html#use", null ],
      [ "Portmonitor life cycle and API", "portmonitor.html#callbacks", null ],
      [ "Port Arbitration", "portmonitor.html#portarbitrator", null ],
      [ "Examples and tutorials", "portmonitor.html#portmonitor_exmp", null ],
      [ "Further reading", "portmonitor.html#reading", null ]
    ] ],
    [ "YARP Environmental Variables", "yarp_env_variables.html", [
      [ "Logger and print configuration", "yarp_env_variables.html#autotoc_md230", null ],
      [ "Configuration files", "yarp_env_variables.html#autotoc_md231", null ],
      [ "UDP Carrier configuration", "yarp_env_variables.html#autotoc_md232", null ],
      [ "ROS configuration", "yarp_env_variables.html#autotoc_md233", null ],
      [ "Misc configuration", "yarp_env_variables.html#autotoc_md234", null ],
      [ "Other", "yarp_env_variables.html#autotoc_md235", null ],
      [ "Deprecated Environmental Variables", "yarp_env_variables.html#autotoc_md236", null ],
      [ "Build system", "yarp_env_variables.html#autotoc_md237", null ]
    ] ],
    [ "RTF Plugins", "rtf_plugins.html", [
      [ "Compilation and installation", "rtf_plugins.html#autotoc_md228", null ],
      [ "Available plugins", "rtf_plugins.html#autotoc_md229", null ]
    ] ],
    [ "YARP PointCloud", "yarp_pointcloud.html", [
      [ "What is a PointCloud?", "yarp_pointcloud.html#what_is_a_pointcloud", null ],
      [ "Write and read PointCloud to/from ports", "yarp_pointcloud.html#read_and_write_point_cloud", null ],
      [ "PointCloud initialization", "yarp_pointcloud.html#general_usage_point_cloud", null ],
      [ "PCL compatibility", "yarp_pointcloud.html#pcl_compatibility", null ],
      [ "Saving/Loading PCDs", "yarp_pointcloud.html#yarp_pcd", null ]
    ] ],
    [ "What exactly is YARP?", "what_is_yarp.html", null ],
    [ "Contributing to YARP", "contributing.html", [
      [ "Code Style", "contributing.html#autotoc_md238", [
        [ "C++", "contributing.html#autotoc_md239", null ],
        [ "CMake", "contributing.html#autotoc_md240", null ],
        [ "Git", "contributing.html#autotoc_md241", null ]
      ] ],
      [ "Workflow", "contributing.html#autotoc_md242", [
        [ "Stable branch: <tt>master</tt>", "contributing.html#autotoc_md243", null ],
        [ "Development branch: <tt>devel</tt>", "contributing.html#autotoc_md244", null ],
        [ "Example", "contributing.html#autotoc_md245", null ],
        [ "Terminology", "contributing.html#autotoc_md246", null ]
      ] ],
      [ "Policies", "contributing.html#autotoc_md247", [
        [ "Deprecated Features", "contributing.html#autotoc_md248", null ],
        [ "<tt>impl</tt> Classes", "contributing.html#autotoc_md249", null ],
        [ "Supported Systems", "contributing.html#autotoc_md250", null ]
      ] ]
    ] ],
    [ "YARP ChangeLog", "changelog.html", "changelog" ]
];