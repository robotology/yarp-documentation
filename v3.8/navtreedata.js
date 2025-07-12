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
    [ "Other Pages", "usergroup0.html", [
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
          [ "Binary releases", "download.html#download_binary", [
            [ "Windows", "download.html#download_windows", null ],
            [ "Linux (Debian/Ubuntu)", "download.html#download_linux", null ],
            [ "macOS", "download.html#download_macOS", null ]
          ] ],
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
              [ "Install from binaries", "install_yarp_linux.html#install_linux_from_binaries", null ],
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
                [ "Compiling YARP", "install_yarp_linux.html#compiling_yarp", null ],
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
          [ "Check your installation", "check_your_installation.html", [
            [ "Check basic YARP functionalities", "check_your_installation.html#check_basic_functionalities", null ],
            [ "Play a recorded sequence", "check_your_installation.html#sec-play-recorded-sequence", null ]
          ] ]
        ] ],
        [ "YARP Environmental Variables", "yarp_environment.html", [
          [ "Logger and print configuration", "yarp_environment.html#autotoc_md6", null ],
          [ "Directories", "yarp_environment.html#autotoc_md7", null ],
          [ "Robot Configuration", "yarp_environment.html#autotoc_md8", null ],
          [ "UDP Carrier configuration", "yarp_environment.html#autotoc_md9", null ],
          [ "ROS configuration", "yarp_environment.html#autotoc_md10", null ],
          [ "Misc configuration", "yarp_environment.html#autotoc_md11", null ],
          [ "Other", "yarp_environment.html#autotoc_md12", null ],
          [ "Deprecated Environmental Variables", "yarp_environment.html#autotoc_md13", null ],
          [ "Build system", "yarp_environment.html#autotoc_md14", null ]
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
        ] ]
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
              [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md17", null ],
              [ "Configuration Files", "resource_finder_spec.html#autotoc_md18", null ],
              [ "Data directories contents", "resource_finder_spec.html#autotoc_md20", [
                [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md21", null ],
                [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md22", null ],
                [ "Application deployment files", "resource_finder_spec.html#autotoc_md23", null ]
              ] ],
              [ "Generation of the search path", "resource_finder_spec.html#autotoc_md24", null ],
              [ "3rd party packages", "resource_finder_spec.html#autotoc_md25", [
                [ "Installed packages", "resource_finder_spec.html#autotoc_md26", [
                  [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md27", null ],
                  [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md28", null ]
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
            [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md17", null ],
            [ "Configuration Files", "resource_finder_spec.html#autotoc_md18", null ],
            [ "Data directories contents", "resource_finder_spec.html#autotoc_md20", [
              [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md21", null ],
              [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md22", null ],
              [ "Application deployment files", "resource_finder_spec.html#autotoc_md23", null ]
            ] ],
            [ "Generation of the search path", "resource_finder_spec.html#autotoc_md24", null ],
            [ "3rd party packages", "resource_finder_spec.html#autotoc_md25", [
              [ "Installed packages", "resource_finder_spec.html#autotoc_md26", [
                [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md27", null ],
                [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md28", null ]
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
          [ "add", "port_admin.html#port_admin_add", null ],
          [ "del", "port_admin.html#port_admin_del", null ],
          [ "list", "port_admin.html#port_admin_list", null ],
          [ "ver", "port_admin.html#port_admin_ver", null ]
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
            [ "Using thrift client", "thrift_monitor.html#autotoc_md15", null ],
            [ "Using yarp rpc or custom clients", "thrift_monitor.html#autotoc_md16", null ]
          ] ]
        ] ],
        [ "ROS message types", "idl_rosmsg.html", [
          [ "yarpidl_rosmsg tutorials", "idl_rosmsg.html#idl_rosmsg_tutorials", null ],
          [ "ros .msg files", "idl_rosmsg.html#ros_msg_files", null ],
          [ "ROS Types in YARP: writing a portable", "rostypes_tutorial_portable.html", [
            [ "Introduction", "rostypes_tutorial_portable.html#rostypes_intro", null ],
            [ "ROS definition for SharedData", "rostypes_tutorial_portable.html#rostypes_ros_defintion", null ],
            [ "Code", "rostypes_tutorial_portable.html#rostypes_code", null ],
            [ "Using CMake", "rostypes_tutorial_portable.html#rostypes_using_cmake", null ],
            [ "Related Tutorials", "rostypes_tutorial_portable.html#rostypes_related_tutorials", null ]
          ] ],
          [ "ROS Types in YARP: sending data to ROS", "rostypes_tutorial_continued.html", [
            [ "Making the sender program ROS-compatible", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_sender", null ],
            [ "Registering with ROS", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_visible", null ],
            [ "Making the .msg file available to ROS", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_msg", null ]
          ] ]
        ] ]
      ] ],
      [ "Using YARP with ROS", "yarp_with_ros.html", [
        [ "Configure YARP to use ROS", "yarp_with_ros_configure.html", null ],
        [ "Decide on what name server to use", "yarp_with_ros_nameservers.html", [
          [ "Using YARP with roscore only", "yarp_with_ros_nameservers.html#yarp_with_ros_roscore_only", null ],
          [ "Configuring YARP clients to use two nameservers independently", "yarp_with_ros_nameservers.html#yarp_with_ros_roscore_added", null ]
        ] ],
        [ "Writing code to talk to ROS topics", "yarp_with_ros_writing_code_topics.html", [
          [ "ROS Types in YARP: writing a portable", "rostypes_tutorial_portable.html", [
            [ "Introduction", "rostypes_tutorial_portable.html#rostypes_intro", null ],
            [ "ROS definition for SharedData", "rostypes_tutorial_portable.html#rostypes_ros_defintion", null ],
            [ "Code", "rostypes_tutorial_portable.html#rostypes_code", null ],
            [ "Using CMake", "rostypes_tutorial_portable.html#rostypes_using_cmake", null ],
            [ "Related Tutorials", "rostypes_tutorial_portable.html#rostypes_related_tutorials", null ]
          ] ],
          [ "ROS Types in YARP: sending data to ROS", "rostypes_tutorial_continued.html", [
            [ "Making the sender program ROS-compatible", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_sender", null ],
            [ "Registering with ROS", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_visible", null ],
            [ "Making the .msg file available to ROS", "rostypes_tutorial_continued.html#rostypes_tutorial_continued_msg", null ]
          ] ]
        ] ],
        [ "Use YARP to talk to ROS services", "yarp_with_ros_services.html", null ],
        [ "Talking to the ROS parameter server", "yarp_with_ros_parameters.html", null ],
        [ "Use ROS with existing YARP programs", "yarp_with_ros_existing_yarp_ports.html", [
          [ "Decide what to do about types", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_name_types", null ],
          [ "Reading ROS topics", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_read_topic", null ],
          [ "Publishing to ROS topics", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_publish_topic", null ],
          [ "An important note on making connections", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_making_connections", null ],
          [ "Reading existing YARP ports from ROS", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_existing", null ],
          [ "How to configure Ports to talk to ROS", "yarp_with_ros_existing_yarp_ports.html#yarp_with_ros_configuring_ports", null ]
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
      [ "Tutorials", "yarp-tutorials.html", [
        [ "Yarp Tutorials", "yarp-tutorials.html#YARPTutorials", null ],
        [ "Using YARP and CMake in your projects:", "yarp-tutorials.html#tutorial_cmake", null ],
        [ "Using YARP ports for communication:", "yarp-tutorials.html#tutorial_ports", null ],
        [ "Make sure you understand how to control YARP buffering policies the life-cycle of messages:", "yarp-tutorials.html#tutorial_buffering", null ],
        [ "How to write a standard module, search and install configuration files:", "yarp-tutorials.html#tutorial_rfmodule", null ],
        [ "ROS types in YARP:", "yarp-tutorials.html#tutorial_rostypes", null ],
        [ "Using the Thrift IDL to define data types and interfaces:", "yarp-tutorials.html#tutorial_thrift", null ],
        [ "Using YARP devices:", "yarp-tutorials.html#tutorial_devices", null ],
        [ "More software tutorials:", "yarp-tutorials.html#tutorial_other", null ],
        [ "Communication protocol details:", "yarp-tutorials.html#tutorial_protocols", null ],
        [ "YARP implementation:", "yarp-tutorials.html#tutorial_implementations", null ],
        [ "Yarp GUIs/Apps Tutorials", "yarp-tutorials.html#YarpGUIsTutorials", null ]
      ] ],
      [ "Robot Testing Framework (and plugins)", "robottestingframework_plugins.html", [
        [ "Compilation and installation", "robottestingframework_plugins.html#autotoc_md55", null ],
        [ "Available plugins", "robottestingframework_plugins.html#autotoc_md56", null ]
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
        [ "documentation", "writing_documentation.html#code", null ],
        [ "docuemtnation", "writing_documentation.html#non-code", null ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
        [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md953", [
          [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md954", [
            [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md955", null ],
            [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md956", null ]
          ] ],
          [ "New Features", "v3_8_0.html#autotoc_md957", [
            [ "Libraries", "v3_8_0.html#autotoc_md958", [
              [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md959", null ],
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md960", null ],
              [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md961", null ],
              [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md962", null ],
              [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md963", null ],
              [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md964", null ]
            ] ],
            [ "Devices", "v3_8_0.html#autotoc_md965", [
              [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md966", null ],
              [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md967", null ],
              [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md968", null ]
            ] ],
            [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md969", null ],
            [ "Extern", "v3_8_0.html#autotoc_md970", [
              [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md971", null ],
              [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md972", null ]
            ] ],
            [ "GUIs", "v3_8_0.html#autotoc_md973", [
              [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md974", null ],
              [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md975", null ]
            ] ],
            [ "YCM", "v3_8_0.html#autotoc_md976", null ],
            [ "Other", "v3_8_0.html#autotoc_md977", null ],
            [ "Portmonitors", "v3_8_0.html#autotoc_md978", [
              [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md979", null ]
            ] ]
          ] ],
          [ "Bug Fixes", "v3_8_0.html#autotoc_md980", [
            [ "bindings", "v3_8_0.html#autotoc_md981", null ],
            [ "devices", "v3_8_0.html#autotoc_md982", [
              [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md983", null ],
              [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md984", null ],
              [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md985", null ],
              [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md986", null ],
              [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md987", null ],
              [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md988", null ]
            ] ],
            [ "Tools", "v3_8_0.html#autotoc_md989", [
              [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md990", null ],
              [ "Yarp companion", "v3_8_0.html#autotoc_md991", null ]
            ] ],
            [ "Integration Tests", "v3_8_0.html#autotoc_md992", null ]
          ] ],
          [ "Contributors", "v3_8_0.html#autotoc_md993", null ]
        ] ]
      ] ],
      [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
        [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md994", [
          [ "Bug Fixes", "v3_8_1.html#autotoc_md995", [
            [ "tools", "v3_8_1.html#autotoc_md996", [
              [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md997", null ]
            ] ],
            [ "devices", "v3_8_1.html#autotoc_md998", [
              [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md999", null ],
              [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1000", null ],
              [ "opencv_grabber", "v3_8_1.html#autotoc_md1001", null ]
            ] ]
          ] ],
          [ "Contributors", "v3_8_1.html#autotoc_md1002", null ]
        ] ]
      ] ],
      [ "YARP ChangeLog", "changelog.html", [
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
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md945", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md946", [
              [ "Documentation", "v3_7_2.html#autotoc_md947", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md948", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md949", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md950", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md951", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md952", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md936", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md937", [
              [ "CMake", "v3_7_1.html#autotoc_md938", null ],
              [ "Devices", "v3_7_1.html#autotoc_md939", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md940", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md941", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md942", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md943", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md944", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md911", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md912", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md913", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md914", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md915", [
              [ "Libraries", "v3_7_0.html#autotoc_md916", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md917", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md920", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md921", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md922", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md923", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md924", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md925", null ],
              [ "Tools", "v3_7_0.html#autotoc_md926", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md927", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md928", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md929", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md930", [
              [ "Catch2", "v3_7_0.html#autotoc_md931", null ],
              [ "CMake", "v3_7_0.html#autotoc_md932", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md933", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md934", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md935", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md854", [
            [ "Important Changes", "v3_6_0.html#autotoc_md855", [
              [ "Dependencies", "v3_6_0.html#autotoc_md856", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md857", [
              [ "Devices", "v3_6_0.html#autotoc_md858", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md859", [
              [ "Libraries", "v3_6_0.html#autotoc_md860", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md861", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md862", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md868", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md869", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md879", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md880", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md881", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md882", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md883", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md884", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md885", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md886", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md887", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md888", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md889", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md890", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md891", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md892", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md893", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md894", null ],
              [ "Tools", "v3_6_0.html#autotoc_md895", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md896", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md897", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md898", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md899", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md900", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md901", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md902", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md903", [
              [ "Build System", "v3_6_0.html#autotoc_md904", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md905", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md906", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md907", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md908", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md909", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md910", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md808", [
            [ "New Features", "v3_5_1.html#autotoc_md809", [
              [ "Libraries", "v3_5_1.html#autotoc_md810", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md811", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md812", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md813", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md814", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md818", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md819", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md820", null ],
              [ "Devices", "v3_5_1.html#autotoc_md821", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md822", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md823", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md824", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md825", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md826", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md827", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md828", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md829", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md830", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md831", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md832", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md833", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md834", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md835", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md836", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md837", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md838", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md839", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md840", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md841", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md842", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md843", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md844", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md845", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md846", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md847", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md848", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md849", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md850", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md851", [
                [ "Python", "v3_5_1.html#autotoc_md852", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md853", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md706", [
            [ "Important Changes", "v3_5_0.html#autotoc_md707", [
              [ "Dependencies", "v3_5_0.html#autotoc_md708", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md709", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md710", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md712", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md713", [
              [ "Libraries", "v3_5_0.html#autotoc_md714", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md715", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md716", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md728", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md730", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md733", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md734", null ],
              [ "Devices", "v3_5_0.html#autotoc_md735", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md736", [
              [ "Libraries", "v3_5_0.html#autotoc_md737", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md738", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md739", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md740", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md750", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md756", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md765", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md767", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md768", null ],
              [ "Devices", "v3_5_0.html#autotoc_md769", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md770", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md771", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md772", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md773", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md774", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md775", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md776", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md777", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md778", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md779", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md780", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md781", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md782", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md783", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md784", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md785", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md786", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md787", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md788", [
              [ "Carriers", "v3_5_0.html#autotoc_md789", null ],
              [ "Devices", "v3_5_0.html#autotoc_md790", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md791", [
                [ "Python", "v3_5_0.html#autotoc_md792", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md793", [
              [ "Libraries", "v3_5_0.html#autotoc_md794", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md795", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md798", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md799", null ],
              [ "Devices", "v3_5_0.html#autotoc_md800", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md801", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md802", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md803", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md804", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md805", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md806", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md807", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md691", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md692", null ],
            [ "Build System", "v3_4_6.html#autotoc_md693", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md694", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md695", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md696", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md697", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md698", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md699", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md700", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md701", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md702", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md703", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md704", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md705", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md683", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md684", [
              [ "Libraries", "v3_4_5.html#autotoc_md685", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md686", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md688", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md689", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md690", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md672", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md673", [
              [ "Build System", "v3_4_4.html#autotoc_md674", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md675", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md676", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md677", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md678", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md679", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md680", [
                [ "Python", "v3_4_4.html#autotoc_md681", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md682", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md661", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md662", [
              [ "Libraries", "v3_4_3.html#autotoc_md663", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md664", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md665", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md666", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md667", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md668", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md669", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md670", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md671", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md640", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md641", [
              [ "Build System", "v3_4_2.html#autotoc_md642", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md643", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md644", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md646", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md647", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md650", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md651", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md652", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md653", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md654", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md655", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md656", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md657", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md658", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md659", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md660", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md622", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md623", [
              [ "Build System", "v3_4_1.html#autotoc_md624", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md625", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md626", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md628", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md630", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md631", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md632", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md633", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md634", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md635", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md636", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md637", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md638", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md639", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md547", [
            [ "Important Changes", "v3_4_0.html#autotoc_md548", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md549", [
              [ "Build System", "v3_4_0.html#autotoc_md550", [
                [ "os", "v3_4_0.html#autotoc_md552", null ],
                [ "dev", "v3_4_0.html#autotoc_md559", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md560", null ],
              [ "Tools", "v3_4_0.html#autotoc_md561", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md563", [
              [ "Build System", "v3_4_0.html#autotoc_md564", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md567", [
                [ "conf", "v3_4_0.html#autotoc_md568", null ],
                [ "os", "v3_4_0.html#autotoc_md569", null ],
                [ "sig", "v3_4_0.html#autotoc_md577", null ],
                [ "math", "v3_4_0.html#autotoc_md580", null ],
                [ "dev", "v3_4_0.html#autotoc_md581", null ],
                [ "logger", "v3_4_0.html#autotoc_md582", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md583", null ],
              [ "Devices", "v3_4_0.html#autotoc_md584", null ],
              [ "Tools", "v3_4_0.html#autotoc_md599", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md602", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md608", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md609", [
              [ "Libraries", "v3_4_0.html#autotoc_md610", [
                [ "os", "v3_4_0.html#autotoc_md611", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md612", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md613", null ],
              [ "Devices", "v3_4_0.html#autotoc_md614", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md615", [
              [ "Libraries", "v3_4_0.html#autotoc_md616", [
                [ "os", "v3_4_0.html#autotoc_md617", null ],
                [ "sig", "v3_4_0.html#autotoc_md619", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md621", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md528", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md529", [
              [ "Build System", "v3_3_3.html#autotoc_md530", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md531", [
                [ "os", "v3_3_3.html#autotoc_md532", null ],
                [ "dev", "v3_3_3.html#autotoc_md536", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md537", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md544", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md546", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md521", [
            [ "Contributors", "v3_3_2.html#autotoc_md527", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md508", [
            [ "Important Changes", "v3_3_1.html#autotoc_md509", [
              [ "Dependencies", "v3_3_1.html#autotoc_md510", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md511", [
              [ "Libraries", "v3_3_1.html#autotoc_md512", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md513", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md514", [
                [ "grabberDual", "v3_3_1.html#autotoc_md515", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md516", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md517", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md518", [
                [ "Perl", "v3_3_1.html#autotoc_md519", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md520", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md483", [
            [ "Important Changes", "v3_3_0.html#autotoc_md484", [
              [ "Dependencies", "v3_3_0.html#autotoc_md485", null ],
              [ "Build System", "v3_3_0.html#autotoc_md486", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md487", [
                [ "YARP_os", "v3_3_0.html#autotoc_md488", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md489", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md490", [
              [ "Build System", "v3_3_0.html#autotoc_md491", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md492", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md493", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md494", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md495", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md496", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md497", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md500", null ],
              [ "devices", "v3_3_0.html#autotoc_md502", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md503", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md507", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md474", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md475", [
              [ "Build System", "v3_2_2.html#autotoc_md476", null ],
              [ "Devices", "v3_2_2.html#autotoc_md477", null ],
              [ "Tools", "v3_2_2.html#autotoc_md480", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md482", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md461", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md462", [
              [ "Carriers", "v3_2_1.html#autotoc_md463", null ],
              [ "Devices", "v3_2_1.html#autotoc_md465", null ],
              [ "Tools", "v3_2_1.html#autotoc_md467", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md470", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md473", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md451", [
            [ "Important Changes", "v3_2_0.html#autotoc_md452", [
              [ "Dependencies", "v3_2_0.html#autotoc_md453", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md454", null ],
              [ "Devices", "v3_2_0.html#autotoc_md455", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md456", [
              [ "Build System", "v3_2_0.html#autotoc_md457", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md458", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md459", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md460", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md443", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md444", [
              [ "CMake", "v3_1_2.html#autotoc_md445", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md446", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md447", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md448", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md449", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md450", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md421", [
            [ "New Features", "v3_1_1.html#autotoc_md422", [
              [ "Build System", "v3_1_1.html#autotoc_md423", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md424", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md425", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md426", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md427", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md428", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md429", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md430", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md431", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md432", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md433", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md434", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md435", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md436", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md437", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md438", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md439", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md440", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md441", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md442", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md406", [
            [ "New Features", "v3_1_0.html#autotoc_md407", [
              [ "Libraries", "v3_1_0.html#autotoc_md408", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md409", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md410", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md411", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md412", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md413", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md414", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md415", [
                [ "yarp", "v3_1_0.html#autotoc_md416", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md417", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md418", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md419", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md420", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md378", [
            [ "Important Changes", "v3_0_1.html#autotoc_md379", null ],
            [ "New Features", "v3_0_1.html#autotoc_md381", [
              [ "Libraries", "v3_0_1.html#autotoc_md382", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md383", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md384", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md385", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md386", [
              [ "Build System", "v3_0_1.html#autotoc_md387", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md388", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md389", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md390", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md391", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md392", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md393", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md394", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md395", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md396", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md397", [
                [ "yarpscope", "v3_0_1.html#autotoc_md398", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md399", [
                [ "rplidar2", "v3_0_1.html#autotoc_md400", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md401", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md402", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md403", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md404", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md405", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md342", [
            [ "Important Changes", "v3_0_0.html#autotoc_md343", [
              [ "Build System", "v3_0_0.html#autotoc_md344", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md345", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md346", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md347", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md348", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md349", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md350", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md351", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md352", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md353", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md354", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md355", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md356", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md357", [
              [ "Build System", "v3_0_0.html#autotoc_md358", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md359", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md360", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md361", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md362", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md363", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md364", null ],
              [ "Tools", "v3_0_0.html#autotoc_md365", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md366", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md367", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md368", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md369", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md370", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md371", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md372", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md373", [
              [ "Libraries", "v3_0_0.html#autotoc_md374", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md375", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md376", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md377", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md320", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md321", [
              [ "Build System", "v2_3_72_1.html#autotoc_md322", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md323", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md324", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md325", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md326", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md327", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md328", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md329", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md330", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md331", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md332", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md333", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md334", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md335", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md336", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md337", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md338", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md339", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md293", [
            [ "Important Changes", "v2_3_72.html#autotoc_md294", [
              [ "Libraries", "v2_3_72.html#autotoc_md295", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md296", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md297", [
              [ "Libraries", "v2_3_72.html#autotoc_md298", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md299", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md300", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md301", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md302", null ],
              [ "Devices", "v2_3_72.html#autotoc_md303", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md304", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md305", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md306", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md307", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md308", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md309", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md310", [
                [ "Java", "v2_3_72.html#autotoc_md311", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md312", [
              [ "Libraries", "v2_3_72.html#autotoc_md313", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md314", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md315", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md316", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md317", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md318", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md319", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md280", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md281", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md282", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md283", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md284", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md285", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md286", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md287", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md288", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md289", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md290", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md291", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md292", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md268", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md269", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md270", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md271", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md272", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md273", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md274", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md275", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md276", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md277", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md278", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md279", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md219", [
            [ "Important Changes", "v2_3_70.html#autotoc_md220", [
              [ "System Configuration", "v2_3_70.html#autotoc_md221", null ],
              [ "Build System", "v2_3_70.html#autotoc_md222", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md223", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md224", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md225", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md226", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md227", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md228", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md229", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md230", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md231", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md232", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md233", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md234", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md235", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md236", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md237", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md238", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md239", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md240", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md241", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md242", null ],
              [ "Devices", "v2_3_70.html#autotoc_md243", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md244", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md247", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md248", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md249", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md250", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md251", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md252", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md253", [
              [ "Libraries", "v2_3_70.html#autotoc_md254", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md255", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md256", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md257", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md258", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md259", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md260", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md261", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md262", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md263", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md265", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md266", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md267", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md181", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md182", [
              [ "Build System", "v2_3_68_1.html#autotoc_md183", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md184", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md185", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md186", [
              [ "Build System", "v2_3_68_1.html#autotoc_md187", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md188", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md189", [
              [ "Build System", "v2_3_68_1.html#autotoc_md190", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md191", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md192", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md193", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md194", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md195", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md196", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md197", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md198", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md199", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md200", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md201", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md202", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md203", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md204", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md205", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md206", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md207", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md208", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md209", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md210", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md211", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md212", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md213", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md214", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md215", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md216", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md217", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md156", [
            [ "Important Changes", "v2_3_68.html#autotoc_md157", [
              [ "Dependencies", "v2_3_68.html#autotoc_md158", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md159", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md160", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md161", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md162", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md163", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md164", null ],
              [ "Tools", "v2_3_68.html#autotoc_md165", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md166", null ],
              [ "Devices", "v2_3_68.html#autotoc_md167", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md168", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md169", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md170", null ],
              [ "Devices", "v2_3_68.html#autotoc_md171", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md172", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md173", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md174", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md175", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md176", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md177", null ],
              [ "Devices", "v2_3_68.html#autotoc_md178", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md179", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md180", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md148", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md149", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md150", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md151", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md152", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md153", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md154", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md155", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md135", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md136", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md137", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md138", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md139", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md140", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md141", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md142", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md143", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md144", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md145", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md146", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md147", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md126", [
            [ "Important Changes", "v2_3_66.html#autotoc_md127", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md128", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md129", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md130", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md131", null ],
              [ "Modules", "v2_3_66.html#autotoc_md132", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md133", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md134", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md111", [
            [ "Important Changes", "v2_3_65.html#autotoc_md112", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md113", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md114", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md115", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md116", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md117", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md118", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md119", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md120", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md121", null ],
              [ "Devices", "v2_3_65.html#autotoc_md122", null ],
              [ "Tools", "v2_3_65.html#autotoc_md123", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md124", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md125", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md92", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md341", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md340", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md218", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md91", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md90", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md89", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md88", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md87", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md86", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md85", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md84", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md83", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md82", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md81", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md80", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md79", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md78", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md77", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md76", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md75", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md74", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md73", null ]
        ] ]
      ] ],
      [ "Changelog", "md_opt-modules_2yarp-device-ovrheadset_2CHANGELOG.html", [
        [ "[Unreleased]", "md_opt-modules_2yarp-device-ovrheadset_2CHANGELOG.html#autotoc_md1004", null ],
        [ "[1.0.0] - 2021-02-22", "md_opt-modules_2yarp-device-ovrheadset_2CHANGELOG.html#autotoc_md1005", [
          [ "Added", "md_opt-modules_2yarp-device-ovrheadset_2CHANGELOG.html#autotoc_md1006", null ]
        ] ]
      ] ],
      [ "README", "md_opt-modules_2yarp-device-ovrheadset_2README.html", [
        [ "yarp-device-ovrheadset", "md_opt-modules_2yarp-device-ovrheadset_2README.html#autotoc_md1007", [
          [ "License", "md_opt-modules_2yarp-device-ovrheadset_2README.html#autotoc_md1008", null ]
        ] ]
      ] ],
      [ "Changelog", "md_opt-modules_2yarp-device-pylon_2CHANGELOG.html", [
        [ "[Unreleased]", "md_opt-modules_2yarp-device-pylon_2CHANGELOG.html#autotoc_md1010", null ]
      ] ],
      [ "README", "md_opt-modules_2yarp-device-pylon_2README.html", [
        [ "yarp-device-pylon", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1011", [
          [ "# 1. License", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1012", null ]
        ] ],
        [ "2. How to use Basler pylon cameras as a YARP device", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1013", [
          [ "2.1. Dependencies", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1014", null ],
          [ "2.2. Build and install yarp-device-pylon", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1015", null ],
          [ "2.3. How to run pylonCamera driver", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1016", null ]
        ] ],
        [ "3. Device documentation", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1017", null ],
        [ "4. Informations for developers", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1018", [
          [ "Maintainers", "md_opt-modules_2yarp-device-pylon_2README.html#autotoc_md1019", null ]
        ] ]
      ] ],
      [ "Changelog", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html", [
        [ "[Unreleased]", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1021", null ],
        [ "[0.3.0] - 2023-07-11", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1022", [
          [ "Added", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1023", null ],
          [ "Changed", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1024", null ]
        ] ],
        [ "[0.2.0] - 2021-05-28", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1025", [
          [ "Added", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1026", null ]
        ] ],
        [ "[0.1.0] - 2021-04-27", "md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1027", null ]
      ] ],
      [ "README", "md_opt-modules_2yarp-device-realsense2_2README.html", [
        [ "yarp-device-realsense2", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1028", [
          [ "License", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1029", null ],
          [ "How to use Intel RealSense cameras as a YARP device", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1030", [
            [ "Dependencies", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1031", null ],
            [ "Configure YARP", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1032", null ],
            [ "Build and install yarp-device-realsense2", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1033", null ],
            [ "How to use a RealSense D435", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1034", [
              [ "As <tt>yarpmanager</tt> application", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1035", null ],
              [ "From the command line", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1036", null ]
            ] ],
            [ "How to use a RealSense D405", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1037", null ],
            [ "How to use a RealSense D435i", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1038", null ],
            [ "How to use a RealSense T256", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1039", [
              [ "From the command line", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1040", null ]
            ] ]
          ] ],
          [ "Device documentation", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1041", null ],
          [ "Maintainers", "md_opt-modules_2yarp-device-realsense2_2README.html#autotoc_md1042", null ]
        ] ]
      ] ],
      [ "yarp-device-rplidar <img src=\"https://raw.githubusercontent.com/robotology/yarp/master/doc/images/yarp-robot-24.png\" alt=\"YARP logo\" title=\"yarp-device-rplidar\"/>", "md_opt-modules_2yarp-device-rplidar_2README.html", [
        [ "NB: This repo is currently under development.", "md_opt-modules_2yarp-device-rplidar_2README.html#autotoc_md1043", null ],
        [ "Maintainers", "md_opt-modules_2yarp-device-rplidar_2README.html#autotoc_md1044", null ]
      ] ],
      [ "README", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html", [
        [ "Yarp device for Whisper", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1045", [
          [ "Documentation", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1046", null ],
          [ "Installation", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1047", [
            [ "Step1: Build whisper.cpp library", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1048", null ],
            [ "Step 2: Build the yarp device", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1049", null ],
            [ "Step 3: Install the model(s)", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1050", null ]
          ] ],
          [ "Usage", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1051", null ],
          [ "CI Status", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1052", null ],
          [ "License", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1053", null ],
          [ "Maintainers", "md_opt-modules_2yarp-device-speechTranscription-whisper_2README.html#autotoc_md1054", null ]
        ] ]
      ] ],
      [ "README", "md_opt-modules_2yarp-device-template_2README.html", [
        [ "Yarp device for xxx", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1055", [
          [ "Documentation", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1056", null ],
          [ "Installation", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1057", [
            [ "Build with pure CMake commands", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1058", null ]
          ] ],
          [ "CI Status", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1059", null ],
          [ "License", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1060", null ],
          [ "Maintainers", "md_opt-modules_2yarp-device-template_2README.html#autotoc_md1061", null ]
        ] ]
      ] ],
      [ "1. OBSOLETE", "md_opt-modules_2yarp-device-ultrapython_2OBSOLETE.html", [
        [ "1.1. Merello test", "md_opt-modules_2yarp-device-ultrapython_2OBSOLETE.html#autotoc_md1063", null ]
      ] ],
      [ "1. ULTRAPYTHON CAMERA SYSTEM", "md_opt-modules_2yarp-device-ultrapython_2README.html", [
        [ "1.1. Naming", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1065", null ],
        [ "1.2. MOUNTING", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1066", null ],
        [ "1.3. Experimental setup", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1067", null ],
        [ "1.4. ACCESS", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1068", [
          [ "1.4.1. IP address", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1069", null ]
        ] ],
        [ "1.5. SERIAL ACCESS", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1070", null ],
        [ "1.6. GIVE INTERNET ACCESS to Enlustra via Shorewall", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1071", null ],
        [ "2. yarpdev for the UltraPython camera", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1072", [
          [ "2.1. Ultrapython UI", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1073", null ],
          [ "2.2. WIP - UltraPython Command Line Interface", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1074", null ],
          [ "2.3. The .ini files", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1075", null ],
          [ "2.4. Reading the log on console", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1076", null ]
        ] ],
        [ "3. UltraPython specifications for yarpdev", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1077", [
          [ "3.1. Resolution", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1078", null ],
          [ "3.2. Colour space", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1079", null ],
          [ "3.3. Kernel modules", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1080", null ],
          [ "3.4. Device", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1081", null ],
          [ "3.5. yarpdev parameters for the UltraPython", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1082", null ],
          [ "3.6. YARP-V4L feature that can be used together with the UltraPython", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1083", null ],
          [ "3.7. How programmatially set YARP-V4L feature", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1084", null ],
          [ "3.8. FPS (frame per seconds)", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1085", [
            [ "3.8.1. Avoid FPS oscillations", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1086", null ]
          ] ]
        ] ],
        [ "4. The Ultrapython device", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1087", [
          [ "4.1. Device location", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1088", null ],
          [ "4.2. Device architecture", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1089", null ],
          [ "4.3. Image buffer memory usage", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1090", null ],
          [ "4.4. Prerequisite before compilation", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1091", null ],
          [ "4.5. How to compile PytonCamera device", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1092", null ],
          [ "4.6. Compile also the UI", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1093", null ],
          [ "4.7. Code formatting and naming convention", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1094", null ],
          [ "4.8. Unit test", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1095", null ],
          [ "4.9. Development environment", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1096", null ]
        ] ],
        [ "5. Using UltraPython with a prebuild Docker", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1097", null ],
        [ "6. Testing the video stream", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1098", null ],
        [ "7. Useful", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1099", null ],
        [ "8. Ubuntu SD card creation for Enclustra", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1100", null ],
        [ "9. OBSOLETE", "md_opt-modules_2yarp-device-ultrapython_2README.html#autotoc_md1101", null ]
      ] ],
      [ "1. Ubuntu SD card creation for Enclustra", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html", [
        [ "1.1. Download and flash", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1103", null ],
        [ "1.2. Override Ubuntu Kernel", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1104", null ],
        [ "1.3. Delete locked password", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1105", null ],
        [ "1.4. Network config", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1106", null ],
        [ "1.5. Generate ssh key for root access on Enclustra", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1107", null ],
        [ "1.6. Missing package", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1108", null ],
        [ "1.7. Others", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1109", null ],
        [ "1.8. YARP", "md_opt-modules_2yarp-device-ultrapython_2SDSETUP.html#autotoc_md1110", null ]
      ] ],
      [ "1. Testing the video stream", "md_opt-modules_2yarp-device-ultrapython_2TESTING.html", [
        [ "1.1. Slow movement artifact", "md_opt-modules_2yarp-device-ultrapython_2TESTING.html#autotoc_md1112", null ],
        [ "1.2. Frames per second (FPS)", "md_opt-modules_2yarp-device-ultrapython_2TESTING.html#autotoc_md1113", null ],
        [ "1.3. Latency", "md_opt-modules_2yarp-device-ultrapython_2TESTING.html#autotoc_md1114", null ]
      ] ],
      [ "1. Useful", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html", [
        [ "1.1. V4L bash interface", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html#autotoc_md1116", null ],
        [ "1.2. Password and users", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html#autotoc_md1117", null ],
        [ "1.3. Filesystem", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html#autotoc_md1118", null ],
        [ "1.4. Yarp bash command", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html#autotoc_md1119", null ],
        [ "1.5. Certificates", "md_opt-modules_2yarp-device-ultrapython_2USEFUL.html#autotoc_md1120", null ]
      ] ],
      [ "<tt>yarp-device-vicon-bridge</tt>", "md_opt-modules_2yarp-device-vicon-bridge_2README.html", [
        [ "Maintainers", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1122", null ],
        [ "Description", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1123", null ],
        [ "Dependencies", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1124", null ],
        [ "Installation", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1125", [
          [ "Linux", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1126", null ],
          [ "Windows", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1127", null ]
        ] ],
        [ "How to run the <tt>yarp-vicon-bridge</tt>", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1128", [
          [ "Using the Vicon setup", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1129", null ],
          [ "Using the Vicon setup and R1", "md_opt-modules_2yarp-device-vicon-bridge_2README.html#autotoc_md1130", null ]
        ] ]
      ] ],
      [ "Changelog", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html", [
        [ "[Unreleased]", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1132", null ],
        [ "[0.2.2] - 2022-11-17", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1133", null ],
        [ "[0.2.1] - 2022-09-28", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1134", null ],
        [ "[0.2.0] - 2022-05-30", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1135", null ],
        [ "[0.1.1] - 2021-03-26", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1136", null ],
        [ "[0.1.0] - 2020-01-21", "md_opt-modules_2yarp-device-xsensmt_2CHANGELOG.html#autotoc_md1137", null ]
      ] ],
      [ "yarp-device-xsensmt", "md_opt-modules_2yarp-device-xsensmt_2README.html", [
        [ "Rationale", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1139", null ],
        [ "Installation", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1140", [
          [ "Dependencies", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1141", null ],
          [ "Step-by-step installation", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1142", null ]
        ] ],
        [ "Device use", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1143", [
          [ "Via <tt>multipleanalogsensorsserver</tt>", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1144", null ],
          [ "Via <tt>inertial</tt> network device (Deprecated)", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1145", null ],
          [ "Parameters", "md_opt-modules_2yarp-device-xsensmt_2README.html#autotoc_md1146", null ]
        ] ]
      ] ],
      [ "forcetorque-yarp-devices", "md_opt-modules_2yarp-devices-forcetorque_2README.html", [
        [ "Rationale", "md_opt-modules_2yarp-devices-forcetorque_2README.html#autotoc_md1148", null ],
        [ "Installation", "md_opt-modules_2yarp-devices-forcetorque_2README.html#autotoc_md1149", null ],
        [ "Maintainers", "md_opt-modules_2yarp-devices-forcetorque_2README.html#autotoc_md1153", null ]
      ] ],
      [ "Changelog", "md_opt-modules_2yarp-devices-haptic_2CHANGELOG.html", [
        [ "[Unreleased]", "md_opt-modules_2yarp-devices-haptic_2CHANGELOG.html#autotoc_md1155", [
          [ "Changed", "md_opt-modules_2yarp-devices-haptic_2CHANGELOG.html#autotoc_md1156", null ],
          [ "Removed", "md_opt-modules_2yarp-devices-haptic_2CHANGELOG.html#autotoc_md1157", null ]
        ] ],
        [ "[1.0.0] - 2017-06-22", "md_opt-modules_2yarp-devices-haptic_2CHANGELOG.html#autotoc_md1158", null ]
      ] ],
      [ "Generic YARP Driver for Haptic Devices", "md_opt-modules_2yarp-devices-haptic_2README.html", [
        [ "Installation of Physical Drivers", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1159", null ],
        [ "Compiling and Installing the YARP plugins", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1162", null ],
        [ "Running the YARP plugins", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1163", null ],
        [ "Connecting to the YARP driver", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1164", null ],
        [ "<a href=\"/examples\" >Client Examples</a>", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1166", null ],
        [ "@ref \"/.github/CONTRIBUTING.md\" \"Guidelines for contributing\"", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1167", null ],
        [ "Authors", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1168", null ],
        [ "License", "md_opt-modules_2yarp-devices-haptic_2README.html#autotoc_md1169", null ]
      ] ],
      [ "README", "md_opt-modules_2yarp-devices-llm_2README.html", [
        [ "Yarp devices for Large Language Models", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1170", [
          [ "Documentation", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1171", null ],
          [ "Prerequisites", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1172", null ],
          [ "Installation", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1175", [
            [ "Build with pure CMake commands", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1176", null ],
            [ "Docker", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1177", null ]
          ] ],
          [ "Configuration", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1178", null ],
          [ "Usage", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1179", null ],
          [ "CI Status", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1180", null ],
          [ "License", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1181", null ],
          [ "Maintainers", "md_opt-modules_2yarp-devices-llm_2README.html#autotoc_md1182", null ]
        ] ]
      ] ],
      [ "README", "md_opt-modules_2yarp-devices-ros2_2README.html", [
        [ "Yarp devices for ROS2", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1183", [
          [ "Documentation", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1184", null ],
          [ "Installation", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1185", [
            [ "Build with ROS msgs compiled in separate colcon workspace", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1186", null ],
            [ "Build with pure CMake commands", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1187", null ]
          ] ],
          [ "CI Status", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1188", null ],
          [ "License", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1189", null ],
          [ "Maintainers", "md_opt-modules_2yarp-devices-ros2_2README.html#autotoc_md1190", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1191", [
          [ "C++", "contributing.html#autotoc_md1192", [
            [ "Header guards", "contributing.html#autotoc_md1193", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1194", null ],
          [ "Git", "contributing.html#autotoc_md1195", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1196", [
          [ "Stable branches: <tt>yarp-3.x</tt>", "contributing.html#autotoc_md1197", null ],
          [ "Development branch: <tt>master</tt>", "contributing.html#autotoc_md1199", null ],
          [ "Example", "contributing.html#autotoc_md1200", null ],
          [ "Terminology", "contributing.html#autotoc_md1201", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1202", [
          [ "Deprecated Features", "contributing.html#autotoc_md1203", null ],
          [ "<tt>impl</tt> Classes", "contributing.html#autotoc_md1204", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1205", null ]
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
          [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
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
          [ "Enumerator", "functions_eval.html", null ],
          [ "Related Symbols", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", "globals_type" ],
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
"CameraVocabs_8h.html#abc0de903a8657c15337a0303175bf392",
"ControlBoard__nws__ros2_8cpp_source.html",
"FrameGrabberControls__Forwarder_8h.html",
"HumanStream_8h_source.html",
"IFrameTransformTest_8h.html#a7cd0ea659c7315b82784a1a0b8ef01ca",
"IPWMControl_8h.html#a526f828ee2a04d566da5cd7ce3764a80",
"Image_8copyPixels_8cpp.html#a472de4cbd08a516f388ac23e0b9526df",
"ImplementVelocityControl_8h_source.html",
"Log_8h.html#a7dc29554d6e64b301ebb2123c3900abc",
"MessageStack_8cpp_source.html",
"NameserCarrier_8cpp_source.html",
"Pcl_8h.html#ac538aec6837385595a8a65092f477f97",
"PortMonitor_8cpp_source.html",
"ResourceFinder_8cpp.html",
"SensorRPCData_8cpp.html",
"TemperatureRosPublisher_8cpp.html#a2475cb841cde50a73455edb82c13177d",
"Vector_8h.html#a481d1477eb5bc34b2331063c25464481",
"battery__nws__yarp_8h.html",
"classControlBoardWrapperImpedanceControl.html#adf56baf67f0cd5e377e01884fdbde15e",
"classFakeBatteryService.html#a70fb9f129446b60acb6e687f38fdfbf8",
"classFakeBatteryService__setBatteryCharge__helper.html#ad5292d092c44d4127af4f0c6e95006a4",
"classForwardingCarrier.html#a6a146ed419287e157a01ada44f19fd72",
"classFrameTransformStorageSetRPC__deleteTransformRPC__helper_1_1Reply.html#a993245f8a559b33aef64a3f45320b863",
"classILocalization2DMsgs__get__current__position2__RPC__helper_1_1Command.html#a5253b02346a194a2ad3dbcb145a25b63",
"classILocalization2DMsgs__stop__localization__service__RPC__helper_1_1Reply.html#a6ce9e6f371154d62a400e4b147e2d15a",
"classIMap2DMsgs__clear__map__temporary__flags__RPC__helper_1_1Command.html#ab32495aa1ccd3455f959686f61911153",
"classIMap2DMsgs__get__all__paths__RPC__helper_1_1Reply.html#a7b436cea5a29789123dffc5b8757b938",
"classIMap2DMsgs__get__paths__list__RPC__helper.html#a11f3c0047c4f62ea61e0df8968a96f3d",
"classIMap2DMsgs__rename__path__RPC__helper.html#a13a1d6545f72e7ad9ff297369c77354b",
"classIMap2DMsgs__store__map__RPC__helper_1_1Reply.html#abc55dea18e599b3dca5bb2a4235f2588",
"classINavigation2DMsgs__get__current__navigation__map__RPC__helper.html#aea5f1966e8026c098a656709e02a282b",
"classINavigation2DMsgs__goto__target__by__relative__location1__RPC__helper_1_1Command.html#a7cc259d54c2c2a9c358c0b6d4fbbf40f",
"classISerialMsgs.html#a2fa26fc950260a754596ccfe70c1a860",
"classMobileBaseVelocityControlRPC.html#a4daedaf9f0d0ae0b446df7971713cacc",
"classMpiStream.html#aebd6859f8144e21abc33476feba03247",
"classRFModuleRespondHandler.html#ae94551885d3fab3a3cea09168259b42d",
"classRgbdSensor__nwc__ros2.html#a95f2312612f5d7ec7a6019112fa8358e",
"classShmemInputStreamImpl.html#aeb6c79a5a7aeafaf06d4b99598ba817f",
"classTimerSingleton.html",
"classYarpRunCmdWithStdioInfo.html#ac6c72d3c56cdc6f51404ead26735be0f",
"classrealsense2Driver.html#aaf11c115260d5c42f4e2443d6b6ada09",
"classreturn__get__current__position1.html#aa99064ec69b468f2c5dcd660283e133d",
"classyarp_1_1dev_1_1AudioDeviceDriverSettings.html#a96e8e9272fe25b7588abd9e4e0a73004",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a1f3850216922c78267d494d56911fb4f",
"classyarp_1_1dev_1_1DriverCreatorOf.html#aed0b9a84682f1498a3d2b4d5cb542034",
"classyarp_1_1dev_1_1IJoypadController.html#a77b2ec97e3d04f835304830a59e87613",
"classyarp_1_1dev_1_1IVisualServoing.html#a92f087fbccc5bd60466c7bdb68f37bfe",
"classyarp_1_1dev_1_1ImplementEncodersTimed.html#a819382ae0a20b9bbf8638124c9b98ecc",
"classyarp_1_1dev_1_1ImplementPositionControl.html#a39e24d6e7d5a94bf74810f5465abcdef",
"classyarp_1_1dev_1_1LaserScan2D.html#a9236aa342339b5e930b97fb715cfe75a",
"classyarp_1_1dev_1_1Nav2D_1_1INavigation2DVelocityActions.html#a4342dddf538025ad3faed7486a7ebdc3",
"classyarp_1_1dev_1_1OdometryData.html#a8467855b09005cfa33c2bff1499cf565",
"classyarp_1_1dev_1_1StubImplEncodersRaw.html#aa0ead9dc773116fd6477800ed73e6437",
"classyarp_1_1dev_1_1impl_1_1jointData.html#ab3bc85de47aff3896624413593572bc1",
"classyarp_1_1manager_1_1Argument.html#ab5dd1efaefe6a9b7ae31896d5be04d03",
"classyarp_1_1manager_1_1Connection.html#a9ec9228d319ef93ac99aedf8e2712a1f",
"classyarp_1_1manager_1_1GPU.html",
"classyarp_1_1manager_1_1KnowledgeBase.html#a6b85338c8d5f684b1fa1f5dcc4eac65c",
"classyarp_1_1manager_1_1Manager.html#a6bd0fb6a854291224d1a387bddec302e",
"classyarp_1_1manager_1_1ModuleInterface.html#a364ed2959290b790d428bdbfd253aa00",
"classyarp_1_1manager_1_1Processor.html#a7e4622dbeef64c69f863b66f9841d4c2",
"classyarp_1_1manager_1_1XmlModLoader.html",
"classyarp_1_1math_1_1Quaternion.html#af662138206e98e4b98449898b241aebe",
"classyarp_1_1os_1_1AbstractCarrier.html#a8f6e1f04bd1bbb5abf34ffde0b241013",
"classyarp_1_1os_1_1CommandBottle.html#a33616533e478e41f5f3c18650e2e7973",
"classyarp_1_1os_1_1Contactable.html#a4183db36fe9a8e74b4741f91799b9ad0",
"classyarp_1_1os_1_1InputStream.html#af16c93d5feb0c765e2f5fb753adac7c7",
"classyarp_1_1os_1_1ModifyingCarrier.html#a74388ef0bd4e73662de83ea0d2e70394",
"classyarp_1_1os_1_1Node_1_1Helper.html#a112bab59c5a38800fc6c5a0b07790e71",
"classyarp_1_1os_1_1NullConnectionWriter.html#a62334b9d46bbc371eaddd2a160c4c5e3",
"classyarp_1_1os_1_1PortReaderBufferBase.html#acf27ebf027cb975657d1403456d111f1",
"classyarp_1_1os_1_1ResourceFinder.html#a97bcd43504bcaed7418ef297034761bf",
"classyarp_1_1os_1_1SharedLibraryClass.html#a9c2d9ca6eb134162ea783f38500be550",
"classyarp_1_1os_1_1SystemClock.html#ad5fba465106ea82a1ee037c72727cced",
"classyarp_1_1os_1_1Value.html#a0d8c0bc18d6f604c4a1ad1ca1c9473e0",
"classyarp_1_1os_1_1YarpPluginSelector.html#a5c1537cde10cb0d48ff9f840950647d8",
"classyarp_1_1os_1_1idl_1_1WireWriter.html#a6da37009ee4f4257a0b1fe90e1ccfd16",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#aecc0a0de9bbddb0ecebe2e8962205113",
"classyarp_1_1os_1_1impl_1_1HttpCarrier.html#a08141a64e524dec2aee9f39156ef04ec",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html#af5d0f208107d6f5e6f8b897a30f95991",
"classyarp_1_1os_1_1impl_1_1NameserTwoWayStream.html#ab8a60fd90a2a3a8201dece103e3fd5ec",
"classyarp_1_1os_1_1impl_1_1PortCoreInputUnit.html#adcf8e90e16aca5260844e90ffdc72cd9",
"classyarp_1_1os_1_1impl_1_1SocketTwoWayStream.html#a02bd238c2d6a69fac72a4af2daa7ce9b",
"classyarp_1_1os_1_1impl_1_1StoreFloat64.html#a54c8a6d13782b71cfb62dc3b5d72ff08",
"classyarp_1_1os_1_1impl_1_1StoreString.html#a1731c8d508288a91bda18bb0201fdd05",
"classyarp_1_1os_1_1impl_1_1ThreadImpl.html#a799347ec86dcd3da8bad4b5b193f6ab1",
"classyarp_1_1profiler_1_1graph_1_1GraphicVertex.html#a97187300fc560882834f19b50c2b09e7",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberOf__Forwarder.html",
"classyarp_1_1robotinterface_1_1Robot.html#a2f71f90f69158b5663cfb6af4417452f",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV1_1_1Private.html#a1b3ab5ab3d01c0a97e5e7d925e2d3a8b",
"classyarp_1_1rosmsg_1_1TickDuration.html#aaa1909668cba72a5e814006b0094f00f",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1KeyValue.html#a69afea3c14f656e3c82bf69e69aa6a85",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Inertia.html#ad1508c2f13c00b4446a8ec1170912df2",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Pose.html#aff71fb806450e62d7de4b1a72f5b6311",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Transform.html#a0d562d5d6b64019d0a58e327b06e95b1",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Vector3Stamped.html#a68639ef8d9d39f050d2e7b66f30d093b",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GridCells.html#adcb1ecf7867b797cc42361e4cae80451",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1ChannelFloat32.html#ad22dba25c0a00bbac5229b0450b30600",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1NavSatFix.html#a57ff3f3f63b8544196983069f64de0b1",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1SetCameraInfoReply.html#acce78d4216eaddbb1ab05ee27a8b47a9",
"classyarp_1_1rosmsg_1_1std__msgs_1_1ByteMultiArray.html#a6a0bec3717c4702f8b9e8b71a3018caf",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float64MultiArray.html#a23c541545e4d881ca10a9353eb3e65f6",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int64MultiArray.html#a8cec3b74457d2217027a8044239f0b00",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt16MultiArray.html#a067dad0c5202394e0382456c77b31cd7",
"classyarp_1_1rosmsg_1_1tf2__msgs_1_1FrameGraph.html#aa43675219fbebfb1bd20f8f99ac04314",
"classyarp_1_1rosmsg_1_1trajectory__msgs_1_1JointTrajectory.html#aebc6f93edfb31384b019c846d078ee79",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerControl.html#a47802a61f7ca41b2be7069b7ae254e14",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1Marker.html#a2bccc1eb0b9893e057b3ebe681794d1c",
"classyarp_1_1serversql_1_1impl_1_1NameServerContainer.html",
"classyarp_1_1serversql_1_1impl_1_1TripleSource.html#a8dc6540c878ddbd58946a98c98941124",
"classyarp_1_1wire__rep__utils_1_1BlobNetworkHeader.html#ae39274b2f17f3d837a99c931174e4313",
"classyarp_1_1yarpLogger_1_1LogEntryInfo.html#a424caf116c4207067d3fab7e51a060e6",
"contributing.html#autotoc_md1202",
"dir_3392c2f7c263932bb234a0c15bb7d724.html",
"dir_c312ceeb2e266668aad60fa80b89d145.html",
"fakeJoypad_8h.html",
"functions_vars.html",
"globals_t.html",
"imuBosch__BNO055_8h.html#adc8c5842ba168428e7e4044c879e3100",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h_source.html",
"md_opt-modules_2yarp-device-realsense2_2CHANGELOG.html#autotoc_md1021",
"namespaceactionlib__msgs.html#ada4ed7184949c3580c1977cf22fce592",
"namespaceyarp_1_1conf_1_1dirs.html#afe49616d0f2760ad403e812a4a444159",
"namespaceyarp_1_1manager.html#abb5f8a9d3a70e3d786e24fe491d698a1",
"namespaceyarp_1_1sig.html#a1b199e0b27d3a914a7e5a9ce38123e00",
"numeric_8h.html#a20d17340df91749730ea052a787c883f",
"return__get__area_8cpp.html",
"rpLidar_8cpp_source.html",
"std__msgs_2UInt16_8h_source.html",
"structTextureLogo_1_1Image.html",
"structyarp_1_1cv_1_1convert__code__from__cv_3_01yarp_1_1sig_1_1PixelHsv_01_4.html",
"structyarp_1_1os_1_1SharedLibraryClassApi.html#a9659660906bddb3a3b939ffab2137296",
"structyarp_1_1sig_1_1DataXYZ.html#ab423c6b0f16cade5303cd63e5af0a931",
"swigluarun_8h.html#a34250a0dcd450e0829b4f2099ea6efcb",
"thrift_editor.html",
"v2_3_68_1.html#autotoc_md185",
"v3_1_1.html#autotoc_md424",
"v3_5_0.html#autotoc_md774",
"visualization__msgs__InteractiveMarkerControl_8h.html#a1c0428e4a2c4a7537f8ae7de81f83766",
"yarp_2rosmsg_2geometry__msgs_2Point32_8h.html#ab2116dcbd9f96ddecc710c2863920852",
"yarp_2rosmsg_2std__msgs_2MultiArrayDimension_8h_source.html",
"yarp_environment.html#autotoc_md7"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';