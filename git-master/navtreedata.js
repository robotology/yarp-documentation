/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "YARP", "index.html", [
    [ "Welcome to YARP", "index.html", "index" ],
    [ "YARP Modules", "topics.html", "topics" ],
    [ "Other Pages", "usergroup0.html", [
      [ "README", "md_src_2commands_2yarpActionsPlayer_2README.html", null ],
      [ "Introduction", "Introduction.html", [
        [ "Software for Humanoid Robots: The YARP Approach", "note_yarp_philosophy.html", [
          [ "One processor is never enough.", "note_yarp_philosophy.html#philosophy_many", null ],
          [ "Modularity.", "note_yarp_philosophy.html#philosophy_module", null ],
          [ "Minimal interference.", "note_yarp_philosophy.html#philosophy_interfere", null ],
          [ "Stopping hurts.", "note_yarp_philosophy.html#philosophy_stopping", null ],
          [ "Humility helps.", "note_yarp_philosophy.html#philosophy_humility", null ],
          [ "Exploit diversity.", "note_yarp_philosophy.html#philosophy_diversity", null ]
        ] ],
        [ "What exactly is YARP?", "what_is_yarp.html", null ]
      ] ],
      [ "Definition of Yarp terms", "yarp-terms.html", [
        [ "Properties of a YARP network", "yarp-terms.html#term_prop", null ]
      ] ],
      [ "Installation and setup", "yarp_installation.html", [
        [ "Download YARP", "download.html", [
          [ "Source Code", "download.html#download_source_code", null ],
          [ "Binary releases", "download.html#download_binary", null ],
          [ "Previous releases", "download.html#download_previous_releases", null ]
        ] ],
        [ "YARP Dependencies", "dependencies.html", [
          [ "Required Dependencies", "dependencies.html#dependencies_required", [
            [ "The ACE Library", "dependencies.html#dependencies_ace", [
              [ "The general approach to installing ACE", "dependencies.html#dependencies_ace_install", null ],
              [ "Compiling ACE on UNIX", "dependencies.html#dependencies_ace_install_unix", null ],
              [ "Compiling ACE on Windows", "dependencies.html#ace_windows", null ]
            ] ],
            [ "Eigen", "dependencies.html#dependencies_eigen", [
              [ "Linux", "dependencies.html#dependencies_eigen_linux", null ],
              [ "macOS", "dependencies.html#dependencies_eigen_macos", null ],
              [ "Windows", "dependencies.html#dependencies_eigen_windows", null ]
            ] ]
          ] ],
          [ "GUI Dependencies", "dependencies.html#dependencies_gui", [
            [ "Qt5 (Recommended)", "dependencies.html#dependencies_qt5", [
              [ "Linux", "dependencies.html#dependencies_qt5_Linux", [
                [ "Debian/Ubuntu", "dependencies.html#dependencies_qt5_debian_ubuntu", null ],
                [ "Others", "dependencies.html#dependencies_qt5_linux_others", null ]
              ] ],
              [ "Windows", "dependencies.html#dependencies_qt5_windows", null ],
              [ "macOS", "dependencies.html#dependencies_qt5_macos", null ]
            ] ]
          ] ]
        ] ],
        [ "Installing YARP", "installing_yarp.html", [
          [ "Installing YARP on GNU/Linux", "install_yarp_linux.html", [
            [ "Installation on GNU/Linux", "install_yarp_linux.html#install_on_linux", [
              [ "Install from sources", "install_yarp_linux.html#install_linux_from_sources", [
                [ "Required Dependencies", "install_yarp_linux.html#install_required_debian", null ],
                [ "Recommended Dependencies", "install_yarp_linux.html#install_recommended_debian", null ],
                [ "Suggested Dependencies", "install_yarp_linux.html#install_suggested_debian", [
                  [ "Qt5", "install_yarp_linux.html#install_qt5_debian", null ],
                  [ "QCustomPlot", "install_yarp_linux.html#install_qcustomplot_debian", null ]
                ] ],
                [ "Graphviz", "install_yarp_linux.html#install_graphviz_debian", null ],
                [ "Jpeg Library", "install_yarp_linux.html#install_jpeg_debian", null ],
                [ "GStreamer", "install_yarp_linux.html#install_gstreamer_debian", null ],
                [ "Setup your environment", "install_yarp_linux.html#set_up_your_environment_linux", null ]
              ] ]
            ] ]
          ] ],
          [ "Installing YARP on Windows", "install_yarp_windows.html", [
            [ "Installation on Windows", "install_yarp_windows.html#install_on_windows", [
              [ "Install from binaries", "install_yarp_windows.html#install_windows_from_binaries", null ],
              [ "Install from sources", "install_yarp_windows.html#install_windows_from_sources", [
                [ "Getting dependencies", "install_yarp_windows.html#getting_dependencies_windows", null ],
                [ "Setting up development environment", "install_yarp_windows.html#windows_development_environment", [
                  [ "CMake", "install_yarp_windows.html#CMake", null ],
                  [ "GIT", "install_yarp_windows.html#GIT", null ]
                ] ],
                [ "Getting the sources", "install_yarp_windows.html#getting_the_sources_windows", null ],
                [ "Create YARP project files", "install_yarp_windows.html#create_project_files_windows", null ],
                [ "Compile", "install_yarp_windows.html#compile_windows", null ],
                [ "Setup your environment", "install_yarp_windows.html#set_up_your_environment_windows", null ]
              ] ]
            ] ]
          ] ],
          [ "Installing YARP on macOS", "install_yarp_mac.html", [
            [ "Prerequisites installation", "install_yarp_mac.html#install_mac_installation_prerequisites", [
              [ "Installing Xcode", "install_yarp_mac.html#install_mac_Xcode", null ],
              [ "Installing Homebrew", "install_yarp_mac.html#install_mac_homebrew", null ]
            ] ],
            [ "Installing YARP", "install_yarp_mac.html#install_yarp", [
              [ "Installing YARP Dependencies", "install_yarp_mac.html#install_mac_YARP_Dependencies", [
                [ "[Optional]: Installing GDK PIXBUF Dependencies", "install_yarp_mac.html#install_mac_YARP_optional_GDK", null ]
              ] ],
              [ "Download and install", "install_yarp_mac.html#install_mac_YARP", [
                [ "Compile YARP using GNU Makefiles", "install_yarp_mac.html#install_mac_YARP_terminal", null ]
              ] ],
              [ "Compile YARP using Xcode", "install_yarp_mac.html#install_mac_YARP_Xcode", null ],
              [ "Environment variables configuration", "install_yarp_mac.html#environment_configuration", null ]
            ] ],
            [ "Quick YARP run test", "install_yarp_mac.html#quick_test_yarp", null ],
            [ "Check your installation", "check_your_installation.html", [
              [ "Check basic YARP functionalities", "check_your_installation.html#check_basic_functionalities", null ],
              [ "Play a recorded sequence", "check_your_installation.html#sec-play-recorded-sequence", null ]
            ] ]
          ] ],
          [ "Installing YARP on Linux, macOS or Windows with conda", "install_yarp_conda.html", [
            [ "Installation on Linux, macOS or Windows with conda", "install_yarp_conda.html#install_on_conda", [
              [ "Install from binaries", "install_yarp_conda.html#install_conda_from_binaries", null ],
              [ "Install from sources", "install_yarp_conda.html#install_conda_from_sources", [
                [ "Required Dependencies", "install_yarp_conda.html#install_required_conda", null ],
                [ "Compiling YARP", "install_yarp_conda.html#compiling_yarp", null ]
              ] ]
            ] ]
          ] ],
          [ "Check your installation", "check_your_installation.html", [
            [ "Check basic YARP functionalities", "check_your_installation.html#check_basic_functionalities", null ],
            [ "Play a recorded sequence", "check_your_installation.html#sec-play-recorded-sequence", null ]
          ] ]
        ] ],
        [ "YARP Environmental Variables", "yarp_environment.html", [
          [ "Logger and print configuration", "yarp_environment.html#autotoc_md16", null ],
          [ "Directories", "yarp_environment.html#autotoc_md17", null ],
          [ "Robot Configuration", "yarp_environment.html#autotoc_md18", null ],
          [ "UDP Carrier configuration", "yarp_environment.html#autotoc_md19", null ],
          [ "Misc configuration", "yarp_environment.html#autotoc_md20", null ],
          [ "Other", "yarp_environment.html#autotoc_md21", null ],
          [ "Deprecated Environmental Variables", "yarp_environment.html#autotoc_md22", null ],
          [ "Build system", "yarp_environment.html#autotoc_md23", null ]
        ] ],
        [ "Check your installation", "check_your_installation.html", [
          [ "Check basic YARP functionalities", "check_your_installation.html#check_basic_functionalities", null ],
          [ "Play a recorded sequence", "check_your_installation.html#sec-play-recorded-sequence", null ]
        ] ],
        [ "Advanced network settings", "yarp_cluster.html", [
          [ "iperf is your friend", "yarp_cluster.html#yarp_cluster_iperf", null ],
          [ "Checking TCP communication", "yarp_cluster.html#yarp_cluster_tcp", null ],
          [ "Checking UDP communication", "yarp_cluster.html#yarp_cluster_udp", null ],
          [ "Checking multicast communication", "yarp_cluster.html#yarp_cluster_mcast", null ],
          [ "YARP's suggestion", "yarp_cluster.html#yarp_cluster_suggest", null ],
          [ "YARP connection problems", "yarp_cluster.html#yarp_cluster_tweak", null ],
          [ "Relevant source code", "yarp_cluster.html#yarp_cluster_code", null ]
        ] ],
        [ "Docker image for Yarp", "yarp_docker.html", null ]
      ] ],
      [ "First steps with Yarp", "first_steps.html", [
        [ "Using Yarp / compiling examples", "first_steps.html#first_steps_1", null ],
        [ "creating modules / writing configuration files", "first_steps.html#first_steps_2", null ],
        [ "Controlling a robot", "first_steps.html#first_steps_3", null ],
        [ "Other stuff", "first_steps.html#first_steps_4", null ],
        [ "The very first simple example about using yarp", "companion_use.html", [
          [ "YARP companion basics", "companion_use.html#companion_basics", null ],
          [ "YARP companion advanced", "companion_use.html#companion_advanced", null ]
        ] ],
        [ "Some examples", "yarp_code_examples.html", [
          [ "Simple port example", "yarp_code_examples.html#yarp_code_example_simple", [
            [ "simple_sender", "yarp_code_examples.html#yarp_code_example_simple_sender", null ],
            [ "simple_receiver", "yarp_code_examples.html#yarp_code_example_simple_receiver", null ],
            [ "Running the example", "yarp_code_examples.html#yarp_code_example_running", null ]
          ] ],
          [ "Buffered port example", "yarp_code_examples.html#yarp_code_example_buffer", null ]
        ] ],
        [ "Compiling a YARP hello world program", "yarp_cmake_hello.html", null ],
        [ "Using CMake", "using_cmake.html", [
          [ "Hello World Example", "using_cmake.html#using_cmake_basic", null ],
          [ "Out-of-source Builds", "using_cmake.html#using_cmake_outofsource", null ],
          [ "Building a library", "using_cmake.html#using_cmake_library", null ],
          [ "Building a library and program separately", "using_cmake.html#using_cmake_split", null ]
        ] ],
        [ "The RFModule Class", "yarp_rfmodule_tutorial.html", [
          [ "Introduction", "yarp_rfmodule_tutorial.html#yarp_rfmodule_tutorial_intro", null ],
          [ "Code", "yarp_rfmodule_tutorial.html#yarp_rfmodule_tutorial_code", null ]
        ] ],
        [ "YARP config files", "yarp_config_files.html", [
          [ "A minimal config file", "yarp_config_files.html#yarp_config_file_basics", null ],
          [ "Accessing the minimal config file from code", "yarp_config_files.html#yarp_config_file_reading", null ],
          [ "A config file with sections", "yarp_config_files.html#yarp_config_file_add", null ],
          [ "Nesting configuration files", "yarp_config_files.html#yarp_config_file_nesting", null ],
          [ "Section collections", "yarp_config_files.html#yarp_config_file_lists", null ],
          [ "Combining section collections and includes", "yarp_config_files.html#yarp_config_file_includes", null ],
          [ "Combining section collections and directory includes", "yarp_config_files.html#yarp_config_file_dir_includes", null ],
          [ "Comments in config files", "yarp_config_files.html#yarp_config_file_comments", null ],
          [ "Quoting in config files", "yarp_config_files.html#yarp_config_file_quoting", null ],
          [ "Continuing across lines", "yarp_config_files.html#yarp_config_file_continue", null ],
          [ "List syntax", "yarp_config_files.html#yarp_config_list_syntax", null ],
          [ "Expansion of variables", "yarp_config_files.html#yarp_config_file_environment", null ],
          [ "Compatibility with other INI readers", "yarp_config_files.html#yarp_config_file_equals", null ],
          [ "Command line configuration switches", "yarp_config_files.html#yarp_config_command", null ],
          [ "ResourceFinder Tutorials and Specification", "yarp_resource_finder_tutorials.html", [
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
            [ "The ResourceFinder Specification", "resource_finder_spec.html", [
              [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md26", null ],
              [ "Configuration Files", "resource_finder_spec.html#autotoc_md27", null ],
              [ "Data directories contents", "resource_finder_spec.html#autotoc_md29", [
                [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md30", null ],
                [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md31", null ],
                [ "Application deployment files", "resource_finder_spec.html#autotoc_md32", null ]
              ] ],
              [ "Generation of the search path", "resource_finder_spec.html#autotoc_md33", null ],
              [ "3rd party packages", "resource_finder_spec.html#autotoc_md34", [
                [ "Installed packages", "resource_finder_spec.html#autotoc_md35", [
                  [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md36", null ],
                  [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md37", null ]
                ] ]
              ] ]
            ] ],
            [ "The ResourceFinder Class (basic)", "yarp_resource_finder_basic.html", [
              [ "Introduction", "yarp_resource_finder_basic.html#rf_basic_intro", null ],
              [ "Discussion", "yarp_resource_finder_basic.html#rf_basic_discussion", null ],
              [ "Code", "yarp_resource_finder_basic.html#rf_basic_code", null ]
            ] ],
            [ "The ResourceFinder Class (advanced)", "yarp_resource_finder_advanced.html", [
              [ "Introduction", "yarp_resource_finder_advanced.html#sec_intro", null ],
              [ "Discussion", "yarp_resource_finder_advanced.html#sec_final-discussion", null ],
              [ "Code", "yarp_resource_finder_advanced.html#sec_code", null ]
            ] ],
            [ "How to install files for the ResourceFinder", "yarp_resource_finder_installation.html", [
              [ "Introduction", "yarp_resource_finder_installation.html#rf_install_intro", null ],
              [ "Files to be installed", "yarp_resource_finder_installation.html#rf_install_files", null ],
              [ "CMake to the rescue", "yarp_resource_finder_installation.html#rf_install_cmake", null ],
              [ "Notes", "yarp_resource_finder_installation.html#rf_install_finalnotes", null ],
              [ "Code", "yarp_resource_finder_installation.html#rf_code", null ]
            ] ]
          ] ]
        ] ],
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
        [ "ResourceFinder Tutorials and Specification", "yarp_resource_finder_tutorials.html", [
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
          [ "The ResourceFinder Specification", "resource_finder_spec.html", [
            [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md26", null ],
            [ "Configuration Files", "resource_finder_spec.html#autotoc_md27", null ],
            [ "Data directories contents", "resource_finder_spec.html#autotoc_md29", [
              [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md30", null ],
              [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md31", null ],
              [ "Application deployment files", "resource_finder_spec.html#autotoc_md32", null ]
            ] ],
            [ "Generation of the search path", "resource_finder_spec.html#autotoc_md33", null ],
            [ "3rd party packages", "resource_finder_spec.html#autotoc_md34", [
              [ "Installed packages", "resource_finder_spec.html#autotoc_md35", [
                [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md36", null ],
                [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md37", null ]
              ] ]
            ] ]
          ] ],
          [ "The ResourceFinder Class (basic)", "yarp_resource_finder_basic.html", [
            [ "Introduction", "yarp_resource_finder_basic.html#rf_basic_intro", null ],
            [ "Discussion", "yarp_resource_finder_basic.html#rf_basic_discussion", null ],
            [ "Code", "yarp_resource_finder_basic.html#rf_basic_code", null ]
          ] ],
          [ "The ResourceFinder Class (advanced)", "yarp_resource_finder_advanced.html", [
            [ "Introduction", "yarp_resource_finder_advanced.html#sec_intro", null ],
            [ "Discussion", "yarp_resource_finder_advanced.html#sec_final-discussion", null ],
            [ "Code", "yarp_resource_finder_advanced.html#sec_code", null ]
          ] ],
          [ "How to install files for the ResourceFinder", "yarp_resource_finder_installation.html", [
            [ "Introduction", "yarp_resource_finder_installation.html#rf_install_intro", null ],
            [ "Files to be installed", "yarp_resource_finder_installation.html#rf_install_files", null ],
            [ "CMake to the rescue", "yarp_resource_finder_installation.html#rf_install_cmake", null ],
            [ "Notes", "yarp_resource_finder_installation.html#rf_install_finalnotes", null ],
            [ "Code", "yarp_resource_finder_installation.html#rf_code", null ]
          ] ]
        ] ],
        [ "Configuring your external build", "yarp_external_build.html", [
          [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
        ] ],
        [ "The YARP motor control interfaces", "yarp_motor_control.html", [
          [ "Motor control.", "yarp_motor_control.html#yarp_motorcontrol_base", null ]
        ] ],
        [ "Standard data representation format", "data_rep.html", [
          [ "The NetType data-types", "data_rep.html#data_rep_base", null ],
          [ "Binary format", "data_rep.html#data_rep_bin", null ],
          [ "Text format", "data_rep.html#data_rep_text", null ],
          [ "Examples", "data_rep.html#data_rep_mapping", null ],
          [ "In practice", "data_rep.html#data_rep_code", [
            [ "Command-line mapping", "data_rep.html#data_rep_code_cmd", null ],
            [ "Configuration-file mapping", "data_rep.html#data_rep_code_config", null ]
          ] ]
        ] ]
      ] ],
      [ "Ports and connections", "yarp_ports_documentation.html", [
        [ "Getting Started with YARP Ports", "note_ports.html", [
          [ "A network of ports", "note_ports.html#note_ports_network", null ],
          [ "A worked example", "note_ports.html#note_ports_example", null ],
          [ "Taking a closer look", "note_ports.html#note_ports_closer", null ]
        ] ],
        [ "Port Power, Going Further with Ports", "port_expert.html", [
          [ "Streaming messages", "port_expert.html#port_expert_basic", null ],
          [ "Decoupling sender/receiver timing", "port_expert.html#port_expert_timing", null ],
          [ "Polling ports", "port_expert.html#port_expert_polling", null ],
          [ "Getting a callback", "port_expert.html#port_expert_callbacks", null ],
          [ "Getting replies", "port_expert.html#port_expert_reply", null ],
          [ "Datatypes", "port_expert.html#port_expert_data", null ],
          [ "Carriers", "port_expert.html#port_expert_carriers", null ]
        ] ],
        [ "Specialized RPC ports", "rpc_ports.html", [
          [ "RPC using regular YARP ports", "rpc_ports.html#rpc_ports_basics", null ],
          [ "RPC using specialized YARP ports", "rpc_ports.html#rpc_ports_special", null ],
          [ "Monitoring RPC communication", "rpc_ports.html#rpc_ports_sniffing", null ]
        ] ],
        [ "Persistent connections", "persistent_connections.html", [
          [ "An example of a persistent connection", "persistent_connections.html#persistent_connections_example", null ],
          [ "Listing persistent connections", "persistent_connections.html#persistent_connections_list", null ],
          [ "Getting rid of a persistent connection", "persistent_connections.html#persistent_connections_remove", null ],
          [ "Persistence via topics", "persistent_connections.html#persistent_connections_topics", null ],
          [ "Listing topics", "persistent_connections.html#persistent_connections_topics_list", null ],
          [ "Removing topics", "persistent_connections.html#persistent_connections_topics_remove", null ],
          [ "Using persistent connections from code", "persistent_connections.html#persistent_connections_code", null ]
        ] ],
        [ "The administrative interface to YARP ports", "port_admin.html", [
          [ "help", "port_admin.html#port_admin_help", null ],
          [ "addConnection", "port_admin.html#port_admin_add", null ],
          [ "delConnection", "port_admin.html#port_admin_del", null ],
          [ "listConnectionsIn / listConnectionsOut / getConnectionInfoIn / getConnectionInfoOut", "port_admin.html#port_admin_list", null ],
          [ "getAdminProtocolVersion", "port_admin.html#port_admin_ver", null ],
          [ "attachPortmonitorIn / attachPortmonitorOut / detachPortmonitorIn / detachPortmonitorOut", "port_admin.html#port_admin_portmonitor", null ],
          [ "setPortmonitorParamsIn / setPortmonitorParamsOut / getPortmonitorParamsIn / getPortmonitorParamsOut", "port_admin.html#port_admin_portmonitor_params", null ],
          [ "setConnectionParamsIn / setConnectionParamsOut / getConnectionParamsIn / getConnectionParamsOut", "port_admin.html#port_admin_connection_params", null ],
          [ "getPortInfo", "port_admin.html#port_admin_info", null ],
          [ "getConnectionQosIn / getConnectionQosOut / setConnectionQosIn / setConnectionQosOut / setProcessScheduling", "port_admin.html#port_admin_qos", null ]
        ] ],
        [ "YARP port authentication", "yarp_port_auth.html", [
          [ "How to use the port authentication mechanism", "yarp_port_auth.html#yarp_port_auth_usage", null ],
          [ "Remarks", "yarp_port_auth.html#yarp_port_auth_remarks", null ],
          [ "Final note", "yarp_port_auth.html#yarp_port_auth_final", null ]
        ] ],
        [ "Channel Prioritization", "channelprioritization.html", [
          [ "Contents", "channelprioritization.html#content", null ],
          [ "Why channel prioritization?", "channelprioritization.html#why", null ],
          [ "How does prioritization work?", "channelprioritization.html#how", null ],
          [ "An example", "channelprioritization.html#example", null ]
        ] ],
        [ "Buffering Policies in YARP", "yarp_buffering.html", [
          [ "Life-cycle: writing to a port", "yarp_buffering.html#s_buffering_writing", null ],
          [ "Life-cycle: reading from a port", "yarp_buffering.html#s_buffering_reading", null ],
          [ "Getting Started with YARP Ports", "note_ports.html", [
            [ "A network of ports", "note_ports.html#note_ports_network", null ],
            [ "A worked example", "note_ports.html#note_ports_example", null ],
            [ "Taking a closer look", "note_ports.html#note_ports_closer", null ]
          ] ],
          [ "Port Power, Going Further with Ports", "port_expert.html", [
            [ "Streaming messages", "port_expert.html#port_expert_basic", null ],
            [ "Decoupling sender/receiver timing", "port_expert.html#port_expert_timing", null ],
            [ "Polling ports", "port_expert.html#port_expert_polling", null ],
            [ "Getting a callback", "port_expert.html#port_expert_callbacks", null ],
            [ "Getting replies", "port_expert.html#port_expert_reply", null ],
            [ "Datatypes", "port_expert.html#port_expert_data", null ],
            [ "Carriers", "port_expert.html#port_expert_carriers", null ]
          ] ]
        ] ],
        [ "YARP ports from your browser", "yarp_http.html", [
          [ "Index page", "yarp_http.html#yarp_http_index", null ],
          [ "Sending data", "yarp_http.html#yarp_http_data", null ],
          [ "Receiving (low-bandwidth) data", "yarp_http.html#yarp_http_recv", null ],
          [ "Viewing images in a browser", "yarp_http.html#yarp_http_recv_images", null ],
          [ "Custom content", "yarp_http.html#yarp_http_custom", null ]
        ] ]
      ] ],
      [ "The name server protocol", "name_server.html", [
        [ "The name server is just another Port", "name_server.html#name_server_port", null ],
        [ "What the name server stores", "name_server.html#name_server_content", null ],
        [ "The nameserver commands", "name_server.html#all_yarpserver_commands", [
          [ "query", "name_server.html#protocol_name_query", null ],
          [ "register", "name_server.html#protocol_name_register", null ],
          [ "unregister", "name_server.html#protocol_name_unregister", null ],
          [ "list", "name_server.html#protocol_name_list", null ],
          [ "set", "name_server.html#protocol_name_set", null ],
          [ "get", "name_server.html#protocol_name_get", null ],
          [ "check", "name_server.html#protocol_name_check", null ],
          [ "route", "name_server.html#protocol_name_route", null ],
          [ "bot query", "name_server.html#protocol_name_bot_query", null ],
          [ "bot list", "name_server.html#protocol_name_bot_list", null ]
        ] ],
        [ "Finding the name server", "name_server.html#name_server_discovery", null ],
        [ "Name server namespaces", "name_server.html#name_server_namespaces", null ],
        [ "An older name server protocol", "name_server.html#name_server_history", null ],
        [ "Additional infos", "name_server.html#additional_info_namserver", null ],
        [ "Port and connection protocols", "yarp_protocol.html", [
          [ "The connection protocol", "yarp_protocol.html#yarp_connection_protocol", [
            [ "Connection phases", "yarp_protocol.html#connection_phases", null ],
            [ "The \"tcp\" carrier", "yarp_protocol.html#carrier_tcp", null ],
            [ "The \"udp\" carrier", "yarp_protocol.html#carrier_udp", null ],
            [ "The \"mcast\" carrier", "yarp_protocol.html#carrier_mcast", null ],
            [ "The \"text\" carrier", "yarp_protocol.html#carrier_text", null ],
            [ "The \"shmem\" carrier", "yarp_protocol.html#proto_shmem", null ],
            [ "The \"local\" carrier", "yarp_protocol.html#carrier_local", null ],
            [ "Known protocol specifiers", "yarp_protocol.html#carrier_known", null ]
          ] ],
          [ "Port commands", "yarp_protocol.html#yarp_protocol_port", null ],
          [ "YARP URIs", "yarp_protocol.html#yarp_uri", null ],
          [ "Carriers supported", "yarp_protocol.html#yarp_carriers", null ],
          [ "Manually interacting with ports", "yarp_protocol.html#note_manually", null ]
        ] ],
        [ "Using YARP without a name server", "yarp_without_nameserver.html", null ],
        [ "YARP without YARP", "yarp_without_yarp.html", [
          [ "Test scenario", "yarp_without_yarp.html#yarp_without_yarp_test", null ],
          [ "Talking to a Port", "yarp_without_yarp.html#yarp_without_yarp_begin", null ],
          [ "Talking to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_owner", null ],
          [ "Writing commands from code", "yarp_without_yarp.html#yarp_without_yarp_python_rpc", null ],
          [ "Listening to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_listening", null ],
          [ "Talking to the name server", "yarp_without_yarp.html#yarp_without_yarp_name", null ],
          [ "Binary messages", "yarp_without_yarp.html#yarp_without_yarp_binary", null ]
        ] ]
      ] ],
      [ "Using IDLs in Yarp (and also ROS)", "idls.html", [
        [ "List of IDLs (Interface Description Languages) used in YARP", "idls.html#idls_list", null ],
        [ "Thrift", "idl_thrift.html", [
          [ "Thrift IDL in YARP tutorials", "idl_thrift.html#idl_thrift_tutorials", null ],
          [ "Thrift IDL in YARP: writing a portable", "thrift_tutorial_portable.html", [
            [ "Introduction", "thrift_tutorial_portable.html#thrift_tutorial_portable_intro", null ],
            [ "Thrift definition for <tt>SharedData</tt>", "thrift_tutorial_portable.html#thrift_tutorial_portable_thirft", null ],
            [ "Code", "thrift_tutorial_portable.html#thrift_tutorial_portable_code", null ],
            [ "Using CMake", "thrift_tutorial_portable.html#thrift_tutorial_portable_using_cmake", null ],
            [ "Related Tutorials", "thrift_tutorial_portable.html#thrift_tutorial_portable_related_tutorials", null ]
          ] ],
          [ "Thrift IDL in YARP: simple tutorial", "thrift_tutorial_simple.html", [
            [ "Introduction", "thrift_tutorial_simple.html#thrift_tutorial_simple_intro", null ],
            [ "Step One: Interface Definition", "thrift_tutorial_simple.html#thrift_tutorial_simple_thriftfile", null ],
            [ "Step Two: Source code generation", "thrift_tutorial_simple.html#sec_generation", null ],
            [ "Step Three: Interface Implementation", "thrift_tutorial_simple.html#thrift_tutorial_simple_server", null ],
            [ "Client use", "thrift_tutorial_simple.html#thrift_tutorial_simple_client", null ],
            [ "Implementing the server as a RFModule", "thrift_tutorial_simple.html#thrift_tutorial_simple_module", null ],
            [ "Complete example", "thrift_tutorial_simple.html#thrift_tutorial_simple_completex", null ]
          ] ],
          [ "Thrift IDL in YARP: advanced tutorial", "thrift_tutorial.html", [
            [ "Introduction", "thrift_tutorial.html#thrift_tutorial_intro", null ],
            [ "Language Reference", "thrift_tutorial.html#thrift_tutorial_language", [
              [ "Base Types", "thrift_tutorial.html#thrift_tutorial_subs_basetypes", null ],
              [ "Containers", "thrift_tutorial.html#thrift_tutorial_subs_containers", null ],
              [ "Structs", "thrift_tutorial.html#thrift_tutorial_subs_structs", null ],
              [ "Typedefs", "thrift_tutorial.html#thrift_tutorial_subs_typedef", null ],
              [ "Constants", "thrift_tutorial.html#thrift_tutorial_subs_const", null ],
              [ "Enums", "thrift_tutorial.html#thrift_tutorial_subs_enums", null ],
              [ "Namespaces", "thrift_tutorial.html#thrift_tutorial_subs_namespace", null ],
              [ "Includes", "thrift_tutorial.html#thrift_tutorial_subs_include", null ],
              [ "Services", "thrift_tutorial.html#thrift_tutorial_subs_services", null ],
              [ "Comments", "thrift_tutorial.html#thrift_tutorial_subs_comments", null ],
              [ "Code generation", "thrift_tutorial.html#thrift_tutorial_codegen", null ]
            ] ],
            [ "Server implementation", "thrift_tutorial.html#thrift_tutorial_server", null ],
            [ "Client Use", "thrift_tutorial.html#thrift_tutorial_client", null ],
            [ "Complete example", "thrift_tutorial.html#thrift_tutorial_completex", null ]
          ] ],
          [ "Thrift IDL in YARP: editing structures remotely", "thrift_editor.html", null ],
          [ "Thrift IDL in YARP: monitoring a connection", "thrift_monitor.html", [
            [ "Using thrift client", "thrift_monitor.html#autotoc_md24", null ],
            [ "Using yarp rpc or custom clients", "thrift_monitor.html#autotoc_md25", null ]
          ] ]
        ] ]
      ] ],
      [ "Logging with YARP", "yarp_logging.html", [
        [ "Log Levels", "yarp_logging.html#yarplog_levels", null ],
        [ "Generic Macros", "yarp_logging.html#yarplog_generic_macros", null ],
        [ "Components", "yarp_logging.html#yarplog_components", null ],
        [ "Id", "yarp_logging.html#yarplog_Id", null ],
        [ "External timestamp", "yarp_logging.html#yarplog_external_timestamp", null ],
        [ "Limited Macros", "yarp_logging.html#yarplog_limited_macros", null ],
        [ "Assert", "yarp_logging.html#yarplog_assert", null ],
        [ "Configuration", "yarp_logging.html#yarplog_configuration", null ],
        [ "Advanced", "yarp_logging.html#yarplog_advanced", null ],
        [ "Recommendations", "yarp_logging.html#yarplog_recomm", null ]
      ] ],
      [ "Using YARP from python, java, C#, and other languages", "yarp_swig.html", [
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
      [ "Tutorials", "yarp-tutorials.html", [
        [ "Yarp Tutorials", "yarp-tutorials.html#YARPTutorials", null ],
        [ "Using YARP and CMake in your projects:", "yarp-tutorials.html#tutorial_cmake", null ],
        [ "Using YARP ports for communication:", "yarp-tutorials.html#tutorial_ports", null ],
        [ "Make sure you understand how to control YARP buffering policies the life-cycle of messages:", "yarp-tutorials.html#tutorial_buffering", null ],
        [ "How to write a standard module, search and install configuration files:", "yarp-tutorials.html#tutorial_rfmodule", null ],
        [ "Using the Thrift IDL to define data types and interfaces:", "yarp-tutorials.html#tutorial_thrift", null ],
        [ "Using YARP devices:", "yarp-tutorials.html#tutorial_devices", null ],
        [ "More software tutorials:", "yarp-tutorials.html#tutorial_other", null ],
        [ "Communication protocol details:", "yarp-tutorials.html#tutorial_protocols", null ],
        [ "YARP implementation:", "yarp-tutorials.html#tutorial_implementations", null ],
        [ "Yarp GUIs/Apps Tutorials", "yarp-tutorials.html#YarpGUIsTutorials", null ]
      ] ],
      [ "Robot Testing Framework (and plugins)", "robottestingframework_plugins.html", [
        [ "Compilation and installation", "robottestingframework_plugins.html#autotoc_md64", null ],
        [ "Available plugins", "robottestingframework_plugins.html#autotoc_md65", null ]
      ] ],
      [ "Extending Yarp: A trip through the guts of YARP", "yarp_guts.html", [
        [ "Behind the facade", "yarp_guts.html#yarp_guts_facade", null ],
        [ "Summary of important implementation classes", "yarp_guts.html#yarp_guts_summary", null ],
        [ "Port creation", "yarp_guts.html#yarp_guts_create", null ],
        [ "Connection creation", "yarp_guts.html#yarp_guts_connect", null ],
        [ "Multicast elections", "yarp_guts.html#yarp_guts_mcast", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "Yarp Doxygen Documentation", "writing_documentation.html", [
        [ "code documentation", "writing_documentation.html#code_doc", null ],
        [ "non-code documentation", "writing_documentation.html#non-code_doc", null ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "YARP <yarp-4.1.0> (UNRELEASED)", "yarp_4_1_0.html", [
        [ "YARP <yarp-4.1.0> Release Notes", "yarp_4_1_0.html#autotoc_md91", [
          [ "Important Changes", "yarp_4_1_0.html#autotoc_md92", [
            [ "Breaking changes", "yarp_4_1_0.html#autotoc_md93", null ],
            [ "libYARP_profiler", "yarp_4_1_0.html#autotoc_md94", null ],
            [ "libYARP_os", "yarp_4_1_0.html#autotoc_md95", null ],
            [ "libYARP_sig", "yarp_4_1_0.html#autotoc_md96", null ],
            [ "libYARP_math", "yarp_4_1_0.html#autotoc_md97", null ],
            [ "libYARP_dev", "yarp_4_1_0.html#autotoc_md98", null ],
            [ "libYARP_serversql", "yarp_4_1_0.html#autotoc_md99", null ],
            [ "thrift generator", "yarp_4_1_0.html#autotoc_md100", null ],
            [ "devices", "yarp_4_1_0.html#autotoc_md101", [
              [ "<tt>JoypadControl_nws_yarp</tt>", "yarp_4_1_0.html#autotoc_md102", null ]
            ] ],
            [ "carriers", "yarp_4_1_0.html#autotoc_md103", [
              [ "shmem", "yarp_4_1_0.html#autotoc_md104", null ]
            ] ],
            [ "Commands", "yarp_4_1_0.html#autotoc_md105", null ],
            [ "GUIs", "yarp_4_1_0.html#autotoc_md106", [
              [ "<tt>yarpmanager</tt>", "yarp_4_1_0.html#autotoc_md107", null ]
            ] ],
            [ "bindings", "yarp_4_1_0.html#autotoc_md108", null ],
            [ "Build system", "yarp_4_1_0.html#autotoc_md109", null ]
          ] ]
        ] ]
      ] ],
      [ "YARP ChangeLog", "changelog.html", [
        [ "YARP 4.0 Series", "changelog.html#yarp_4_0_series", null ],
        [ "YARP 3.12 Series", "changelog.html#yarp_3_12_series", null ],
        [ "YARP 3.11 Series", "changelog.html#yarp_3_11_series", null ],
        [ "YARP 3.10 Series", "changelog.html#yarp_3_10_series", null ],
        [ "YARP 3.9 Series", "changelog.html#yarp_3_9_series", null ],
        [ "YARP 3.8 Series", "changelog.html#yarp_3_8_series", null ],
        [ "YARP 3.7 Series", "changelog.html#yarp_3_7_series", null ],
        [ "YARP 3.6 Series", "changelog.html#yarp_3_6_series", null ],
        [ "YARP 3.5 Series", "changelog.html#yarp_3_5_series", null ],
        [ "YARP 3.4 Series", "changelog.html#yarp_3_4_series", null ],
        [ "YARP 3.3 Series", "changelog.html#yarp_3_3_series", null ],
        [ "YARP 3.2 Series", "changelog.html#yarp_3_2_series", null ],
        [ "YARP 3.1 Series", "changelog.html#yarp_3_1_series", null ],
        [ "YARP 3.0 Series", "changelog.html#yarp_3_0_series", null ],
        [ "YARP 2.3.72 Series", "changelog.html#yarp_2_3_72_series", null ],
        [ "YARP 2.3.70 Series", "changelog.html#yarp_2_3_70_series", null ],
        [ "YARP 2.3.68 Series", "changelog.html#yarp_2_3_68_series", null ],
        [ "YARP 2.3.66 Series", "changelog.html#yarp_2_3_66_series", null ],
        [ "YARP 2.3.65 Series", "changelog.html#yarp_2_3_65_series", null ],
        [ "Older YARP Releases", "changelog.html#yarp_older_releases", null ],
        [ "YARP 4.0.2 (2026-11-10)", "v4_0_2.html", [
          [ "YARP 4.0.2 Release Notes", "v4_0_2.html#autotoc_md1193", [
            [ "Build system", "v4_0_2.html#autotoc_md1200", null ],
            [ "CI", "v4_0_2.html#autotoc_md1201", null ],
            [ "Contributors", "v4_0_2.html#autotoc_md1202", null ]
          ] ]
        ] ],
        [ "YARP 4.0.1 (2026-09-07)", "v4_0_1.html", [
          [ "YARP 4.0.1 Release Notes", "v4_0_1.html#autotoc_md1186", [
            [ "CI", "v4_0_1.html#autotoc_md1189", null ],
            [ "Commands", "v4_0_1.html#autotoc_md1190", [
              [ "libYARP_dev", "v4_0_1.html#autotoc_md1187", null ],
              [ "libYARP_os", "v4_0_1.html#autotoc_md1188", null ],
              [ "<tt>yarpidl_thrift</tt>", "v4_0_1.html#autotoc_md1191", null ]
            ] ],
            [ "Contributors", "v4_0_1.html#autotoc_md1192", null ]
          ] ]
        ] ],
        [ "YARP 3.12.3 (2026-07-15)", "v3_12_3.html", [
          [ "YARP 3.12.3 Release Notes", "v3_12_3.html#autotoc_md548", [
            [ "libYARP_sig", "v3_12_3.html#autotoc_md549", null ],
            [ "libYARP_dev", "v3_12_3.html#autotoc_md550", null ],
            [ "libYARP_os", "v3_12_3.html#autotoc_md551", null ],
            [ "devices", "v3_12_3.html#autotoc_md552", null ],
            [ "Bindings", "v3_12_3.html#autotoc_md553", null ],
            [ "Commands", "v3_12_3.html#autotoc_md554", [
              [ "<tt>yarpAudioPlayer</tt>", "v3_12_3.html#autotoc_md555", null ],
              [ "<tt>yarprobotinterface</tt>", "v3_12_3.html#autotoc_md556", null ]
            ] ],
            [ "GUIs", "v3_12_3.html#autotoc_md557", [
              [ "<tt>yarpmanager</tt>", "v3_12_3.html#autotoc_md558", null ]
            ] ],
            [ "Contributors", "v3_12_3.html#autotoc_md559", null ]
          ] ]
        ] ],
        [ "YARP 3.12.2 (2025-12-10)", "v3_12_2.html", [
          [ "YARP 3.12.2 Release Notes", "v3_12_2.html#autotoc_md538", [
            [ "libYARP_dev", "v3_12_2.html#autotoc_md539", null ],
            [ "Devices", "v3_12_2.html#autotoc_md540", [
              [ "MultipleAnalogSensorsRemapper", "v3_12_2.html#autotoc_md541", null ]
            ] ],
            [ "Tests", "v3_12_2.html#autotoc_md542", null ],
            [ "Commands", "v3_12_2.html#autotoc_md543", [
              [ "<tt>yarpActionsPlayer</tt>", "v3_12_2.html#autotoc_md544", null ]
            ] ],
            [ "Bindings", "v3_12_2.html#autotoc_md545", null ],
            [ "Other", "v3_12_2.html#autotoc_md546", null ],
            [ "Contributors", "v3_12_2.html#autotoc_md547", null ]
          ] ]
        ] ],
        [ "YARP 3.12.1 (2025-08-26)", "v3_12_1.html", [
          [ "YARP 3.12.1 Release Notes", "v3_12_1.html#autotoc_md515", [
            [ "New Features", "v3_12_1.html#autotoc_md516", [
              [ "yarpRerun", "v3_12_1.html#autotoc_md517", null ],
              [ "yarpRobotDescriptionInfo", "v3_12_1.html#autotoc_md518", null ],
              [ "Library", "v3_12_1.html#autotoc_md519", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md520", null ]
              ] ],
              [ "Portmonitor", "v3_12_1.html#autotoc_md521", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md522", null ]
              ] ]
            ] ],
            [ "Fixes", "v3_12_1.html#autotoc_md523", [
              [ "Bindings", "v3_12_1.html#autotoc_md524", null ],
              [ "Executables", "v3_12_1.html#autotoc_md525", null ],
              [ "GUIs", "v3_12_1.html#autotoc_md526", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md527", null ]
              ] ],
              [ "Devices", "v3_12_1.html#autotoc_md528", null ],
              [ "Library", "v3_12_1.html#autotoc_md529", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md530", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_12_1.html#autotoc_md531", null ]
              ] ]
            ] ],
            [ "Breaking Changes", "v3_12_1.html#autotoc_md532", [
              [ "GUIs", "v3_12_1.html#autotoc_md533", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md534", null ]
              ] ],
              [ "Library", "v3_12_1.html#autotoc_md535", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md536", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_12_1.html#autotoc_md537", null ]
          ] ]
        ] ],
        [ "YARP 3.12.0 (2025-06-04)", "v3_12_0.html", [
          [ "YARP 3.12.0 Release Notes", "v3_12_0.html#autotoc_md502", [
            [ "New Features", "v3_12_0.html#autotoc_md503", [
              [ "Thrift", "v3_12_0.html#autotoc_md504", null ],
              [ "Library", "v3_12_0.html#autotoc_md505", [
                [ "<tt>libYARP_os</tt>", "v3_12_0.html#autotoc_md506", null ]
              ] ],
              [ "Devices", "v3_12_0.html#autotoc_md507", null ],
              [ "yarprobotinterface", "v3_12_0.html#autotoc_md508", null ],
              [ "yarpmotorgui", "v3_12_0.html#autotoc_md509", null ]
            ] ],
            [ "Breaking Changes", "v3_12_0.html#autotoc_md510", [
              [ "Devices", "v3_12_0.html#autotoc_md512", null ]
            ] ],
            [ "Other", "v3_12_0.html#autotoc_md513", null ],
            [ "Contributors", "v3_12_0.html#autotoc_md514", null ]
          ] ]
        ] ],
        [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md497", [
            [ "Fixes", "v3_11_2.html#autotoc_md498", [
              [ "GUIs", "v3_11_2.html#autotoc_md499", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md500", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md501", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md493", [
            [ "Changes", "v3_11_1.html#autotoc_md494", [
              [ "Compiler features", "v3_11_1.html#autotoc_md495", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md496", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md474", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md475", [
              [ "Library", "v3_11_0.html#autotoc_md476", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md477", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md478", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md479", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md480", null ],
            [ "New Features", "v3_11_0.html#autotoc_md481", [
              [ "devices", "v3_11_0.html#autotoc_md482", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md483", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md484", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md485", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md486", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md487", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md488", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md489", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md490", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md491", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md492", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md470", [
            [ "Fixes", "v3_10_1.html#autotoc_md471", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md472", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md473", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md443", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md444", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md445", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md446", null ],
            [ "New Features", "v3_10_0.html#autotoc_md447", [
              [ "Carriers", "v3_10_0.html#autotoc_md449", null ],
              [ "Devices", "v3_10_0.html#autotoc_md450", [
                [ "Docker", "v3_10_0.html#autotoc_md448", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md451", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md452", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md453", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md454", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md455", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md456", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md457", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md458", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md459", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md460", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md461", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md462", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md463", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md464", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md465", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md466", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md467", [
                [ "Python", "v3_10_0.html#autotoc_md468", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md469", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1176", [
            [ "Fixes", "v3_9_1.html#autotoc_md1177", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1178", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1179", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1180", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1181", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1182", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1183", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1184", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1185", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1157", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1158", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1159", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1160", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1161", [
              [ "Docker", "v3_9_0.html#autotoc_md1162", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1163", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1164", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1165", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1166", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1167", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1168", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1169", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1170", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1171", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1172", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1173", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1174", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1175", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1148", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1149", [
              [ "tools", "v3_8_1.html#autotoc_md1150", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1151", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1152", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1153", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1154", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1155", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1156", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1107", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1108", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1109", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1110", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1111", [
              [ "Libraries", "v3_8_0.html#autotoc_md1112", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1113", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1114", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1115", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1116", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1117", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1118", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1119", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1120", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1121", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1122", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1123", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1124", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1125", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1126", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1127", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1128", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1129", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1130", null ],
              [ "Other", "v3_8_0.html#autotoc_md1131", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1132", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1133", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1134", [
              [ "bindings", "v3_8_0.html#autotoc_md1135", null ],
              [ "devices", "v3_8_0.html#autotoc_md1136", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1137", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1138", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1139", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1140", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1141", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1142", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1143", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1144", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1145", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1146", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1147", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1099", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1100", [
              [ "Documentation", "v3_7_2.html#autotoc_md1101", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1102", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1103", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1104", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1105", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1106", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1090", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1091", [
              [ "CMake", "v3_7_1.html#autotoc_md1092", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1093", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1094", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1095", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1096", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1097", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1098", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1065", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1066", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1067", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1068", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1069", [
              [ "Libraries", "v3_7_0.html#autotoc_md1070", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1071", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1074", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1075", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1076", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1077", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1078", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1079", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1080", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1081", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1082", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1083", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1084", [
              [ "Catch2", "v3_7_0.html#autotoc_md1085", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1086", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1087", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1088", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1089", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md1008", [
            [ "Important Changes", "v3_6_0.html#autotoc_md1009", [
              [ "Dependencies", "v3_6_0.html#autotoc_md1010", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md1011", [
              [ "Devices", "v3_6_0.html#autotoc_md1012", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md1013", [
              [ "Libraries", "v3_6_0.html#autotoc_md1014", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md1015", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md1016", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1022", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md1023", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md1033", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md1034", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md1035", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md1036", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md1037", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md1038", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md1039", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md1040", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md1041", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md1042", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md1043", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md1044", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md1045", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md1046", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md1047", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md1048", null ],
              [ "Tools", "v3_6_0.html#autotoc_md1049", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md1050", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md1051", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md1052", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md1053", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1054", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1055", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1056", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1057", [
              [ "Build System", "v3_6_0.html#autotoc_md1058", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1059", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1060", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1061", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1062", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1063", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1064", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md962", [
            [ "New Features", "v3_5_1.html#autotoc_md963", [
              [ "Libraries", "v3_5_1.html#autotoc_md964", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md965", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md966", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md967", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md968", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md972", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md973", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md974", null ],
              [ "Devices", "v3_5_1.html#autotoc_md975", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md976", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md977", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md978", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md979", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md980", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md981", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md982", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md983", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md984", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md985", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md986", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md987", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md988", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md989", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md990", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md991", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md992", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md993", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md994", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md995", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md996", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md997", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md998", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md999", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md1000", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md1001", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md1002", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md1003", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md1004", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md1005", [
                [ "Python", "v3_5_1.html#autotoc_md1006", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md1007", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md860", [
            [ "Important Changes", "v3_5_0.html#autotoc_md861", [
              [ "Dependencies", "v3_5_0.html#autotoc_md862", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md863", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md864", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md866", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md867", [
              [ "Libraries", "v3_5_0.html#autotoc_md868", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md869", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md870", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md882", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md884", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md887", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md888", null ],
              [ "Devices", "v3_5_0.html#autotoc_md889", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md890", [
              [ "Libraries", "v3_5_0.html#autotoc_md891", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md892", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md893", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md894", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md904", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md910", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md919", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md921", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md922", null ],
              [ "Devices", "v3_5_0.html#autotoc_md923", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md924", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md925", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md926", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md927", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md928", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md929", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md930", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md931", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md932", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md933", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md934", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md935", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md936", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md937", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md938", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md939", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md940", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md941", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md942", [
              [ "Carriers", "v3_5_0.html#autotoc_md943", null ],
              [ "Devices", "v3_5_0.html#autotoc_md944", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md945", [
                [ "Python", "v3_5_0.html#autotoc_md946", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md947", [
              [ "Libraries", "v3_5_0.html#autotoc_md948", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md949", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md952", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md953", null ],
              [ "Devices", "v3_5_0.html#autotoc_md954", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md955", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md956", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md957", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md958", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md959", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md960", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md961", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md845", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md846", null ],
            [ "Build System", "v3_4_6.html#autotoc_md847", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md848", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md849", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md850", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md851", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md852", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md853", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md854", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md855", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md856", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md857", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md858", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md859", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md837", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md838", [
              [ "Libraries", "v3_4_5.html#autotoc_md839", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md840", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md842", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md843", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md844", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md826", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md827", [
              [ "Build System", "v3_4_4.html#autotoc_md828", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md829", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md830", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md831", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md832", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md833", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md834", [
                [ "Python", "v3_4_4.html#autotoc_md835", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md836", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md815", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md816", [
              [ "Libraries", "v3_4_3.html#autotoc_md817", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md818", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md819", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md820", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md821", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md822", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md823", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md824", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md825", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md794", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md795", [
              [ "Build System", "v3_4_2.html#autotoc_md796", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md797", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md798", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md800", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md801", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md804", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md805", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md806", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md807", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md808", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md809", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md810", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md811", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md812", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md813", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md814", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md776", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md777", [
              [ "Build System", "v3_4_1.html#autotoc_md778", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md779", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md780", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md782", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md784", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md785", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md786", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md787", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md788", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md789", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md790", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md791", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md792", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md793", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md701", [
            [ "Important Changes", "v3_4_0.html#autotoc_md702", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md703", [
              [ "Build System", "v3_4_0.html#autotoc_md704", [
                [ "os", "v3_4_0.html#autotoc_md706", null ],
                [ "dev", "v3_4_0.html#autotoc_md713", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md714", null ],
              [ "Tools", "v3_4_0.html#autotoc_md715", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md717", [
              [ "Build System", "v3_4_0.html#autotoc_md718", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md721", [
                [ "conf", "v3_4_0.html#autotoc_md722", null ],
                [ "os", "v3_4_0.html#autotoc_md723", null ],
                [ "sig", "v3_4_0.html#autotoc_md731", null ],
                [ "math", "v3_4_0.html#autotoc_md734", null ],
                [ "dev", "v3_4_0.html#autotoc_md735", null ],
                [ "logger", "v3_4_0.html#autotoc_md736", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md737", null ],
              [ "Devices", "v3_4_0.html#autotoc_md738", null ],
              [ "Tools", "v3_4_0.html#autotoc_md753", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md756", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md762", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md763", [
              [ "Libraries", "v3_4_0.html#autotoc_md764", [
                [ "os", "v3_4_0.html#autotoc_md765", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md766", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md767", null ],
              [ "Devices", "v3_4_0.html#autotoc_md768", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md769", [
              [ "Libraries", "v3_4_0.html#autotoc_md770", [
                [ "os", "v3_4_0.html#autotoc_md771", null ],
                [ "sig", "v3_4_0.html#autotoc_md773", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md775", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md682", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md683", [
              [ "Build System", "v3_3_3.html#autotoc_md684", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md685", [
                [ "os", "v3_3_3.html#autotoc_md686", null ],
                [ "dev", "v3_3_3.html#autotoc_md690", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md691", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md698", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md700", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md675", [
            [ "Contributors", "v3_3_2.html#autotoc_md681", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md662", [
            [ "Important Changes", "v3_3_1.html#autotoc_md663", [
              [ "Dependencies", "v3_3_1.html#autotoc_md664", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md665", [
              [ "Libraries", "v3_3_1.html#autotoc_md666", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md667", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md668", [
                [ "grabberDual", "v3_3_1.html#autotoc_md669", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md670", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md671", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md672", [
                [ "Perl", "v3_3_1.html#autotoc_md673", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md674", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md637", [
            [ "Important Changes", "v3_3_0.html#autotoc_md638", [
              [ "Dependencies", "v3_3_0.html#autotoc_md639", null ],
              [ "Build System", "v3_3_0.html#autotoc_md640", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md641", [
                [ "YARP_os", "v3_3_0.html#autotoc_md642", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md643", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md644", [
              [ "Build System", "v3_3_0.html#autotoc_md645", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md646", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md647", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md648", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md649", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md650", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md651", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md654", null ],
              [ "devices", "v3_3_0.html#autotoc_md656", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md657", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md661", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md628", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md629", [
              [ "Build System", "v3_2_2.html#autotoc_md630", null ],
              [ "Devices", "v3_2_2.html#autotoc_md631", null ],
              [ "Tools", "v3_2_2.html#autotoc_md634", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md636", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md615", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md616", [
              [ "Carriers", "v3_2_1.html#autotoc_md617", null ],
              [ "Devices", "v3_2_1.html#autotoc_md619", null ],
              [ "Tools", "v3_2_1.html#autotoc_md621", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md624", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md627", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md605", [
            [ "Important Changes", "v3_2_0.html#autotoc_md606", [
              [ "Dependencies", "v3_2_0.html#autotoc_md607", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md608", null ],
              [ "Devices", "v3_2_0.html#autotoc_md609", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md610", [
              [ "Build System", "v3_2_0.html#autotoc_md611", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md612", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md613", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md614", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md597", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md598", [
              [ "CMake", "v3_1_2.html#autotoc_md599", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md600", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md601", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md602", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md603", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md604", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md575", [
            [ "New Features", "v3_1_1.html#autotoc_md576", [
              [ "Build System", "v3_1_1.html#autotoc_md577", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md578", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md579", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md580", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md581", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md582", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md583", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md584", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md585", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md586", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md587", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md588", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md589", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md590", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md591", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md592", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md593", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md594", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md595", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md596", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md560", [
            [ "New Features", "v3_1_0.html#autotoc_md561", [
              [ "Libraries", "v3_1_0.html#autotoc_md562", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md563", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md564", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md565", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md566", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md567", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md568", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md569", [
                [ "yarp", "v3_1_0.html#autotoc_md570", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md571", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md572", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md573", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md574", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md415", [
            [ "Important Changes", "v3_0_1.html#autotoc_md416", null ],
            [ "New Features", "v3_0_1.html#autotoc_md418", [
              [ "Libraries", "v3_0_1.html#autotoc_md419", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md420", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md421", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md422", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md423", [
              [ "Build System", "v3_0_1.html#autotoc_md424", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md425", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md426", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md427", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md428", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md429", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md430", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md431", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md432", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md433", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md434", [
                [ "yarpscope", "v3_0_1.html#autotoc_md435", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md436", [
                [ "rplidar2", "v3_0_1.html#autotoc_md437", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md438", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md439", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md440", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md441", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md442", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md379", [
            [ "Important Changes", "v3_0_0.html#autotoc_md380", [
              [ "Build System", "v3_0_0.html#autotoc_md381", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md382", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md383", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md384", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md385", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md386", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md387", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md388", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md389", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md390", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md391", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md392", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md393", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md394", [
              [ "Build System", "v3_0_0.html#autotoc_md395", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md396", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md397", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md398", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md399", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md400", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md401", null ],
              [ "Tools", "v3_0_0.html#autotoc_md402", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md403", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md404", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md405", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md406", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md407", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md408", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md409", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md410", [
              [ "Libraries", "v3_0_0.html#autotoc_md411", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md412", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md413", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md414", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md357", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md358", [
              [ "Build System", "v2_3_72_1.html#autotoc_md359", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md360", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md361", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md362", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md363", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md364", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md365", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md366", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md367", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md368", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md369", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md370", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md371", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md372", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md373", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md374", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md375", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md376", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md330", [
            [ "Important Changes", "v2_3_72.html#autotoc_md331", [
              [ "Libraries", "v2_3_72.html#autotoc_md332", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md333", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md334", [
              [ "Libraries", "v2_3_72.html#autotoc_md335", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md336", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md337", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md338", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md339", null ],
              [ "Devices", "v2_3_72.html#autotoc_md340", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md341", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md342", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md343", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md344", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md345", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md346", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md347", [
                [ "Java", "v2_3_72.html#autotoc_md348", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md349", [
              [ "Libraries", "v2_3_72.html#autotoc_md350", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md351", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md352", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md353", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md354", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md355", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md356", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md317", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md318", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md319", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md320", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md321", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md322", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md323", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md324", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md325", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md326", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md327", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md328", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md329", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md305", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md306", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md307", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md308", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md309", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md310", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md311", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md312", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md313", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md314", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md315", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md316", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md256", [
            [ "Important Changes", "v2_3_70.html#autotoc_md257", [
              [ "System Configuration", "v2_3_70.html#autotoc_md258", null ],
              [ "Build System", "v2_3_70.html#autotoc_md259", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md260", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md261", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md262", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md263", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md265", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md266", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md267", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md268", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md269", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md270", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md271", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md272", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md273", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md274", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md275", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md276", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md277", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md278", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md279", null ],
              [ "Devices", "v2_3_70.html#autotoc_md280", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md281", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md282", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md283", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md284", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md285", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md286", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md287", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md288", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md289", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md290", [
              [ "Libraries", "v2_3_70.html#autotoc_md291", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md292", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md293", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md294", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md295", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md296", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md297", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md298", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md299", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md300", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md301", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md302", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md303", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md304", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md218", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md219", [
              [ "Build System", "v2_3_68_1.html#autotoc_md220", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md221", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md222", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md223", [
              [ "Build System", "v2_3_68_1.html#autotoc_md224", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md225", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md226", [
              [ "Build System", "v2_3_68_1.html#autotoc_md227", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md228", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md229", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md230", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md231", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md232", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md233", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md234", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md235", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md236", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md237", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md238", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md239", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md240", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md241", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md242", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md243", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md244", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md245", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md246", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md247", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md248", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md249", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md250", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md251", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md252", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md253", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md254", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md193", [
            [ "Important Changes", "v2_3_68.html#autotoc_md194", [
              [ "Dependencies", "v2_3_68.html#autotoc_md195", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md196", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md197", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md198", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md199", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md200", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md201", null ],
              [ "Tools", "v2_3_68.html#autotoc_md202", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md203", null ],
              [ "Devices", "v2_3_68.html#autotoc_md204", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md205", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md206", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md207", null ],
              [ "Devices", "v2_3_68.html#autotoc_md208", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md209", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md210", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md211", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md212", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md213", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md214", null ],
              [ "Devices", "v2_3_68.html#autotoc_md215", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md216", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md217", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md185", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md186", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md187", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md188", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md189", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md190", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md191", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md192", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md172", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md173", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md174", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md175", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md176", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md177", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md178", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md179", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md180", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md181", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md182", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md183", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md184", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md163", [
            [ "Important Changes", "v2_3_66.html#autotoc_md164", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md165", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md166", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md167", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md168", null ],
              [ "Modules", "v2_3_66.html#autotoc_md169", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md170", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md171", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md148", [
            [ "Important Changes", "v2_3_65.html#autotoc_md149", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md150", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md151", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md152", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md153", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md154", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md155", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md156", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md157", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md158", null ],
              [ "Devices", "v2_3_65.html#autotoc_md159", null ],
              [ "Tools", "v2_3_65.html#autotoc_md160", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md161", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md162", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md147", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md146", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md145", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md144", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md143", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md138", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md137", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md136", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md135", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md133", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md132", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md131", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md130", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md129", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md378", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md377", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md255", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md142", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md141", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md140", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md139", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md134", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md128", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md127", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md126", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md125", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md124", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md123", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md122", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md121", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md120", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md119", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md118", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md117", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md110", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1203", [
          [ "C++", "contributing.html#autotoc_md1204", [
            [ "Header guards", "contributing.html#autotoc_md1205", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1206", null ],
          [ "Git", "contributing.html#autotoc_md1207", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1208", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1209", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1211", null ],
          [ "Example", "contributing.html#autotoc_md1212", null ],
          [ "Terminology", "contributing.html#autotoc_md1213", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1214", [
          [ "Deprecated Features", "contributing.html#autotoc_md1215", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1216", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1217", null ]
        ] ]
      ] ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ]
    ] ],
    [ "API Documentation", "usergroup1.html", [
      [ "Namespace List", "namespaces.html", [
        [ "Namespace List", "namespaces.html", "namespaces_dup" ],
        [ "Namespace Members", "namespacemembers.html", [
          [ "All", "namespacemembers.html", "namespacemembers_dup" ],
          [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
          [ "Variables", "namespacemembers_vars.html", null ],
          [ "Typedefs", "namespacemembers_type.html", null ],
          [ "Enumerations", "namespacemembers_enum.html", null ],
          [ "Enumerator", "namespacemembers_eval.html", null ]
        ] ]
      ] ],
      [ "Class List", "annotated.html", [
        [ "Class List", "annotated.html", "annotated_dup" ],
        [ "Class Index", "classes.html", null ],
        [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
        [ "Class Members", "functions.html", [
          [ "All", "functions.html", "functions_dup" ],
          [ "Functions", "functions_func.html", "functions_func" ],
          [ "Variables", "functions_vars.html", "functions_vars" ],
          [ "Typedefs", "functions_type.html", "functions_type" ],
          [ "Enumerations", "functions_enum.html", null ],
          [ "Enumerator", "functions_eval.html", "functions_eval" ],
          [ "Properties", "functions_prop.html", null ],
          [ "Related Symbols", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", null ],
          [ "Enumerations", "globals_enum.html", null ],
          [ "Enumerator", "globals_eval.html", null ],
          [ "Macros", "globals_defs.html", "globals_defs" ]
        ] ]
      ] ],
      [ "Examples", "examples.html", "examples" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"AbstractCarrier_8cpp.html",
"CameraConfigData_8h_source.html",
"ControlBoard__nws__yarp__ParamsParser_8cpp_source.html",
"FakeDeviceWrapper_8cpp_source.html",
"FakeSpeechTranscription_8cpp.html",
"GenericVocabs_8h.html#ac991d7fbc5519a47d950cc81e29c76fb",
"IControlMode_8h.html#a878eda2916a3ae88b29da4068cde68d2aa0ab0427f152a8b4a364a4cca4c1ae50",
"IFrameGrabberImageTest_8h.html#a405b4c3d7a86e7a7224b8a18a7ba452e",
"IMotorTest_8h_source.html",
"ISpeechSynthesizerMsgs_2idl__generated__code_2return__set__language_8h.html",
"Image_8copyPixels_8cpp.html#a64fad0103eb79783f7346bdd45ccf5aa",
"ImplementVirtualAnalogSensor_8cpp_source.html",
"Localization2D__nws__ros2_8cpp_source.html",
"Map2D__nwc__yarp__ParamsParser_8cpp_source.html",
"MonitorPython_8h_source.html",
"NetType_8cpp_source.html",
"PidEnums_8h.html#a91748b7a7c83ad7214ffbc6d1490c189a349e3fc84c466b80f5c443619e566d5d",
"PortAudioRecorderDeviceDriver__ParamsParser_8h.html",
"RGBDSensor__nwc__yarp_8cpp.html#ac30457003d31e580558c6b110f0e1721",
"Ros2RGBDConversionUtils_8cpp_source.html",
"ShmemLogComponent_8cpp.html#a77405b31505431c8b8e16389312cf9e8",
"TcpCarrier_8h_source.html",
"Types_8h.html#af28ddeab763114e182691c93262dd19fa30d7b078eaec3a68dd48a901e2caabc8",
"WireState_8h.html",
"channelprioritization.html#why",
"classAudioRecorder__nwc__yarp.html#ab70dbb1c7ad94751e3a1aa374357fc1a",
"classBattery__nws__yarp.html#adad674a55bd32b328100fdd0b248422b",
"classBuilderScene.html#afdd18c4d538940dbf7d95a79e91d5452",
"classControlBoardMsgs.html#a484e1396e9454a9688d73ec7015750ec",
"classControlBoardMsgs__calibrateAxisWithParamsRPC__helper_1_1Command.html#a541807b52f367dd9a2f225634aeca3d1",
"classControlBoardMsgs__checkMotionDoneOneRPC__helper_1_1Command.html#ab4b8ee81123d3564569a824d229be069",
"classControlBoardMsgs__getAutoBrakeEnabledRPC__helper_1_1Command.html#ae67996f82b82c1d355dac8ed05b01c26",
"classControlBoardMsgs__getControlModeOneRPC__helper_1_1Reply.html#a34c33e5f6134fe70197047639f18db87",
"classControlBoardMsgs__getDutyCycleOneRPC__helper.html#a312996b2e1d5af63d6d6d43b781e5669",
"classControlBoardMsgs__getEncoderTimedAllRPC__helper.html#ae15423e72155e7e279e4131c80b64ddb",
"classControlBoardMsgs__getInteractionModesGroupRPC__helper.html#adfd1fdfd84050cc66d1278ec650e7235",
"classControlBoardMsgs__getMotorEncoderCountsPerRevolutionRPC__helper_1_1Command.html#a20f21dfbd470b529fb3169a70d83c1a3",
"classControlBoardMsgs__getNominalCurrentRPC__helper_1_1Command.html#a94b535b95562ea1a0f28bfbe9cb2ede1",
"classControlBoardMsgs__getPidErrorLimitsRPC__helper_1_1Command.html#aa380bf52f646025dcd77bd70694ef2bf",
"classControlBoardMsgs__getPidOutputRPC__helper_1_1Command.html#ab6f83eb89d2c9a6671f1adfe509cbd09",
"classControlBoardMsgs__getPowerSupplyVoltageRPC__helper.html#aecdae9496227789c580c26361ae95192",
"classControlBoardMsgs__getRefPositionOneRPC__helper_1_1Command.html#a8e8a86ca0b2e1e81238aef07d045fbcc",
"classControlBoardMsgs__getRemoteVariableRPC__helper_1_1Command.html#a40e09daefadd5f49d1e272b40d1317d4",
"classControlBoardMsgs__getTargetVelocityOneRPC__helper_1_1Command.html#ae4b3eb74853e5dc1d99561e44d40bf73",
"classControlBoardMsgs__getTrajAccelerationGroupRPC__helper_1_1Reply.html#ae99c10f7de2aab32c0dcda0e0fc4c290",
"classControlBoardMsgs__isCalibratorDevicePresentRPC__helper.html#a4bbb08a5ba6201e45f6dbb24f65ac2c6",
"classControlBoardMsgs__positionMoveGroupRPC__helper.html#a25bdaffff3480242b22b65cf25223f41",
"classControlBoardMsgs__resetEncoderAllRPC__helper.html#a4e651dd061cdc2fc03afb56a078e8f6a",
"classControlBoardMsgs__setControlModeAllRPC__helper.html#a5c7ff5cb5349fc62d45b6db4bb9f479d",
"classControlBoardMsgs__setImpedanceOffsetRPC__helper_1_1Reply.html#aaff0cd957a5f92b5e18f7ba88faae9d5",
"classControlBoardMsgs__setMotorEncoderCountsPerRevolutionRPC__helper_1_1Command.html#ac16d55c1fd947418fc901b93c82ee51a",
"classControlBoardMsgs__setPidErrorLimitRPC__helper_1_1Command.html#a4856379d47a52862fdcd350247fa3e92",
"classControlBoardMsgs__setPidsRPC__helper.html#a799d7617be20dbc5499fddbe6596b268",
"classControlBoardMsgs__setRefDutyCycleGroupRPC__helper_1_1Reply.html#aa6e5cce7fd4d25961b6affa4be1981ae",
"classControlBoardMsgs__setRefTorqueOneRPC__helper_1_1Command.html#af342c2dab5829309512536bc25e66b49",
"classControlBoardMsgs__setTrajAccelerationsAllRPC__helper_1_1Command.html#a4bcd06e3df6b25d8cc64f7ceb0469dd9",
"classControlBoardMsgs__stopGroupRPC__helper.html#afa09b98a45f206a124c0c56d1bafb16d",
"classControlBoardRPCd.html#a62c8b0d46cb6c50b65d9bfa1c8cb6318",
"classControlBoardRemappingEngine.html#a6e872cad295aff64883e2ac2842f5530",
"classControlBoard__nwc__yarp.html#a86b6a319f31b7492cb1be193452c0042",
"classConversationModel.html#a74e014908ceb065a920c15ed392670dd",
"classDeviceDriver_1_1Private.html#abe8019cc9be26b1d05480ea0bc0d453e",
"classFSM_1_1StateMachineBase.html#afc6ebde0c7883b92199e2b45492069df",
"classFakeBatteryService__getBatteryStatusString__helper_1_1Reply.html#a26cd4f6e5c2869e2bf01a94f52ecd4d5",
"classFakeBatteryService__setBatteryStatus__helper_1_1Reply.html#aea8f7ce688f1795338c1e0d83814a18a",
"classFakeDepthCameraDriver__mini.html#a9c97606af355ad2998d8fb462ccfa131",
"classFakeFrameGrabber__ParamsParser.html#a70565125f8be974fa732e8abd60b869b",
"classFakeLaser.html#a1c4153ed7b0aeff6276596fa144fc380",
"classFakeLaserWithMotor.html#af62ceb53f9be7728742741da50173de3a9141902a09fd7313fe222bd41eda02bc",
"classFakeMotionControl.html#a3689c3e3e7ad89694cbeab7484ac557a",
"classFakeMotionControl.html#acf787b9d7d389a88b8a67a14e35058cc",
"classFakeNavigation.html#a3f422053ad0b95e6bf0563454e46b73a",
"classFakeSerialPort__ParamsParser.html#ae2fb5c2c735f735627c1ebfd51a27df8",
"classFakeTestMsgs__doSomethingUnimplementedRPC__helper.html#af1bab82f148035a56c93f57ad1c07479",
"classFrameGrabberMsgs.html#a27c799eb411e61c18accb5d3957da053",
"classFrameGrabberMsgs__getColorCodingMaskDC1394RPC__helper.html#a7c10e96702542e220c114e4b2e97ec64",
"classFrameGrabberMsgs__getHeightRPC__helper_1_1Command.html#a4ffb8859a8e2fb0670be917951a49183",
"classFrameGrabberMsgs__getRgbHeightRPC__helper_1_1Command.html#afd99ae3bcdf31e6c8959f3f3852a7e05",
"classFrameGrabberMsgs__getVideoModeMaskDC1394RPC__helper.html#aaf09358cd44e88daf0ee40b9f009a15e",
"classFrameGrabberMsgs__setActiveRPC__helper.html#af9b7fc2b1fbc87bf43b88195be4fa3d2",
"classFrameGrabberMsgs__setFeature1RPC__helper.html#aecc1cff2599982a64c3e06d668a31167",
"classFrameGrabberMsgs__setPowerDC1394RPC__helper.html#a3c2bd74d9e9597d79ef44a235843c22b",
"classFrameGrabberOf__ForwarderWithStream.html#a714dbd3304f27385c7cee82cfb5713e1",
"classFrameTransformGetMultiplexer.html#ad54484a5e0ed7c62375006e7348b31a7",
"classFrameTransformStorageSetRPC.html#a7e76e4ad890105b93f34aa49fe13e873",
"classGPTDevice__ParamsParser.html#ae3e1e3f363058999959bc929f05fc09b",
"classGptTranscribeDevice__ParamsParser.html#a1f0822787f2981fa412cc7e5a52d9cf3",
"classIAudioGrabberMsgs__getRecordingAudioBufferMaxSize__RPC__helper_1_1Command.html#aee67e1c4f1d37e5450db1fc79bdccb04",
"classIAudioGrabberMsgs__stopRecording__RPC__helper_1_1Reply.html#a7509b46adae2fc124a51b7fd90363224",
"classIChatBotMsgs__setLanguageRPC__helper_1_1Command.html#a702fa2b221c6080c8b2c14f10da951fc",
"classIFrameGrabberControlMsgs__return__getActive.html#a240fb7697603b61a2b4dd8443aa67757",
"classIJoypadControlRPCd.html#a3434836a60f78a32a7174fb3a39f3f4c",
"classILocalization2DMsgs__set__initial__pose2__RPC__helper.html#a2d75eb92eb51d8d70a93eb7f35f43e72",
"classIMap2DMsgs__clear__all__maps__RPC__helper_1_1Command.html#a8aa645b2eff30aaa0b1e5de39cd7886e",
"classIMap2DMsgs__delete__object__RPC__helper_1_1Reply.html",
"classIMap2DMsgs__get__area__RPC__helper_1_1Reply.html#ad003fe0a305103160c1dc76b0da6d1b3",
"classIMap2DMsgs__get__path__RPC__helper.html#a967549dfb0911f6073a4f8bb3fff9c4b",
"classIMap2DMsgs__remove__map__RPC__helper.html#aee8c91fa9186241b539011083427932c",
"classIMap2DMsgs__save__maps__collection__RPC__helper.html#a492439e31e8a47202207567e00a3b526",
"classIMap2DRPCd.html#ad2e7792d24f6a4eb19b8546800f78a2e",
"classINavigation2DMsgs__get__current__navigation__map__RPC__helper_1_1Reply.html",
"classINavigation2DMsgs__goto__target__by__relative__location2__RPC__helper.html",
"classINavigation2DVelocityActionsMsgs__getLastVelocityCommandRPC__helper.html#a9bb0e67b66b932ff2f080c80718a8f2d",
"classIRGBVisualParamsMsgs__return__getRgbSupportedCfg.html#a053ec35c1c25067f94a81ccfc0609922",
"classIRangefinder2DMsgs__getScanRate__RPC__helper_1_1Reply.html#a1a4e61e8053a6ac0d4c672873a6dbb0b",
"classIRobotDescriptionMsgs__getRemoteProtocolVersion__helper.html#ae038fdbb2be59a02195f8f82f270aacb",
"classISimulatedWorldMsgs__attach__helper.html#a691d35587e986ceda4b0790533c52b28",
"classISimulatedWorldMsgs__enableGravity__helper_1_1Reply.html#ab6672e74d08a60f8b97024329ac88bf1",
"classISimulatedWorldMsgs__makeModel__helper.html#a346c3ef5a208565171fe0d09d613e6ec",
"classISpeechSynthesizerMsgs__get__pitch__helper.html#aa6eb83f38ee0bbfa5ed5e889b6f0f430",
"classISpeechSynthesizerMsgs__synthesize__helper_1_1Command.html#a01f02e4d3cba357b7b7d1e0465de59dd",
"classInterfaceFoCApiMock.html#a9e6e67a4f222bc934668b42fb9568c4a",
"classJoypadControl__nws__yarp__ParamsParser.html#a05441af74b2bd6cefa078105730148c0",
"classLineHandle.html#a86386089a378c9b5f6c2ebee5d7de642",
"classLogModel.html#a353e46163a73f90855ac31111c035404a4d88718aab93b4ce7991a909a61b4e0e",
"classMap2DStorage__ParamsParser.html#a0646d3b6ab99551dfc7c45842c80a0e5",
"classMessageStack_1_1Private.html#a558faa95bbcfce92922f897dd1fba5f2",
"classMonitorBinding.html#ab3d9a7451648553a043963efb3c54a14",
"classMultipleAnalogSensorsClient.html#aa2f72a8fbbcbdd422cdca38229ff3ad7",
"classNavigation2D__nwc__yarp.html#a5c4561a71d0883fa830f7f6301f10674",
"classNop.html",
"classParameter.html#a5c5fda0a63bd1f4b586c9c107f11408e",
"classPortAudioDeviceDriver.html#a03ce051c6adaa894295fff8071b40cee",
"classPriorityCarrier.html#ab2d905dcbe6746b4de9a6638d63d22c0",
"classRGBDSensorMsgs.html#a4558cd7bc6ed794ebfec7cdb697bd965",
"classRGBDSensorMsgs__getDepthFOVRPC__helper_1_1Reply.html#a927f877d8a072aa2a772ba0da01c7096",
"classRGBDSensorMsgs__getFeature1RPC__helper_1_1Command.html#a0a473cad3e45aa28b72040dc6bc422a7",
"classRGBDSensorMsgs__getRgbImageRPC__helper_1_1Command.html#ab5248d7f24a38dda7e6da40099f8ff4d",
"classRGBDSensorMsgs__hasFeatureRPC__helper.html#a48874f1f522fc98913d098ec1f94364a",
"classRGBDSensorMsgs__setDepthFOVRPC__helper.html",
"classRGBDSensorMsgs__setOnePushRPC__helper_1_1Reply.html",
"classRGBDSensor__nws__yarp__ParamsParser.html#adcc2318486eb306665d7286a03bed776",
"classRangefinder2D__nwc__yarp__ParamsParser.html#a1c6af8736ddf096609a0d7763a851f32",
"classResourceFinder_1_1Private.html#af0cf166a875ee815ffe0df8b69ada46a",
"classRobotWidgetTree.html#a0615b26d49c8c92f58d21e0fd74874fe",
"classSegFault__ParamsParser.html#a4d5678d286c8fdd5c60f36e5fda6a9c4",
"classServer.html#ae87fc64882444cae6cf64c2194ee5fe6",
"classSimulatedWorld__nws__yarp__ParamsParser.html#a49aa59f15f6578573e8c7ee39eed25d9",
"classStateExtendedInputPort.html#a57741a79545f2969ae5a12220605c2de",
"classTestMultipleContainers__testMap2__helper_1_1Reply.html#a97c17eea5a18aea3a285431b0a283b28",
"classTextureBattery.html#a6324394e227867f717f5e8f62169b605a0b32e934c7c6b44200608b32f316c385",
"classUSBCameraDriverRaw.html",
"classWebSocketCarrier.html#a0bee3049c6790a5c00a9dcf9370fd1b5",
"classaction__class.html#aea7bc89f57d5f1081c553fe987b32356",
"classpylonCameraDriver.html#af945bf77fbfb18b8798076541dbeb5ce",
"classreturn__getAllTransforms.html#a6de2dfd92befd439b8cfc2742954c2b7",
"classreturn__getEncoderAccelerationAll.html#ad025618202f22503dc6058ae586c6d78",
"classreturn__getMotorEncoderAll.html#aeab5b3b2c8302b40c1b8f4122f2df0ff",
"classreturn__getPidOutput.html#a57c33b6afed5ff89bbffd85093e7378a",
"classreturn__getRemoteVariable.html#a0b0109f73963075f3684bfcadb5ab949",
"classreturn__getTrajSpeedsGroup.html#a41209a4650dfcc3a98d28c002d6a9cbb",
"classreturn__get__localization__status.html#a2dfd78b05af1eb2708dd7a05796cb7b2",
"classreturn__set__speed.html#a0d9dbd36a1e08bb25283a953845ff193",
"classxHandControlBoard__ParamsParser.html#a97682a27281dc1fe0061164a86af2e7e",
"classyarpActionsPlayer__IDL__resample__helper.html#a292f56ac6136b0b20d63592dc7eac77f",
"classyarpActionsPlayer__IDL__stop__helper.html#ad0855f29537cd37ffb9ac0ca10e08874",
"classyarp_1_1dev_1_1AxisDataList.html#a39e5d674274303d144676b26b24a077b",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a41ea1c4e9e7c254f2d92eb46e2172873",
"classyarp_1_1dev_1_1DeviceDriver.html#ad2a1b10de5dda3160d687ebb5f20577c",
"classyarp_1_1dev_1_1ICartesianControl.html#a65db61aad4888e8a2e74d91676009a88",
"classyarp_1_1dev_1_1IFrameTransform.html#aacd0f45c8e373b66a4e26d9fea6a62e4",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getAllAxes__helper_1_1Command.html",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getButton__helper.html#a373612ca57da85db360a547436bac15c",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getStickCount__helper_1_1Command.html#a6113379de27f9c10f35613f03ff16916",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getTrackballCount__helper.html#a5f39b3506eb0f18c399852cbef836561",
"classyarp_1_1dev_1_1ILLMMsgs__ask__helper_1_1Command.html#ae36effe3f8d45242161f8de7861e64de",
"classyarp_1_1dev_1_1ILLMMsgs__refreshConversation__helper.html#adbad8a7ac5a3412b5ae8a4520c588c46",
"classyarp_1_1dev_1_1IPidControlRaw.html#a4bf1e42b41efed41e2319aa53c906ff7",
"classyarp_1_1dev_1_1ISixAxisForceTorqueSensors.html#acdece8e9234d008c61891b67e3827915",
"classyarp_1_1dev_1_1ImplementAmplifierControl.html#afb53ebf7f9f3e8e225e449612861cb75",
"classyarp_1_1dev_1_1ImplementImpedanceControl.html#a4114f310568607bbce929d550fca5fd8",
"classyarp_1_1dev_1_1ImplementPidControl.html#a1cc2bfc1b00d06b504fb7bcfb82649cc",
"classyarp_1_1dev_1_1ImplementTorqueControl.html#af5b37810e94c322dbee75af139c518f6",
"classyarp_1_1dev_1_1KeyboardJoypad_1_1Impl.html#a67184769ce8bba1c12104cfe94384968",
"classyarp_1_1dev_1_1MobileBaseVelocityData.html#a5f8cfdc7793fbfa110b7cd0ea51af29e",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DPath.html#a74595abdbf3f6f169fcd0f563224184e",
"classyarp_1_1dev_1_1OdometryData6D.html#a5c3c6a15a76b971f78b44605624c674d",
"classyarp_1_1dev_1_1RGBDSensorParamParser.html",
"classyarp_1_1dev_1_1StubImplInteractionModeRaw.html#ac9d1a7ccfeb97b24ad7ec6a9d327633f",
"classyarp_1_1dev_1_1impl_1_1Buffer.html#ab885c5774936f0b4fc7aaa685ae067f3",
"classyarp_1_1dev_1_1return__getStickCount.html#a4eac18518cd1ab4b1414426fee73bc27",
"classyarp_1_1dev_1_1xHandControlBoard.html#a3fab4b2f62367e3277831a55fb6509a6",
"classyarp_1_1dev_1_1xHandControlBoard.html#afc78001b260e95eb4605ed955a091b94",
"classyarp_1_1manager_1_1Author.html#a875957625687e5229189e982bcc2aff2",
"classyarp_1_1manager_1_1Connection.html#aa1bde4b684a55d7c35f4d7d982b52ab2",
"classyarp_1_1manager_1_1GPU.html#a0de2d02a518c1dcf9b57c2d6c660aa23",
"classyarp_1_1manager_1_1KnowledgeBase.html#a7ee6b52a671b1fc0466302c704bfb932",
"classyarp_1_1manager_1_1Manager.html#a6ef1d7569d08c6ebdcdec8a4c219875f",
"classyarp_1_1manager_1_1ModuleInterface.html#a36e8132b9f11d2331fd0d2e8b77a713e",
"classyarp_1_1manager_1_1Processor.html#a8bd33ed49316ffe5e40c0ff59ef89e20",
"classyarp_1_1manager_1_1XmlModLoader.html#a23d3e4f8ec020dd6fa51c2e37b23aa9d",
"classyarp_1_1math_1_1Rand.html",
"classyarp_1_1os_1_1AbstractContactable.html#a2cf0f3a5fa2588b4176337313941596d",
"classyarp_1_1os_1_1Carrier.html#a70bad61f8e09cf28b8598583360b95a3",
"classyarp_1_1os_1_1ConnectionState.html#a68bad255b73a61595c66bc8627a750c6",
"classyarp_1_1os_1_1Event_1_1Private.html",
"classyarp_1_1os_1_1LogStream.html#a101d2dde6a480089b96d381f7fc9d549",
"classyarp_1_1os_1_1NameSpace.html#a38fb8c6546e3a7d09889acddafbbba6d",
"classyarp_1_1os_1_1NullConnectionReader.html#a6c97ddd9ecabf8d89f94d1fe621d418c",
"classyarp_1_1os_1_1PeriodicThread_1_1Private.html#ae9cea67c7160339d0506064c390b15f0",
"classyarp_1_1os_1_1PortCoreMsgs__attachPortmonitorIn__helper.html#a84a6aa221120f32830d2f5f2ee00bbdb",
"classyarp_1_1os_1_1PortCoreMsgs__detachPortmonitorIn__helper_1_1Reply.html",
"classyarp_1_1os_1_1PortCoreMsgs__getConnectionInfoOut__helper_1_1Command.html",
"classyarp_1_1os_1_1PortCoreMsgs__getConnectionQosIn__helper_1_1Reply.html#a9ce3c429c5cddefa4ba3841520fe1a8e",
"classyarp_1_1os_1_1PortCoreMsgs__getPortmonitorParamsOut__helper_1_1Command.html#aa60d4ffb6f0aeeb494aa945e4484d89f",
"classyarp_1_1os_1_1PortCoreMsgs__setConnectionParamsOut__helper.html#a222e33903964cae9ba6cae97e731f566",
"classyarp_1_1os_1_1PortCoreMsgs__setPortmonitorParamsIn__helper.html#ae9ef0875576d62d95c0dfbb2fcbb5987",
"classyarp_1_1os_1_1PortWriter.html#aac0006ec5d606d4922c0cf095577e8a8",
"classyarp_1_1os_1_1ResourceFinder.html#a20434e580ad3b3cd9ef77066fbe50d9f",
"classyarp_1_1os_1_1SharedLibraryClass.html#a194d8624a10d38575e3c4699a4f8681c",
"classyarp_1_1os_1_1StorageInfoData.html#a2215c8ed5c02a52cf8dd143e8595866b",
"classyarp_1_1os_1_1Things.html#a5eb2286c3828188bdfdcc3991a321515",
"classyarp_1_1os_1_1UnbufferedContactable.html#a1fe6e4d9ab39c65476f7a47f081c81eb",
"classyarp_1_1os_1_1YarpNameSpace.html#ab15e45129c648c1be0378ace37a44cc1",
"classyarp_1_1os_1_1idl_1_1WireState.html#a8d23c349ca31f6e207a3989a95efdf34",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#a4486e46ad02c7c6d3ede82f071445a63",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html#a1a8b75014844163765ac58eff741ca53",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html#a0b58c8b51ae688fe00b46f09e080e0fc",
"classyarp_1_1os_1_1impl_1_1NameserCarrier.html",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#acb699c4621821d60af8b9353111c7473",
"classyarp_1_1os_1_1impl_1_1PortReaderBuffer.html#ad13ec5c49550d1244b7c6d7fecfd1263",
"classyarp_1_1os_1_1impl_1_1Storable.html#a30d76f38e3e38e38ab00fda8af78e624",
"classyarp_1_1os_1_1impl_1_1StoreInt32.html#a534bd7ffdc67af3f7dc8954a8fe52e28",
"classyarp_1_1os_1_1impl_1_1StoreVocab64.html#a5bb5ac344c3e0451912a357614ed14a5",
"classyarp_1_1os_1_1impl_1_1UdpCarrier.html#a0787b4233ddf9fe83b0f801d249c4592",
"classyarp_1_1os_1_1return__getConnectionQos.html#afde44f3f4923797bee65a97268067f1c",
"classyarp_1_1profiler_1_1graph_1_1Graph.html#a902c5b3eacb66d60752525ab23297a95",
"classyarp_1_1robotinterface_1_1Param_1_1Private.html",
"classyarp_1_1robotinterface_1_1impl_1_1CalibratorThread.html#a3957aa418512fa2c0bfec2ef4184fa5f",
"classyarp_1_1robottestingframework_1_1jointsPosMotion_1_1Private.html#a894f0abd9caa9eca762fed0e116c6c6c",
"classyarp_1_1serversql_1_1impl_1_1Subscriber.html#a68c7c2a3e8d2d9750ebe55c2791f28cc",
"classyarp_1_1sig_1_1DistortionModelData.html#a7052c6ca138ea06b46db441c7643b078",
"classyarp_1_1sig_1_1IntrinsicParamsData.html#aa1025ab171a57a297449964440064366",
"classyarp_1_1sig_1_1PointCloudNetworkHeader.html#aae7ce255e0e645684e41cb6a9f26f21d",
"classyarp_1_1sig_1_1VectorBase.html#a3f1480f1490c57c30e77eb0982486f46",
"classyarp_1_1yarpLogger_1_1LogEntry.html#afb27886364a45b82437b5b0d7f27a295",
"classyarpdataplayer__IDL__getStatus__helper_1_1Command.html#aeb1263e1067b3b96f3d96d48bf296564",
"classyarpdataplayer__console__IDL.html#a05f1bad2cd171141103433a0338beca6",
"classyarpdataplayer__console__IDL__getPortName__helper.html#aaf8e0fdc550051eb71c0ef47f6bcd827",
"classyarpdataplayer__console__IDL__quit__helper_1_1Command.html#a77efe4cc69b6cc4d7623dee720f92a8f",
"classyarpdataplayer__console__IDL__step__helper_1_1Command.html#a8782920a27db8607804c985d1d3b9592",
"classyarprobotinterfaceRpc__is__ready__helper_1_1Command.html#aeff0a587aadf9b3d5fa86cd2af95a41b",
"compiler_8h.html#a8ad89c6dc53168f39d2d7a6a14d0addf",
"dir_07abee87052b88a5a555010dda0cd710.html",
"dir_6c178c68bee08468ac7a6659b4c6e5bd.html",
"dir_cc172ecf2577f181f24f8a62135eabaf.html",
"dr__mp3_8h.html#aee70260e71abc9997a094a4bbd3c18fc",
"dr__wav_8h.html#afe89411ee107b08a8407ca7dc5b1c79f",
"frameGrabberMsgs_2idl__generated__code_2IRGBVisualParamsMsgs__return__getRgbHeight_8cpp_source.html",
"globals_defs_l.html",
"guis_2yarpllmgui_2main_8cpp.html#a0ddf1224851353fc92bfbff6f499fa97",
"kbase_8h.html#a99a68ee2f15e3de08e60d06ef57361a5",
"logmodel_8cpp.html#af72970903a7e3dee5f826ca4ddcf163d",
"namespaceyarp_1_1conf_1_1environment.html#a311123ec22d95bf63b395dadb9a79255",
"namespaceyarp_1_1dev_1_1tests.html#a46f60992307c250569c0c692ac71d5ce",
"namespaceyarp_1_1os.html#ae0ae51936d9fca34f3fc1c0e2642cc01a9beffa5f9b8c68cb1c3af681e145a178",
"namespaceyarp_1_1sig_1_1file.html#ae22d17bba9072a191d15d3956d6a1ddc",
"piddlg_8cpp.html#a9d9b086ce9794b39e1c9ab6977a84d1c",
"resource_finder_spec.html#autotoc_md30",
"return__getJointType_8h_source.html",
"return__getTargetPositionAll_8cpp_source.html",
"return__readPrompt_8h_source.html",
"sliderWithTarget_8h_source.html",
"structFrameGrabber__nwc__yarp__ParamsParser_1_1parser__version__type.html#a01a3e84f6f67c57df5bb8f053ae61bf7",
"structSerialPort__nwc__yarp__ParamsParser_1_1parser__version__type.html",
"structdrwav.html#a71fa3abce7f96f79ba2e791fb97ed256",
"structswig__lua__attribute.html",
"structyarp_1_1dev_1_1Nav2D_1_1Map2DObject.html#a45e4b0656dda7dfbac2c429afb260eba",
"structyarp_1_1profiler_1_1NetworkProfilerBasic_1_1PortInfo.html#a46a634d9f10b04769b313ed63d822699",
"structyarp_1_1sig_1_1DataXYZNormalRGBA.html#a4b7d9805bfc3073db48fd4978d0271b0",
"swigluarun_8h.html#ae09a0dc69f8d4b6cd4e9da225ac55bd6",
"system_8h.html#a070d84e0d25ff5265201b4daea321d55",
"v2_3_66.html#autotoc_md165",
"v3_0_0.html#autotoc_md402",
"v3_3_0.html#autotoc_md646",
"v3_5_1.html#autotoc_md988",
"xilinx-v4l2-controls_8h.html#a272d00d63385ef0dd99e9f601b6eaa12",
"yarp_cluster.html#yarp_cluster_iperf",
"yarpcontextutils_8cpp.html#aaf513dcacb320487706a794cfa4b398e"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';