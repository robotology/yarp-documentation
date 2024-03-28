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
          [ "Misc configuration", "yarp_environment.html#autotoc_md10", null ],
          [ "Other", "yarp_environment.html#autotoc_md11", null ],
          [ "Deprecated Environmental Variables", "yarp_environment.html#autotoc_md12", null ],
          [ "Build system", "yarp_environment.html#autotoc_md13", null ]
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
              [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md16", null ],
              [ "Configuration Files", "resource_finder_spec.html#autotoc_md17", null ],
              [ "Data directories contents", "resource_finder_spec.html#autotoc_md19", [
                [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md20", null ],
                [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md21", null ],
                [ "Application deployment files", "resource_finder_spec.html#autotoc_md22", null ]
              ] ],
              [ "Generation of the search path", "resource_finder_spec.html#autotoc_md23", null ],
              [ "3rd party packages", "resource_finder_spec.html#autotoc_md24", [
                [ "Installed packages", "resource_finder_spec.html#autotoc_md25", [
                  [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md26", null ],
                  [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md27", null ]
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
            [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md16", null ],
            [ "Configuration Files", "resource_finder_spec.html#autotoc_md17", null ],
            [ "Data directories contents", "resource_finder_spec.html#autotoc_md19", [
              [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md20", null ],
              [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md21", null ],
              [ "Application deployment files", "resource_finder_spec.html#autotoc_md22", null ]
            ] ],
            [ "Generation of the search path", "resource_finder_spec.html#autotoc_md23", null ],
            [ "3rd party packages", "resource_finder_spec.html#autotoc_md24", [
              [ "Installed packages", "resource_finder_spec.html#autotoc_md25", [
                [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md26", null ],
                [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md27", null ]
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
            [ "Using thrift client", "thrift_monitor.html#autotoc_md14", null ],
            [ "Using yarp rpc or custom clients", "thrift_monitor.html#autotoc_md15", null ]
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
        [ "Using the Thrift IDL to define data types and interfaces:", "yarp-tutorials.html#tutorial_thrift", null ],
        [ "Using YARP devices:", "yarp-tutorials.html#tutorial_devices", null ],
        [ "More software tutorials:", "yarp-tutorials.html#tutorial_other", null ],
        [ "Communication protocol details:", "yarp-tutorials.html#tutorial_protocols", null ],
        [ "YARP implementation:", "yarp-tutorials.html#tutorial_implementations", null ],
        [ "Yarp GUIs/Apps Tutorials", "yarp-tutorials.html#YarpGUIsTutorials", null ]
      ] ],
      [ "Robot Testing Framework (and plugins)", "robottestingframework_plugins.html", [
        [ "Compilation and installation", "robottestingframework_plugins.html#autotoc_md54", null ],
        [ "Available plugins", "robottestingframework_plugins.html#autotoc_md55", null ]
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
      [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
        [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md72", [
          [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md73", null ],
          [ "Deprecations and removals", "v3_10_0.html#autotoc_md74", null ],
          [ "Fixes", "v3_10_0.html#autotoc_md75", null ],
          [ "New Features", "v3_10_0.html#autotoc_md76", [
            [ "Devices", "v3_10_0.html#autotoc_md77", [
              [ "deviceBundler", "v3_10_0.html#autotoc_md78", null ]
            ] ]
          ] ]
        ] ]
      ] ],
      [ "YARP ChangeLog", "changelog.html", [
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
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1009", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1010", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1011", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1012", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1013", [
              [ "Docker", "v3_9_0.html#autotoc_md1014", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1015", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1016", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1017", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1018", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1019", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1020", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1021", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1022", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1023", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1024", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1025", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1026", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1027", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1000", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1001", [
              [ "tools", "v3_8_1.html#autotoc_md1002", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1003", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1004", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1005", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1006", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1007", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1008", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md959", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md960", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md961", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md962", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md963", [
              [ "Libraries", "v3_8_0.html#autotoc_md964", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md965", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md966", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md967", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md968", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md969", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md970", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md971", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md972", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md973", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md974", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md975", null ],
              [ "Extern", "v3_8_0.html#autotoc_md976", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md977", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md978", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md979", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md980", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md981", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md982", null ],
              [ "Other", "v3_8_0.html#autotoc_md983", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md984", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md985", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md986", [
              [ "bindings", "v3_8_0.html#autotoc_md987", null ],
              [ "devices", "v3_8_0.html#autotoc_md988", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md989", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md990", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md991", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md992", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md993", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md994", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md995", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md996", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md997", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md998", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md999", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md951", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md952", [
              [ "Documentation", "v3_7_2.html#autotoc_md953", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md954", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md955", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md956", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md957", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md958", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md942", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md943", [
              [ "CMake", "v3_7_1.html#autotoc_md944", null ],
              [ "Devices", "v3_7_1.html#autotoc_md945", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md946", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md947", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md948", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md949", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md950", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md917", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md918", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md919", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md920", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md921", [
              [ "Libraries", "v3_7_0.html#autotoc_md922", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md923", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md926", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md927", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md928", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md929", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md930", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md931", null ],
              [ "Tools", "v3_7_0.html#autotoc_md932", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md933", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md934", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md935", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md936", [
              [ "Catch2", "v3_7_0.html#autotoc_md937", null ],
              [ "CMake", "v3_7_0.html#autotoc_md938", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md939", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md940", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md941", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md860", [
            [ "Important Changes", "v3_6_0.html#autotoc_md861", [
              [ "Dependencies", "v3_6_0.html#autotoc_md862", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md863", [
              [ "Devices", "v3_6_0.html#autotoc_md864", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md865", [
              [ "Libraries", "v3_6_0.html#autotoc_md866", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md867", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md868", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md874", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md875", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md885", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md886", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md887", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md888", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md889", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md890", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md891", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md892", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md893", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md894", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md895", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md896", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md897", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md898", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md899", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md900", null ],
              [ "Tools", "v3_6_0.html#autotoc_md901", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md902", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md903", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md904", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md905", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md906", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md907", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md908", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md909", [
              [ "Build System", "v3_6_0.html#autotoc_md910", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md911", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md912", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md913", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md914", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md915", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md916", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md814", [
            [ "New Features", "v3_5_1.html#autotoc_md815", [
              [ "Libraries", "v3_5_1.html#autotoc_md816", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md817", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md818", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md819", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md820", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md824", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md825", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md826", null ],
              [ "Devices", "v3_5_1.html#autotoc_md827", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md828", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md829", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md830", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md831", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md832", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md833", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md834", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md835", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md836", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md837", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md838", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md839", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md840", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md841", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md842", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md843", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md844", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md845", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md846", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md847", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md848", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md849", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md850", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md851", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md852", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md853", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md854", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md855", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md856", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md857", [
                [ "Python", "v3_5_1.html#autotoc_md858", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md859", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md712", [
            [ "Important Changes", "v3_5_0.html#autotoc_md713", [
              [ "Dependencies", "v3_5_0.html#autotoc_md714", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md715", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md716", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md718", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md719", [
              [ "Libraries", "v3_5_0.html#autotoc_md720", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md721", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md722", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md734", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md736", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md739", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md740", null ],
              [ "Devices", "v3_5_0.html#autotoc_md741", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md742", [
              [ "Libraries", "v3_5_0.html#autotoc_md743", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md744", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md745", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md746", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md756", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md762", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md771", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md773", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md774", null ],
              [ "Devices", "v3_5_0.html#autotoc_md775", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md776", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md777", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md778", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md779", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md780", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md781", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md782", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md783", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md784", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md785", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md786", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md787", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md788", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md789", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md790", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md791", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md792", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md793", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md794", [
              [ "Carriers", "v3_5_0.html#autotoc_md795", null ],
              [ "Devices", "v3_5_0.html#autotoc_md796", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md797", [
                [ "Python", "v3_5_0.html#autotoc_md798", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md799", [
              [ "Libraries", "v3_5_0.html#autotoc_md800", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md801", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md804", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md805", null ],
              [ "Devices", "v3_5_0.html#autotoc_md806", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md807", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md808", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md809", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md810", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md811", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md812", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md813", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md697", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md698", null ],
            [ "Build System", "v3_4_6.html#autotoc_md699", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md700", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md701", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md702", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md703", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md704", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md705", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md706", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md707", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md708", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md709", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md710", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md711", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md689", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md690", [
              [ "Libraries", "v3_4_5.html#autotoc_md691", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md692", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md694", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md695", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md696", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md678", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md679", [
              [ "Build System", "v3_4_4.html#autotoc_md680", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md681", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md682", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md683", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md684", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md685", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md686", [
                [ "Python", "v3_4_4.html#autotoc_md687", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md688", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md667", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md668", [
              [ "Libraries", "v3_4_3.html#autotoc_md669", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md670", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md671", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md672", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md673", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md674", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md675", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md676", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md677", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md646", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md647", [
              [ "Build System", "v3_4_2.html#autotoc_md648", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md649", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md650", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md652", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md653", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md656", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md657", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md658", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md659", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md660", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md661", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md662", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md663", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md664", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md665", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md666", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md628", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md629", [
              [ "Build System", "v3_4_1.html#autotoc_md630", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md631", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md632", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md634", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md636", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md637", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md638", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md639", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md640", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md641", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md642", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md643", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md644", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md645", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md553", [
            [ "Important Changes", "v3_4_0.html#autotoc_md554", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md555", [
              [ "Build System", "v3_4_0.html#autotoc_md556", [
                [ "os", "v3_4_0.html#autotoc_md558", null ],
                [ "dev", "v3_4_0.html#autotoc_md565", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md566", null ],
              [ "Tools", "v3_4_0.html#autotoc_md567", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md569", [
              [ "Build System", "v3_4_0.html#autotoc_md570", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md573", [
                [ "conf", "v3_4_0.html#autotoc_md574", null ],
                [ "os", "v3_4_0.html#autotoc_md575", null ],
                [ "sig", "v3_4_0.html#autotoc_md583", null ],
                [ "math", "v3_4_0.html#autotoc_md586", null ],
                [ "dev", "v3_4_0.html#autotoc_md587", null ],
                [ "logger", "v3_4_0.html#autotoc_md588", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md589", null ],
              [ "Devices", "v3_4_0.html#autotoc_md590", null ],
              [ "Tools", "v3_4_0.html#autotoc_md605", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md608", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md614", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md615", [
              [ "Libraries", "v3_4_0.html#autotoc_md616", [
                [ "os", "v3_4_0.html#autotoc_md617", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md618", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md619", null ],
              [ "Devices", "v3_4_0.html#autotoc_md620", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md621", [
              [ "Libraries", "v3_4_0.html#autotoc_md622", [
                [ "os", "v3_4_0.html#autotoc_md623", null ],
                [ "sig", "v3_4_0.html#autotoc_md625", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md627", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md534", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md535", [
              [ "Build System", "v3_3_3.html#autotoc_md536", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md537", [
                [ "os", "v3_3_3.html#autotoc_md538", null ],
                [ "dev", "v3_3_3.html#autotoc_md542", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md543", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md550", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md552", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md527", [
            [ "Contributors", "v3_3_2.html#autotoc_md533", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md514", [
            [ "Important Changes", "v3_3_1.html#autotoc_md515", [
              [ "Dependencies", "v3_3_1.html#autotoc_md516", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md517", [
              [ "Libraries", "v3_3_1.html#autotoc_md518", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md519", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md520", [
                [ "grabberDual", "v3_3_1.html#autotoc_md521", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md522", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md523", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md524", [
                [ "Perl", "v3_3_1.html#autotoc_md525", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md526", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md489", [
            [ "Important Changes", "v3_3_0.html#autotoc_md490", [
              [ "Dependencies", "v3_3_0.html#autotoc_md491", null ],
              [ "Build System", "v3_3_0.html#autotoc_md492", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md493", [
                [ "YARP_os", "v3_3_0.html#autotoc_md494", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md495", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md496", [
              [ "Build System", "v3_3_0.html#autotoc_md497", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md498", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md499", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md500", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md501", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md502", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md503", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md506", null ],
              [ "devices", "v3_3_0.html#autotoc_md508", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md509", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md513", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md480", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md481", [
              [ "Build System", "v3_2_2.html#autotoc_md482", null ],
              [ "Devices", "v3_2_2.html#autotoc_md483", null ],
              [ "Tools", "v3_2_2.html#autotoc_md486", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md488", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md467", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md468", [
              [ "Carriers", "v3_2_1.html#autotoc_md469", null ],
              [ "Devices", "v3_2_1.html#autotoc_md471", null ],
              [ "Tools", "v3_2_1.html#autotoc_md473", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md476", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md479", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md457", [
            [ "Important Changes", "v3_2_0.html#autotoc_md458", [
              [ "Dependencies", "v3_2_0.html#autotoc_md459", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md460", null ],
              [ "Devices", "v3_2_0.html#autotoc_md461", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md462", [
              [ "Build System", "v3_2_0.html#autotoc_md463", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md464", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md465", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md466", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md449", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md450", [
              [ "CMake", "v3_1_2.html#autotoc_md451", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md452", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md453", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md454", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md455", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md456", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md427", [
            [ "New Features", "v3_1_1.html#autotoc_md428", [
              [ "Build System", "v3_1_1.html#autotoc_md429", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md430", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md431", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md432", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md433", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md434", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md435", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md436", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md437", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md438", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md439", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md440", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md441", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md442", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md443", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md444", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md445", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md446", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md447", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md448", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md412", [
            [ "New Features", "v3_1_0.html#autotoc_md413", [
              [ "Libraries", "v3_1_0.html#autotoc_md414", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md415", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md416", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md417", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md418", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md419", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md420", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md421", [
                [ "yarp", "v3_1_0.html#autotoc_md422", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md423", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md424", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md425", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md426", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md384", [
            [ "Important Changes", "v3_0_1.html#autotoc_md385", null ],
            [ "New Features", "v3_0_1.html#autotoc_md387", [
              [ "Libraries", "v3_0_1.html#autotoc_md388", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md389", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md390", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md391", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md392", [
              [ "Build System", "v3_0_1.html#autotoc_md393", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md394", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md395", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md396", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md397", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md398", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md399", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md400", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md401", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md402", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md403", [
                [ "yarpscope", "v3_0_1.html#autotoc_md404", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md405", [
                [ "rplidar2", "v3_0_1.html#autotoc_md406", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md407", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md408", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md409", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md410", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md411", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md348", [
            [ "Important Changes", "v3_0_0.html#autotoc_md349", [
              [ "Build System", "v3_0_0.html#autotoc_md350", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md351", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md352", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md353", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md354", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md355", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md356", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md357", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md358", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md359", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md360", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md361", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md362", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md363", [
              [ "Build System", "v3_0_0.html#autotoc_md364", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md365", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md366", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md367", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md368", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md369", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md370", null ],
              [ "Tools", "v3_0_0.html#autotoc_md371", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md372", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md373", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md374", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md375", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md376", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md377", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md378", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md379", [
              [ "Libraries", "v3_0_0.html#autotoc_md380", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md381", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md382", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md383", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md326", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md327", [
              [ "Build System", "v2_3_72_1.html#autotoc_md328", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md329", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md330", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md331", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md332", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md333", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md334", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md335", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md336", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md337", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md338", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md339", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md340", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md341", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md342", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md343", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md344", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md345", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md299", [
            [ "Important Changes", "v2_3_72.html#autotoc_md300", [
              [ "Libraries", "v2_3_72.html#autotoc_md301", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md302", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md303", [
              [ "Libraries", "v2_3_72.html#autotoc_md304", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md305", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md306", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md307", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md308", null ],
              [ "Devices", "v2_3_72.html#autotoc_md309", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md310", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md311", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md312", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md313", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md314", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md315", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md316", [
                [ "Java", "v2_3_72.html#autotoc_md317", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md318", [
              [ "Libraries", "v2_3_72.html#autotoc_md319", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md320", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md321", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md322", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md323", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md324", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md325", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md286", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md287", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md288", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md289", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md290", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md291", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md292", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md293", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md294", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md295", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md296", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md297", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md298", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md274", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md275", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md276", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md277", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md278", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md279", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md280", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md281", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md282", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md283", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md284", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md285", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md225", [
            [ "Important Changes", "v2_3_70.html#autotoc_md226", [
              [ "System Configuration", "v2_3_70.html#autotoc_md227", null ],
              [ "Build System", "v2_3_70.html#autotoc_md228", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md229", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md230", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md231", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md232", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md233", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md234", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md235", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md236", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md237", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md238", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md239", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md240", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md241", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md242", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md243", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md244", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md247", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md248", null ],
              [ "Devices", "v2_3_70.html#autotoc_md249", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md250", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md251", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md252", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md253", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md254", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md255", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md256", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md257", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md258", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md259", [
              [ "Libraries", "v2_3_70.html#autotoc_md260", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md261", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md262", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md263", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md265", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md266", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md267", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md268", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md269", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md270", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md271", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md272", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md273", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md187", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md188", [
              [ "Build System", "v2_3_68_1.html#autotoc_md189", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md190", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md191", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md192", [
              [ "Build System", "v2_3_68_1.html#autotoc_md193", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md194", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md195", [
              [ "Build System", "v2_3_68_1.html#autotoc_md196", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md197", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md198", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md199", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md200", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md201", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md202", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md203", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md204", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md205", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md206", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md207", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md208", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md209", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md210", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md211", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md212", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md213", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md214", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md215", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md216", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md217", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md218", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md219", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md220", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md221", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md222", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md223", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md162", [
            [ "Important Changes", "v2_3_68.html#autotoc_md163", [
              [ "Dependencies", "v2_3_68.html#autotoc_md164", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md165", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md166", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md167", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md168", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md169", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md170", null ],
              [ "Tools", "v2_3_68.html#autotoc_md171", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md172", null ],
              [ "Devices", "v2_3_68.html#autotoc_md173", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md174", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md175", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md176", null ],
              [ "Devices", "v2_3_68.html#autotoc_md177", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md178", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md179", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md180", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md181", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md182", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md183", null ],
              [ "Devices", "v2_3_68.html#autotoc_md184", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md185", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md186", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md154", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md155", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md156", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md157", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md158", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md159", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md160", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md161", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md141", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md142", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md143", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md144", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md145", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md146", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md147", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md148", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md149", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md150", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md151", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md152", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md153", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md132", [
            [ "Important Changes", "v2_3_66.html#autotoc_md133", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md134", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md135", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md136", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md137", null ],
              [ "Modules", "v2_3_66.html#autotoc_md138", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md139", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md140", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md117", [
            [ "Important Changes", "v2_3_65.html#autotoc_md118", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md119", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md120", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md121", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md122", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md123", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md124", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md125", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md126", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md127", null ],
              [ "Devices", "v2_3_65.html#autotoc_md128", null ],
              [ "Tools", "v2_3_65.html#autotoc_md129", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md130", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md131", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md347", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md346", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md224", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md92", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md91", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md90", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md89", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md88", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md87", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md86", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md85", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md84", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md83", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md82", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md81", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md80", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md79", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1028", [
          [ "C++", "contributing.html#autotoc_md1029", [
            [ "Header guards", "contributing.html#autotoc_md1030", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1031", null ],
          [ "Git", "contributing.html#autotoc_md1032", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1033", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1034", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1036", null ],
          [ "Example", "contributing.html#autotoc_md1037", null ],
          [ "Terminology", "contributing.html#autotoc_md1038", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1039", [
          [ "Deprecated Features", "contributing.html#autotoc_md1040", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1041", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1042", null ]
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
"CameraVocabs_8h.html#a261e9181ccbc24b100f0a819125b3598",
"ControlBoard__nws__ros2_8h_source.html",
"FakeDeviceWrapper_8cpp_source.html",
"FrameGrabberControlsDC1394__Responder_8cpp.html",
"Graph_8h.html#a6d995ac34a75d3fbd1b6a72e589036f6",
"IFrameGrabberControls_8h.html#a79239ff26e3523a2969e48b9b69c0b7ca12976059415a2d30724af230b9c9cb91",
"ILocalization2D_8h.html#adaf8fbedd435bfa28aef4f98636d894c",
"ISerialDevice_8h.html",
"Image_8copyPixels_8cpp.html#a8b06d2fe6683d99e001a2073a134fa9e",
"InputStream_8h.html",
"Log_8h.html#a529f9b79259918b16e021d820709fe70",
"Math_8h.html#ae57b8b2bdca7dd09cece6c95cfdadba7",
"NameServerContainer_8cpp.html",
"Odometry2D__nws__yarp_8h.html#a5039d45cb18f5ed3c209d917c609b98b",
"PortAudioDeviceDriver_8cpp.html#a06e14a08d61a627aefbfe1f3ecd5db95",
"RandnVector_8cpp.html",
"RpcServer_8cpp_source.html",
"SoundFilters_8h.html",
"TypedReaderThread-inl_8h_source.html",
"YarpLogger_8cpp.html",
"classAnalogWrapper.html#a1431c451803d21bc797edfc5eb21dbeb",
"classBattery__nwc__yarp__ParamsParser.html#a7628881970f7c5a336fc50d8e7d826fe",
"classControlBoardArbitraryAxesDecomposition.html#aeb260fa6bac4216828f53f73dfb04c9b",
"classControlBoardSubControlBoardAxesDecomposition.html#a944ccdfc6645ed07eef753a2ee5689a3",
"classFSM_1_1Event.html#a21a25b576a10a87721a368992b3957ba",
"classFakeBatteryService__getBatteryInfo__helper_1_1Command.html#ad2ad94a49379b4b2e9bf3b6233cac2af",
"classFakeBatteryService__setBatteryInfo__helper_1_1Reply.html#af3d0e9c80005e47c8c7879f8920b256d",
"classFakeBot.html#aefd8c324f63c2572c979a680f96460f1",
"classFakeFrameGrabber.html#aeefe965d172397a0ec40374f6a63988e",
"classFakeLaser.html#a22d11f1d15e73ab3a6db73dae9a977e7",
"classFakeLaserWithMotor.html#af62ceb53f9be7728742741da50173de3ab49e5ae5c9b93e56cf8cf0ebac86dfe2",
"classFakeMotionControl.html#a4c09c713e3d22c56040d9e6cd04b3dc6",
"classFakeMotionControl.html#ae93018b8cec9225dc822d87b14cc1698",
"classFakeOdometry2D.html#aa08cad2f1bb9c6afe6973f40b4dff90a",
"classFakeSpeechTranscription.html#a376378078c442c4e3ac3b4d598f32a07",
"classFrameGrabberOf__ForwarderWithStream.html#a4b7ca539f06389b45cb3e814654e792c",
"classFrameTransformSet__nwc__ros2.html#a2baed35466eecbde41eac9fc681e277d",
"classGPTDevice.html#a84b59d376f2508a0f06764c897833f7d",
"classHumanCarrier.html#a70f1cc1ab7f06e545862831820eca4ca",
"classIAudioGrabberMsgs__setHWGain__RPC__helper_1_1Reply.html#afa59488859b13e0241114ff3ecd00388",
"classIChatBotMsgs__resetBotRPC__helper_1_1Command.html#a24e7a6de4ca8fabd6b17de2d11a3703b",
"classILocalization2DMsgs__get__localization__status__RPC__helper_1_1Reply.html#a7aefdea2b10857661be299becc1d717b",
"classIMap2DMsgs__clear__all__locations__RPC__helper.html#ae2a16017680fb3892d8c55f93bf137e4",
"classIMap2DMsgs__delete__path__RPC__helper_1_1Command.html#a8578d08464f7a08aec2f42a873271c5a",
"classIMap2DMsgs__get__location__RPC__helper_1_1Reply.html#aa98244556f083020a33bf7b752308893",
"classIMap2DMsgs__load__maps__collection__RPC__helper.html#a4f44e136fe0dc3e1e0b585a2283d9e48",
"classIMap2DMsgs__save__map__to__disk__RPC__helper_1_1Reply.html#aa21023b844fc4995be695356cefaa379",
"classINavigation2DMsgs__apply__velocity__command__RPC__helper.html#ae95357ac48a3995565500a7a2ba728aa",
"classINavigation2DMsgs__get__navigation__status__RPC__helper_1_1Command.html#a54844300a8c827416561089db101150f",
"classINavigation2DMsgs__resume__navigation__RPC__helper_1_1Command.html#adc1e76027666adae0b314231f0fcdc83",
"classISpeechSynthesizerMsgs__get__language__helper_1_1Command.html#a2aa2e35455afa2db6156f549a4045d53",
"classISpeechSynthesizerMsgs__set__voice__helper_1_1Command.html#ad07b92d28698d674053d57498f9def69",
"classInputCallback.html",
"classLaserFromPointCloud.html#a4081ff3e471da2ad40ef4eb0a4feee0c",
"classLocalization2D__nws__yarp__ParamsParser.html#ad8341b8570262cb8da5938b14d6c8205",
"classMap2D__nws__yarp__ParamsParser.html#ab84f9b128562dea066f495f0d4136a25",
"classMobileBaseVelocityControl__nws__yarp.html#a3523fec841b26188b673893d50722e54",
"classMultipleAnalogSensorsClient.html#a73c25257e5fe55034883a502f90e4a60",
"classNavigation2D__nwc__yarp.html#a85fbc63f969849991ed7e602c1877c86",
"classOdometry2D__nws__ros2.html#a148f121c1f9f6f4ee91cc5d0cb5c751a",
"classPortMonitorGroup.html#a42cd1aeba22a2801cc0ef519ec4734ae",
"classRGBDSensorClient__ParamsParser.html#aaf93df95e6cac930c600a49e6fb3e7f4",
"classRangefinder2D__nwc__yarp__ParamsParser.html#a4edf8a73f2f01a13c6cc9baf40b3b73c",
"classRemoteControlBoard.html#a7041896bd755541f8cd3c076d08df91d",
"classRgbdSensor__nwc__ros2.html#a7bc468fae3f8eb111cd61b41f9a97161",
"classRpLidar3.html#a06d79fd6a9e8673ef7b3a9ee5519baaa",
"classSerialPort__nwc__yarp.html#aa160887a0eadb0ed774e3898e2999c00",
"classSpeechSynthesizer__nws__yarp__ParamsParser.html#ab88fb725685f1a05f0368d8050caf75f",
"classType_1_1Private.html#a666dad008fa48178b890df60ae1657df",
"classWebSocketCarrier.html#a0bc105be76779325a374ccc63a7d5be4",
"classlaserHokuyo.html#a1baee37a103b090a055fe51e8a528a7e",
"classrealsense2withIMUDriver.html#ae3cff9850b86f9e2a44e2e414d423487",
"classreturn__get__last__velocity__command.html#a53bb1b37b9b5be7a448716d316102acb",
"classyarp.html#a6af01dc24c31b9791fcba5205f3c711a",
"classyarp_1_1dev_1_1CircularAudioBuffer.html#a4f583461d1208674f8682db271adb496",
"classyarp_1_1dev_1_1ControlBoardHelper_1_1PrivateUnitsHandler.html#a92b8b8babbf18874e91a3b7ba0647325",
"classyarp_1_1dev_1_1ICartesianControl.html",
"classyarp_1_1dev_1_1IFrameGrabberImageBase.html",
"classyarp_1_1dev_1_1IJoypadEventDriven.html#a0745205482f82c4c6aa511f94650410b",
"classyarp_1_1dev_1_1IPositionControlRaw.html#a644d2bc5ae7caa1b5a65ee27c46abf3b",
"classyarp_1_1dev_1_1IVelocityControl.html#a319f6d338a7fb7fb078c419b1d9d4166",
"classyarp_1_1dev_1_1ImplementCurrentControl.html#a870e6cd6e170191c11d4166ce00df50c",
"classyarp_1_1dev_1_1ImplementMotorEncoders.html#ada19389e59514741604b0efd6cf7be23",
"classyarp_1_1dev_1_1ImplementTorqueControl.html#a720b7365a3d3570c9e07e9abe88feceb",
"classyarp_1_1dev_1_1Map2DLocationData.html#a59f1fb98b2f1a4feb8ce496cf5361468",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DPath.html#a3f489fee09c7120b37cbd1f195bb3548",
"classyarp_1_1dev_1_1OdometryData6D.html#a45ca53494d57d7eda92ab4b04ef25978",
"classyarp_1_1dev_1_1StubImplInteractionModeRaw.html#a1ee8b0e76356a50db34248f2a40ae013",
"classyarp_1_1dev_1_1impl_1_1jointData.html#ad86a8313d113bfe217524b5d5ecc2769",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__readPrompt__helper.html#a7dc2611a1038a49ca4d5a37cacad2ff0",
"classyarp_1_1manager_1_1Application.html#a336226be21d5464667975fa6a3bddc50",
"classyarp_1_1manager_1_1Broker.html#a4bb2ce86e64b6f67de9855f83c1d0bf2",
"classyarp_1_1manager_1_1ErrorLogger.html#a617e5af5dced71a81031bf69dc177c7e",
"classyarp_1_1manager_1_1GenericResource.html#ae18e4ae4ab071bb136fd64ca56f0ef2a",
"classyarp_1_1manager_1_1LinkTrainer.html#a2847d800673b474879c4489e552ac451",
"classyarp_1_1manager_1_1Memory.html#ad1750fe286f5696874483ba4454a018b",
"classyarp_1_1manager_1_1MultiResource.html#a3c2df3f3f41a7d8525ab764fee025dfd",
"classyarp_1_1manager_1_1Running.html#a91e643253ab5f69d05255208d5b97b79",
"classyarp_1_1manager_1_1YarpBroker.html#a859fca181e82e3d20d726304b797d577",
"classyarp_1_1math_1_1Vec2D.html#a9dc2b8d25b9d892a57186697bde24b92",
"classyarp_1_1os_1_1AbstractContactable.html#aa6e9214a51888eca8b5e5cd27f4be7e2",
"classyarp_1_1os_1_1Carrier.html#afc1f917c275b69b59f04229d5f9c92dd",
"classyarp_1_1os_1_1ConnectionWriter.html#a64c95da91c2230141dfa207acfefa2bf",
"classyarp_1_1os_1_1Header.html#aa9e676ab0ab73627224b820782d9fa3d",
"classyarp_1_1os_1_1LogStream.html#afd8f82182f08e58ffef546096c17fdb6",
"classyarp_1_1os_1_1NestedContact.html#a26d5580cc2331008ce3183a5d011b800",
"classyarp_1_1os_1_1Nodes_1_1Private.html#a480227dcd335e9e1e1e723ef382fd79c",
"classyarp_1_1os_1_1OutputStream.html#a88ed49f557bdce2d130810bebc62af31",
"classyarp_1_1os_1_1PortReaderBufferBase.html#a94acee73297c50468747d15ae773890c",
"classyarp_1_1os_1_1RFModule.html#a5bab3bd12447cae2f43b887481f7dae0",
"classyarp_1_1os_1_1RosNameSpace.html#aa2884a5866a529db18cca0d136ed50bc",
"classyarp_1_1os_1_1SizedWriter.html#ab7485528b26c178a01d8f13981064603",
"classyarp_1_1os_1_1Thread_1_1Private.html#a31f55796876f45c0697320e68a9e7f16",
"classyarp_1_1os_1_1Value.html#a529436b898593df2899cea811966f2c0",
"classyarp_1_1os_1_1idl_1_1BottleStyle.html",
"classyarp_1_1os_1_1impl_1_1AuthHMAC.html#a61e3229981685f6d67a5c1ff54c9b7c6",
"classyarp_1_1os_1_1impl_1_1ConnectionRecorder.html#a74247a434a4adff50f6f939d3f249d21",
"classyarp_1_1os_1_1impl_1_1HttpTwoWayStream.html#a51bf15256019f0541d74020c908e5864",
"classyarp_1_1os_1_1impl_1_1McastCarrier.html#aecb816f34ccbbc85a0eddd4c80133488",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a1f9baef482bd6249790a439c7eb3329f",
"classyarp_1_1os_1_1impl_1_1PortCorePacket.html#a265eba3e145be51219840db079424c7d",
"classyarp_1_1os_1_1impl_1_1Storable.html#a11e235b20f48366ba42b2ae1e140bbac",
"classyarp_1_1os_1_1impl_1_1StoreInt16.html#a640d1de56a297c40c71db96d6353b098",
"classyarp_1_1os_1_1impl_1_1StoreVocab32.html#a3ba6562690125b1a073c646971ba56a0",
"classyarp_1_1os_1_1impl_1_1UdpCarrier.html#a9df788b1bd38ef83c551bdd9a91e897f",
"classyarp_1_1profiler_1_1graph_1_1Vertex.html#a8dd9e0d4ab6cd961d0c03ecb43e0c21d",
"classyarp_1_1robotinterface_1_1Action.html#ac3106d81d54381a265575e84bed9a01e",
"classyarp_1_1robotinterface_1_1Robot_1_1Private.html",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV3_1_1Private.html#a17d6bb39183ef054fc53132a022ef023",
"classyarp_1_1serversql_1_1impl_1_1NameServerContainer.html#a4edfbd0b974e9e0255ef3929304749ae",
"classyarp_1_1serversql_1_1impl_1_1TripleSource.html#a9629c9e22a6670c2348fa8d649f7cf90",
"classyarp_1_1sig_1_1PointCloudBase.html#a31c63e85372d67b4629579bbfc597f0f",
"classyarp_1_1yarpLogger_1_1LoggerEngine.html",
"dependencies.html#dependencies_qt5_Linux",
"dir_7eaecfea27a2a6942980bcda2e2e1ee7.html",
"dirs_8h.html#a1fd4cdb4952cd33bc6e5c547b3f4c4c3",
"functions_func_b.html",
"group__dev__impl__nwc__ros2.html#gaa9ce62351630789b7b0c9a5f5090bca3",
"imuBosch__BNO055_8h.html#a687bd4ac36ee56652f2e50c385bc07c1",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h.html#aee1059501b872f8cc837a0ca2642b793",
"namespacemembers_i.html",
"namespaceyarp_1_1eigen.html#ae292a41048542d0d0b38acd5de746616",
"namespaceyarp_1_1robotinterface.html#a6512029fee5d34b91ed80be12ec0632e",
"numeric_8h.html#a8af501f332c112755acef7cd51d11ecd",
"return__get__abs__loc__of__curr__target_8h_source.html",
"rpLidar2_8cpp.html",
"structJoypadControl_1_1JoyPort.html#ab319efa997357b6a74b071fd81bc59fd",
"struct__IplROI.html#a7487c8cdc2887400c7dd49eb0a3361a3",
"structyarp_1_1cv_1_1type__code_3_01yarp_1_1sig_1_1PixelRgb_01_4.html",
"structyarp_1_1os_1_1SystemInfo_1_1UserInfo.html#a9212bccfc01bdc886fbd9211f678fb2e",
"structyarp_1_1sig_1_1DataXYZI.html#a32c2e51d64f91be6e757cde31300c64e",
"swigluarun_8h.html#a41cf11e6c8c4513cbca00772e8aef9fd",
"using_cmake.html#using_cmake_outofsource",
"v2_3_70.html#autotoc_md270",
"v3_3_0.html#autotoc_md513",
"v3_5_1.html#autotoc_md857",
"xilinx-v4l2-controls_8h.html#ada15e105cf1e4e9d01c7d09c474e41ff",
"yarp_logging.html#yarplog_assert"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';