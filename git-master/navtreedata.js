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
          [ "Logger and print configuration", "yarp_environment.html#autotoc_md15", null ],
          [ "Directories", "yarp_environment.html#autotoc_md16", null ],
          [ "Robot Configuration", "yarp_environment.html#autotoc_md17", null ],
          [ "UDP Carrier configuration", "yarp_environment.html#autotoc_md18", null ],
          [ "Misc configuration", "yarp_environment.html#autotoc_md19", null ],
          [ "Other", "yarp_environment.html#autotoc_md20", null ],
          [ "Deprecated Environmental Variables", "yarp_environment.html#autotoc_md21", null ],
          [ "Build system", "yarp_environment.html#autotoc_md22", null ]
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
              [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md25", null ],
              [ "Configuration Files", "resource_finder_spec.html#autotoc_md26", null ],
              [ "Data directories contents", "resource_finder_spec.html#autotoc_md28", [
                [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md29", null ],
                [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md30", null ],
                [ "Application deployment files", "resource_finder_spec.html#autotoc_md31", null ]
              ] ],
              [ "Generation of the search path", "resource_finder_spec.html#autotoc_md32", null ],
              [ "3rd party packages", "resource_finder_spec.html#autotoc_md33", [
                [ "Installed packages", "resource_finder_spec.html#autotoc_md34", [
                  [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md35", null ],
                  [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md36", null ]
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
            [ "Directories used by ResourceFinder", "resource_finder_spec.html#autotoc_md25", null ],
            [ "Configuration Files", "resource_finder_spec.html#autotoc_md26", null ],
            [ "Data directories contents", "resource_finder_spec.html#autotoc_md28", [
              [ "Contexts and Robots files", "resource_finder_spec.html#autotoc_md29", null ],
              [ "Plugins Manifest Files", "resource_finder_spec.html#autotoc_md30", null ],
              [ "Application deployment files", "resource_finder_spec.html#autotoc_md31", null ]
            ] ],
            [ "Generation of the search path", "resource_finder_spec.html#autotoc_md32", null ],
            [ "3rd party packages", "resource_finder_spec.html#autotoc_md33", [
              [ "Installed packages", "resource_finder_spec.html#autotoc_md34", [
                [ "Uninstalled packages", "resource_finder_spec.html#autotoc_md35", null ],
                [ "Packages that want to keep their stuff in their own data directory", "resource_finder_spec.html#autotoc_md36", null ]
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
            [ "Using thrift client", "thrift_monitor.html#autotoc_md23", null ],
            [ "Using yarp rpc or custom clients", "thrift_monitor.html#autotoc_md24", null ]
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
        [ "Compilation and installation", "robottestingframework_plugins.html#autotoc_md63", null ],
        [ "Available plugins", "robottestingframework_plugins.html#autotoc_md64", null ]
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
      [ "fix_logForwarder_lost_msgs_v2", "master.html", [
        [ "Libraries", "master.html#autotoc_md90", [
          [ "<tt>os</tt>", "master.html#autotoc_md91", [
            [ "<tt>Log</tt>", "master.html#autotoc_md92", null ]
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
        [ "YARP <yarp-3.12> (2025-06-04)", "yarp_3_12.html", [
          [ "YARP <yarp-3.12> Release Notes", "yarp_3_12.html#autotoc_md485", [
            [ "New Features", "yarp_3_12.html#autotoc_md486", [
              [ "Thrift", "yarp_3_12.html#autotoc_md487", null ],
              [ "Library", "yarp_3_12.html#autotoc_md488", [
                [ "<tt>libYARP_os</tt>", "yarp_3_12.html#autotoc_md489", null ]
              ] ],
              [ "Devices", "yarp_3_12.html#autotoc_md490", null ],
              [ "yarprobotinterface", "yarp_3_12.html#autotoc_md491", null ],
              [ "yarpmotorgui", "yarp_3_12.html#autotoc_md492", null ]
            ] ],
            [ "Breaking Changes", "yarp_3_12.html#autotoc_md493", [
              [ "Devices", "yarp_3_12.html#autotoc_md495", null ]
            ] ],
            [ "Other", "yarp_3_12.html#autotoc_md496", null ],
            [ "Contributors", "yarp_3_12.html#autotoc_md497", null ]
          ] ]
        ] ],
        [ "YARP 3.12.1 (2025-08-26)", "v3_12_1.html", [
          [ "YARP 3.12.1 Release Notes", "v3_12_1.html#autotoc_md498", [
            [ "New Features", "v3_12_1.html#autotoc_md499", [
              [ "yarpRerun", "v3_12_1.html#autotoc_md500", null ],
              [ "yarpRobotDescriptionInfo", "v3_12_1.html#autotoc_md501", null ],
              [ "Library", "v3_12_1.html#autotoc_md502", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md503", null ]
              ] ],
              [ "Portmonitor", "v3_12_1.html#autotoc_md504", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md505", null ]
              ] ]
            ] ],
            [ "Fixes", "v3_12_1.html#autotoc_md506", [
              [ "Bindings", "v3_12_1.html#autotoc_md507", null ],
              [ "Executables", "v3_12_1.html#autotoc_md508", null ],
              [ "GUIs", "v3_12_1.html#autotoc_md509", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md510", null ]
              ] ],
              [ "Devices", "v3_12_1.html#autotoc_md511", null ],
              [ "Library", "v3_12_1.html#autotoc_md512", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md513", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_12_1.html#autotoc_md514", null ]
              ] ]
            ] ],
            [ "Breaking Changes", "v3_12_1.html#autotoc_md515", [
              [ "GUIs", "v3_12_1.html#autotoc_md516", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md517", null ]
              ] ],
              [ "Library", "v3_12_1.html#autotoc_md518", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md519", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_12_1.html#autotoc_md520", null ]
          ] ]
        ] ],
        [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md480", [
            [ "Fixes", "v3_11_2.html#autotoc_md481", [
              [ "GUIs", "v3_11_2.html#autotoc_md482", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md483", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md484", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md476", [
            [ "Changes", "v3_11_1.html#autotoc_md477", [
              [ "Compiler features", "v3_11_1.html#autotoc_md478", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md479", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md457", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md458", [
              [ "Library", "v3_11_0.html#autotoc_md459", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md460", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md461", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md462", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md463", null ],
            [ "New Features", "v3_11_0.html#autotoc_md464", [
              [ "devices", "v3_11_0.html#autotoc_md465", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md466", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md467", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md468", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md469", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md470", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md471", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md472", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md473", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md474", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md475", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md453", [
            [ "Fixes", "v3_10_1.html#autotoc_md454", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md455", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md456", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md426", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md427", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md428", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md429", null ],
            [ "New Features", "v3_10_0.html#autotoc_md430", [
              [ "Carriers", "v3_10_0.html#autotoc_md432", null ],
              [ "Devices", "v3_10_0.html#autotoc_md433", [
                [ "Docker", "v3_10_0.html#autotoc_md431", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md434", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md435", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md436", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md437", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md438", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md439", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md440", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md441", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md442", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md443", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md444", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md445", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md446", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md447", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md448", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md449", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md450", [
                [ "Python", "v3_10_0.html#autotoc_md451", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md452", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1137", [
            [ "Fixes", "v3_9_1.html#autotoc_md1138", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1139", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1140", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1141", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1142", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1143", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1144", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1145", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1146", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1118", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1119", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1120", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1121", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1122", [
              [ "Docker", "v3_9_0.html#autotoc_md1123", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1124", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1125", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1126", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1127", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1128", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1129", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1130", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1131", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1132", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1133", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1134", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1135", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1136", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1109", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1110", [
              [ "tools", "v3_8_1.html#autotoc_md1111", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1112", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1113", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1114", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1115", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1116", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1117", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1068", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1069", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1070", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1071", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1072", [
              [ "Libraries", "v3_8_0.html#autotoc_md1073", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1074", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1075", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1076", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1077", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1078", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1079", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1080", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1081", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1082", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1083", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1084", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1085", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1086", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1087", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1088", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1089", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1090", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1091", null ],
              [ "Other", "v3_8_0.html#autotoc_md1092", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1093", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1094", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1095", [
              [ "bindings", "v3_8_0.html#autotoc_md1096", null ],
              [ "devices", "v3_8_0.html#autotoc_md1097", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1098", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1099", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1100", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1101", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1102", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1103", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1104", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1105", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1106", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1107", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1108", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1060", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1061", [
              [ "Documentation", "v3_7_2.html#autotoc_md1062", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1063", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1064", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1065", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1066", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1067", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1051", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1052", [
              [ "CMake", "v3_7_1.html#autotoc_md1053", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1054", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1055", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1056", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1057", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1058", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1059", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1026", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1027", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1028", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1029", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1030", [
              [ "Libraries", "v3_7_0.html#autotoc_md1031", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1032", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1035", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1036", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1037", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1038", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1039", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1040", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1041", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1042", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1043", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1044", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1045", [
              [ "Catch2", "v3_7_0.html#autotoc_md1046", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1047", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1048", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1049", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1050", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md969", [
            [ "Important Changes", "v3_6_0.html#autotoc_md970", [
              [ "Dependencies", "v3_6_0.html#autotoc_md971", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md972", [
              [ "Devices", "v3_6_0.html#autotoc_md973", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md974", [
              [ "Libraries", "v3_6_0.html#autotoc_md975", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md976", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md977", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md983", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md984", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md994", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md995", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md996", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md997", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md998", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md999", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md1000", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md1001", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md1002", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md1003", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md1004", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md1005", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md1006", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md1007", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md1008", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md1009", null ],
              [ "Tools", "v3_6_0.html#autotoc_md1010", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md1011", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md1012", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md1013", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md1014", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1015", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1016", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1017", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1018", [
              [ "Build System", "v3_6_0.html#autotoc_md1019", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1020", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1021", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1022", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1023", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1024", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1025", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md923", [
            [ "New Features", "v3_5_1.html#autotoc_md924", [
              [ "Libraries", "v3_5_1.html#autotoc_md925", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md926", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md927", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md928", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md929", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md933", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md934", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md935", null ],
              [ "Devices", "v3_5_1.html#autotoc_md936", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md937", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md938", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md939", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md940", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md941", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md942", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md943", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md944", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md945", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md946", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md947", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md948", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md949", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md950", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md951", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md952", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md953", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md954", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md955", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md956", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md957", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md958", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md959", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md960", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md961", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md962", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md963", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md964", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md965", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md966", [
                [ "Python", "v3_5_1.html#autotoc_md967", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md968", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md821", [
            [ "Important Changes", "v3_5_0.html#autotoc_md822", [
              [ "Dependencies", "v3_5_0.html#autotoc_md823", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md824", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md825", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md827", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md828", [
              [ "Libraries", "v3_5_0.html#autotoc_md829", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md830", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md831", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md843", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md845", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md848", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md849", null ],
              [ "Devices", "v3_5_0.html#autotoc_md850", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md851", [
              [ "Libraries", "v3_5_0.html#autotoc_md852", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md853", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md854", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md855", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md865", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md871", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md880", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md882", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md883", null ],
              [ "Devices", "v3_5_0.html#autotoc_md884", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md885", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md886", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md887", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md888", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md889", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md890", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md891", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md892", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md893", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md894", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md895", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md896", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md897", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md898", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md899", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md900", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md901", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md902", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md903", [
              [ "Carriers", "v3_5_0.html#autotoc_md904", null ],
              [ "Devices", "v3_5_0.html#autotoc_md905", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md906", [
                [ "Python", "v3_5_0.html#autotoc_md907", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md908", [
              [ "Libraries", "v3_5_0.html#autotoc_md909", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md910", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md913", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md914", null ],
              [ "Devices", "v3_5_0.html#autotoc_md915", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md916", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md917", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md918", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md919", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md920", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md921", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md922", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md806", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md807", null ],
            [ "Build System", "v3_4_6.html#autotoc_md808", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md809", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md810", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md811", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md812", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md813", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md814", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md815", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md816", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md817", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md818", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md819", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md820", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md798", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md799", [
              [ "Libraries", "v3_4_5.html#autotoc_md800", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md801", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md803", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md804", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md805", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md787", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md788", [
              [ "Build System", "v3_4_4.html#autotoc_md789", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md790", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md791", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md792", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md793", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md794", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md795", [
                [ "Python", "v3_4_4.html#autotoc_md796", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md797", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md776", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md777", [
              [ "Libraries", "v3_4_3.html#autotoc_md778", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md779", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md780", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md781", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md782", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md783", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md784", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md785", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md786", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md755", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md756", [
              [ "Build System", "v3_4_2.html#autotoc_md757", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md758", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md759", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md761", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md762", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md765", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md766", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md767", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md768", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md769", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md770", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md771", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md772", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md773", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md774", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md775", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md737", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md738", [
              [ "Build System", "v3_4_1.html#autotoc_md739", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md740", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md741", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md743", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md745", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md746", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md747", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md748", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md749", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md750", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md751", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md752", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md753", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md754", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md662", [
            [ "Important Changes", "v3_4_0.html#autotoc_md663", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md664", [
              [ "Build System", "v3_4_0.html#autotoc_md665", [
                [ "os", "v3_4_0.html#autotoc_md667", null ],
                [ "dev", "v3_4_0.html#autotoc_md674", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md675", null ],
              [ "Tools", "v3_4_0.html#autotoc_md676", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md678", [
              [ "Build System", "v3_4_0.html#autotoc_md679", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md682", [
                [ "conf", "v3_4_0.html#autotoc_md683", null ],
                [ "os", "v3_4_0.html#autotoc_md684", null ],
                [ "sig", "v3_4_0.html#autotoc_md692", null ],
                [ "math", "v3_4_0.html#autotoc_md695", null ],
                [ "dev", "v3_4_0.html#autotoc_md696", null ],
                [ "logger", "v3_4_0.html#autotoc_md697", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md698", null ],
              [ "Devices", "v3_4_0.html#autotoc_md699", null ],
              [ "Tools", "v3_4_0.html#autotoc_md714", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md717", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md723", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md724", [
              [ "Libraries", "v3_4_0.html#autotoc_md725", [
                [ "os", "v3_4_0.html#autotoc_md726", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md727", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md728", null ],
              [ "Devices", "v3_4_0.html#autotoc_md729", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md730", [
              [ "Libraries", "v3_4_0.html#autotoc_md731", [
                [ "os", "v3_4_0.html#autotoc_md732", null ],
                [ "sig", "v3_4_0.html#autotoc_md734", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md736", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md643", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md644", [
              [ "Build System", "v3_3_3.html#autotoc_md645", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md646", [
                [ "os", "v3_3_3.html#autotoc_md647", null ],
                [ "dev", "v3_3_3.html#autotoc_md651", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md652", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md659", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md661", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md636", [
            [ "Contributors", "v3_3_2.html#autotoc_md642", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md623", [
            [ "Important Changes", "v3_3_1.html#autotoc_md624", [
              [ "Dependencies", "v3_3_1.html#autotoc_md625", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md626", [
              [ "Libraries", "v3_3_1.html#autotoc_md627", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md628", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md629", [
                [ "grabberDual", "v3_3_1.html#autotoc_md630", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md631", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md632", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md633", [
                [ "Perl", "v3_3_1.html#autotoc_md634", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md635", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md598", [
            [ "Important Changes", "v3_3_0.html#autotoc_md599", [
              [ "Dependencies", "v3_3_0.html#autotoc_md600", null ],
              [ "Build System", "v3_3_0.html#autotoc_md601", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md602", [
                [ "YARP_os", "v3_3_0.html#autotoc_md603", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md604", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md605", [
              [ "Build System", "v3_3_0.html#autotoc_md606", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md607", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md608", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md609", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md610", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md611", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md612", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md615", null ],
              [ "devices", "v3_3_0.html#autotoc_md617", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md618", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md622", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md589", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md590", [
              [ "Build System", "v3_2_2.html#autotoc_md591", null ],
              [ "Devices", "v3_2_2.html#autotoc_md592", null ],
              [ "Tools", "v3_2_2.html#autotoc_md595", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md597", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md576", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md577", [
              [ "Carriers", "v3_2_1.html#autotoc_md578", null ],
              [ "Devices", "v3_2_1.html#autotoc_md580", null ],
              [ "Tools", "v3_2_1.html#autotoc_md582", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md585", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md588", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md566", [
            [ "Important Changes", "v3_2_0.html#autotoc_md567", [
              [ "Dependencies", "v3_2_0.html#autotoc_md568", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md569", null ],
              [ "Devices", "v3_2_0.html#autotoc_md570", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md571", [
              [ "Build System", "v3_2_0.html#autotoc_md572", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md573", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md574", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md575", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md558", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md559", [
              [ "CMake", "v3_1_2.html#autotoc_md560", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md561", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md562", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md563", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md564", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md565", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md536", [
            [ "New Features", "v3_1_1.html#autotoc_md537", [
              [ "Build System", "v3_1_1.html#autotoc_md538", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md539", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md540", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md541", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md542", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md543", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md544", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md545", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md546", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md547", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md548", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md549", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md550", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md551", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md552", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md553", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md554", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md555", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md556", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md557", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md521", [
            [ "New Features", "v3_1_0.html#autotoc_md522", [
              [ "Libraries", "v3_1_0.html#autotoc_md523", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md524", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md525", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md526", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md527", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md528", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md529", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md530", [
                [ "yarp", "v3_1_0.html#autotoc_md531", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md532", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md533", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md534", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md535", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md398", [
            [ "Important Changes", "v3_0_1.html#autotoc_md399", null ],
            [ "New Features", "v3_0_1.html#autotoc_md401", [
              [ "Libraries", "v3_0_1.html#autotoc_md402", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md403", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md404", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md405", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md406", [
              [ "Build System", "v3_0_1.html#autotoc_md407", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md408", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md409", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md410", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md411", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md412", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md413", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md414", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md415", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md416", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md417", [
                [ "yarpscope", "v3_0_1.html#autotoc_md418", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md419", [
                [ "rplidar2", "v3_0_1.html#autotoc_md420", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md421", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md422", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md423", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md424", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md425", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md362", [
            [ "Important Changes", "v3_0_0.html#autotoc_md363", [
              [ "Build System", "v3_0_0.html#autotoc_md364", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md365", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md366", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md367", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md368", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md369", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md370", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md371", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md372", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md373", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md374", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md375", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md376", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md377", [
              [ "Build System", "v3_0_0.html#autotoc_md378", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md379", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md380", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md381", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md382", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md383", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md384", null ],
              [ "Tools", "v3_0_0.html#autotoc_md385", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md386", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md387", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md388", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md389", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md390", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md391", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md392", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md393", [
              [ "Libraries", "v3_0_0.html#autotoc_md394", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md395", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md396", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md397", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md340", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md341", [
              [ "Build System", "v2_3_72_1.html#autotoc_md342", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md343", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md344", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md345", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md346", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md347", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md348", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md349", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md350", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md351", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md352", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md353", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md354", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md355", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md356", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md357", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md358", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md359", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md313", [
            [ "Important Changes", "v2_3_72.html#autotoc_md314", [
              [ "Libraries", "v2_3_72.html#autotoc_md315", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md316", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md317", [
              [ "Libraries", "v2_3_72.html#autotoc_md318", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md319", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md320", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md321", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md322", null ],
              [ "Devices", "v2_3_72.html#autotoc_md323", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md324", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md325", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md326", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md327", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md328", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md329", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md330", [
                [ "Java", "v2_3_72.html#autotoc_md331", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md332", [
              [ "Libraries", "v2_3_72.html#autotoc_md333", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md334", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md335", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md336", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md337", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md338", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md339", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md300", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md301", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md302", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md303", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md304", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md305", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md306", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md307", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md308", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md309", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md310", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md311", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md312", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md288", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md289", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md290", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md291", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md292", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md293", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md294", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md295", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md296", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md297", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md298", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md299", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md239", [
            [ "Important Changes", "v2_3_70.html#autotoc_md240", [
              [ "System Configuration", "v2_3_70.html#autotoc_md241", null ],
              [ "Build System", "v2_3_70.html#autotoc_md242", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md243", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md244", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md247", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md248", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md249", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md250", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md251", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md252", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md253", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md254", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md255", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md256", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md257", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md258", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md259", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md260", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md261", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md262", null ],
              [ "Devices", "v2_3_70.html#autotoc_md263", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md265", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md266", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md267", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md268", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md269", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md270", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md271", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md272", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md273", [
              [ "Libraries", "v2_3_70.html#autotoc_md274", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md275", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md276", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md277", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md278", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md279", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md280", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md281", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md282", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md283", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md284", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md285", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md286", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md287", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md201", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md202", [
              [ "Build System", "v2_3_68_1.html#autotoc_md203", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md204", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md205", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md206", [
              [ "Build System", "v2_3_68_1.html#autotoc_md207", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md208", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md209", [
              [ "Build System", "v2_3_68_1.html#autotoc_md210", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md211", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md212", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md213", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md214", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md215", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md216", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md217", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md218", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md219", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md220", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md221", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md222", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md223", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md224", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md225", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md226", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md227", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md228", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md229", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md230", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md231", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md232", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md233", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md234", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md235", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md236", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md237", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md176", [
            [ "Important Changes", "v2_3_68.html#autotoc_md177", [
              [ "Dependencies", "v2_3_68.html#autotoc_md178", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md179", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md180", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md181", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md182", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md183", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md184", null ],
              [ "Tools", "v2_3_68.html#autotoc_md185", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md186", null ],
              [ "Devices", "v2_3_68.html#autotoc_md187", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md188", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md189", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md190", null ],
              [ "Devices", "v2_3_68.html#autotoc_md191", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md192", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md193", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md194", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md195", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md196", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md197", null ],
              [ "Devices", "v2_3_68.html#autotoc_md198", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md199", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md200", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md168", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md169", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md170", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md171", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md172", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md173", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md174", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md175", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md155", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md156", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md157", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md158", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md159", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md160", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md161", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md162", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md163", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md164", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md165", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md166", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md167", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md146", [
            [ "Important Changes", "v2_3_66.html#autotoc_md147", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md148", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md149", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md150", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md151", null ],
              [ "Modules", "v2_3_66.html#autotoc_md152", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md153", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md154", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md131", [
            [ "Important Changes", "v2_3_65.html#autotoc_md132", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md133", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md134", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md135", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md136", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md137", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md138", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md139", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md140", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md141", null ],
              [ "Devices", "v2_3_65.html#autotoc_md142", null ],
              [ "Tools", "v2_3_65.html#autotoc_md143", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md144", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md145", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md130", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md129", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md128", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md127", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md126", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md121", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md120", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md119", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md118", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md361", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md360", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md238", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md125", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md124", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md123", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md122", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md117", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md93", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1147", [
          [ "C++", "contributing.html#autotoc_md1148", [
            [ "Header guards", "contributing.html#autotoc_md1149", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1150", null ],
          [ "Git", "contributing.html#autotoc_md1151", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1152", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1153", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1155", null ],
          [ "Example", "contributing.html#autotoc_md1156", null ],
          [ "Terminology", "contributing.html#autotoc_md1157", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1158", [
          [ "Deprecated Features", "contributing.html#autotoc_md1159", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1160", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1161", null ]
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
"Carrier_8h_source.html",
"DeviceBundler__test_8cpp.html#ad1be00f0e82913aefd8191919819cfdb",
"FakeIMU_8cpp.html",
"FrameGrabber__nws__yarp__ParamsParser_8h_source.html",
"GstreamerDecoder_8cpp.html",
"IFakeDeviceInterfaceTest1_8h.html",
"IJointFaultTest_8h_source.html",
"IPositionControl_8h.html#a541f4f3651c597748c3256fd471c34f5",
"ImageUtils_8cpp.html",
"Image_8h_source.html",
"LLM__nwc__yarp_8h_source.html",
"Map2DLocationData_8h.html",
"ModifyingCarrier_8h_source.html",
"NetInt32_8cpp.html",
"Ping_8h.html",
"PortMonitor_8h_source.html",
"Rangefinder2DTransformer_8cpp.html",
"RunProcManager_8cpp.html#ae0fa5e0b910fbe20eb9d6077386cabaa",
"Sound_8cpp_source.html",
"TwoWayStream_8h.html",
"XMLReaderFileV1_8cpp.html#af8c862c64b84c9b64f309b83bce0c36f",
"classAnalogSubDevice.html#a85b5a6aaf27392f671a9e451aa01d53d",
"classAudioRecorder__nws__yarp.html#a5f8d00be31a340cb8812cc74b18b6ae0",
"classBootstrapServerAdapter.html",
"classChatBot__nwc__yarp__ParamsParser.html#a3ada46cd6ca15e3cc5f37043e5d8cc1f",
"classControlBoardMsgs__getDesiredVelocityGroupRPC__helper.html#ab9ecb773317bca7643f8844d1f1d9beb",
"classControlBoardRemapper.html#a4b198b839a0c83b64ac5f0d44e19996f",
"classControlThread.html#ae83171b014c330374cce4fb5d86632d0",
"classDeviceDriver_1_1Private.html",
"classFakeAnalogSensor.html#a665eae725db88758d75ce5ef2678a387",
"classFakeBatteryService__getBatteryStatusString__helper_1_1Reply.html#ad865e5822e06e1e7bffc7fbfcf98de3a",
"classFakeBatteryService__setBatteryTemperature__helper.html#a78d3227eb47c72f496926a9fe2e73d92",
"classFakeChatBotDevice.html#a1d1929ea17b61ebef8af8962081e36af",
"classFakeFrameGrabber.html#a846c1e229790651977f80c11cf88da68",
"classFakeJointCoupling.html#adebabab694892531300b1260da4779e5",
"classFakeLaserWithMotor.html#a6a4a3365ee951239bbb41ad2252cb0e9",
"classFakeMicrophone.html#aeb7739838807b826dd0a44a24f240988",
"classFakeMotionControl.html#a8e5c47af27f844306d2271f7d0249d74",
"classFakeMotionControlMicro.html#ab798b559c46d9c5188f55cd225852bac",
"classFakePythonSpeechTranscription.html#a576f6b2b3f5308c87127635e3c57fee1",
"classFakeTestMsgs__doSomethingRPC__helper.html#a332e4c69d033216a68a5e98eeede6e5b",
"classFrameGrabberMsgs.html",
"classFrameGrabberMsgs__getColorCodingDC1394RPC__helper_1_1Reply.html#a6fe2ea574d7d12a0bb67a7457ccfef81",
"classFrameGrabberMsgs__getHeightRPC__helper.html#a703b5cdca7f11e76d486f65b9670d0a6",
"classFrameGrabberMsgs__getRgbHeightRPC__helper_1_1Command.html",
"classFrameGrabberMsgs__getVideoModeMaskDC1394RPC__helper.html",
"classFrameGrabberMsgs__setActiveRPC__helper.html#a2601f773b7204fa910d07467c63ae2a4",
"classFrameGrabberMsgs__setFeature1RPC__helper.html#a19ec707e84ac410cde295a82fa1161e9",
"classFrameGrabberMsgs__setOperationModeDC1394RPC__helper_1_1Reply.html#a2c2ea40e3d65e59d1ce304d09a4e15ef",
"classFrameGrabberMsgs__setVideoModeDC1394RPC__helper_1_1Reply.html#a58dd45f783f7d0cee063604d7cbb4ca4",
"classFrameTransformClient__ParamsParser.html#afdcf4b124778d7d55f98abb4824e2db3",
"classFrameTransformStorageSetRPC.html#a2dc285f51dba1bcbf5ff4830ce4db861",
"classGPTDevice__ParamsParser.html#aad8b8bc271d9f576d9453d1168c9ca80",
"classGraph.html#aceab3bc9eca7f2b77d13bf4db30b2d31",
"classIAudioGrabberMsgs__isRecording__RPC__helper.html#a63a1055bb8f3da929b7c427eb29f5add",
"classIBatteryMsgs__getBatteryInfoRPC__helper_1_1Reply.html#a2a39ef5be22f0cc22f3bafee75bb2728",
"classIDepthVisualParamsMsgs__return__getDepthHeight.html#a8a0d7d6ba9b98ef147eaba0eea918e1f",
"classIFrameGrabberControlMsgs__return__getFeature2.html#a6cebfd8728eaca136c80e44e037cba22",
"classILocalization2DMsgs__get__current__position1__RPC__helper_1_1Reply.html#adcad2745fca86ce06e7f3c2b8e7295af",
"classILocalization2DMsgs__stop__localization__service__RPC__helper.html#ac714cc9424bd2986f4313256e05beb02",
"classIMap2DMsgs__clear__map__temporary__flags__RPC__helper.html#a1106fbdcd132e445a881e1adba90dbac",
"classIMap2DMsgs__get__all__paths__RPC__helper.html#a0df0220809120b1cfa7b50358b027ced",
"classIMap2DMsgs__get__path__RPC__helper.html#aa3b9246b5b14ce3695d16e8d959789b6",
"classIMap2DMsgs__rename__location__RPC__helper.html#aa6797169b5a3bedea3a76898de988918",
"classIMap2DMsgs__store__map__RPC__helper.html#a8e4f240a76eb924543f4e10e68476f5d",
"classINavigation2DMsgs__get__all__navigation__waypoints__RPC__helper.html#a4edaa47cf1a18719402d7b3e869def17",
"classINavigation2DMsgs__goto__target__by__absolute__location__RPC__helper_1_1Command.html#a5737cd8f6ec6157e7955e0f5779acc33",
"classINavigation2DMsgs__suspend__navigation__RPC__helper_1_1Command.html#a9904347d0ca764a92f16e324137a2e05",
"classIRGBVisualParamsMsgs__return__getRgbResolution.html#ac75e7d347392a73a2712c01ba00a364b",
"classIRangefinder2DMsgs__getScanRate__RPC__helper_1_1Command.html#ab7e97e9a07499c1874eb51f5277b9580",
"classIRobotDescriptionMsgs__getAllDevicesRPC__helper_1_1Reply.html#a987d93949c22647f5a0250f32404a71d",
"classISpeechSynthesizerMsgs__get__language__helper_1_1Command.html#a6b37ef06879e6af1d18537ceeb690b2c",
"classISpeechSynthesizerMsgs__set__voice__helper_1_1Reply.html#a38260336d970820140497e09827eecef",
"classInputCallback.html#a781dd86efb751c20401a11546258104b",
"classJoypadControlServer.html#a589fc5e49704a9fa27eca9a948d15940",
"classLocalization2D__nwc__yarp.html#a8e9095660c002e6fe980c9b3bf472ab4",
"classMainWindow.html#a1a0b5951b7c18b3c0bb4bfd1303fd77a",
"classMap2D__nwc__yarp.html#af1e4489e5e38ffec5598f8f321f1ce18",
"classMobileBaseVelocityControlRPC__applyVelocityCommandRPC__helper_1_1Command.html#af1de73cdd615709dd1c2c73f68eb66a5",
"classMonoThreadTimer.html#a5ac7b13345a1aa6fe9d4c41066eb940c",
"classMultipleAnalogSensorsMetadata__getMetadata__helper.html#aecfc76e6c543cf2af5b226742139fbf7",
"classNavigation2D__nwc__yarp.html#abf9b62c337c40af52b877a099658defb",
"classOdometry2D__nws__ros2.html#aa09f88566df6e5fe9de6fb23a7063adf",
"classPartItem.html#a95b060fda966c271f70b589bd3194525",
"classPortAudioPlayerDeviceDriver__ParamsParser.html#a81855757e2f29e71a17e5085d7f6ffd1",
"classQtQuick2ApplicationViewer.html#aaeb3408f723fcc0e8d022354feba25df",
"classRGBDSensorMsgs__getActiveRPC__helper_1_1Command.html#a1829489db3db7c41594e0bb337d1f084",
"classRGBDSensorMsgs__getDepthMirroringRPC__helper.html#a0f2a9af5f0b8d34aaa4aaca27e4c9d01",
"classRGBDSensorMsgs__getLastErrorMsgRPC__helper_1_1Command.html#a3a6ad15efe69f58de3fc57467538375d",
"classRGBDSensorMsgs__getRgbResolutionRPC__helper_1_1Reply.html#a2a023e224277628c6f9bc74a8deddb91",
"classRGBDSensorMsgs__hasOnePushRPC__helper.html",
"classRGBDSensorMsgs__setDepthResolutionRPC__helper_1_1Reply.html#a0519a000c3b7c82c5701a37db184e31d",
"classRGBDSensorMsgs__setRgbResolutionRPC__helper_1_1Command.html#a74b846b18f5eb3b36ce257825725ad50",
"classRangefinder2DTransformer__ParamsParser.html#ad427600f7c49ba039095bb420fdc5fd6",
"classRangefinder2D__nws__yarp.html#a593544bec197b80f865257f8d7f94d4a",
"classRemoteControlBoard.html#ab254ab085096f5f972db5e9c6c6c6294",
"classRgbdSensor__nwc__ros2.html#ad9331324e3ca7aac7ddf35f6e6442f1b",
"classRpLidar.html#ac71a86b62da2dff6f1f9e145f1205e5c",
"classSensorRPCData.html#ac6b0d1bf54e2a1108a5e016a7d31e89a",
"classShmemOutputStreamImpl.html#abb7d9bd472a957dec962c441c432c370",
"classStateExtendedInputPort.html#a032a3d61ed1a79a50bf367b93b4489d0",
"classType_1_1Private.html#a476efd2436fcba14330d6414ae96fb25",
"classVirtualAnalogWrapper.html#a776590fcbaa64344d55e58336632423e",
"classadvanced__dialog.html#a723c58698f4ae907b214723b4ab2a94d",
"classrealsense2Driver.html#a5621ba5090573b5735988e1d37330a58",
"classreturn__getDeviceStatus.html",
"classreturn__get__current__position2.html#a9b537dc8e243be0c7617b5cb1799a29d",
"classreturn__set__language.html#a867788488c71f2adfeaea0d03ec4e700",
"classyarpActionsPlayer__IDL__forever__helper.html#a6ce8c6adcccfb75114fc4e370489a4ea",
"classyarpActionsPlayer__IDL__show__actions__helper.html#a8cac40fc356301ebf942cc36b804ccd9",
"classyarp_1_1dev_1_1BatteryData.html#ad8c64535a530bcad79011c03662b5515",
"classyarp_1_1dev_1_1ControlBoardHelper.html#ab49a6ac37a49d09c7b8dd0c50fc56a6e",
"classyarp_1_1dev_1_1IAmplifierControl.html#ae978c5638d3f27915d8b8d8dea91ba86",
"classyarp_1_1dev_1_1ICurrentControlRaw.html#a084679e1e1e4579c1ee0fe18b3bd0730",
"classyarp_1_1dev_1_1IGazeControl.html#ac79a51f8930522a201f8d82aac008e45",
"classyarp_1_1dev_1_1IMotorEncodersRaw.html#a19824a3b1d5c54fa019c8ad55e531e96",
"classyarp_1_1dev_1_1IRemoteVariablesRaw.html#a1e9a0cc3af1b9325259ce63e4042b4cc",
"classyarp_1_1dev_1_1ImplementAmplifierControl.html#a1676d8a0791a5dd6c156348b0c3bee72",
"classyarp_1_1dev_1_1ImplementImpedanceControl.html#a25402248cc8143121d3616f51d5b812a",
"classyarp_1_1dev_1_1ImplementPidControl.html#a650e74421794eefa19d316d6ecfcd3c7",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#af8616570e34cf62d5f9d6b970b157d3a",
"classyarp_1_1dev_1_1MobileBaseVelocity.html#a14c0962ebff68e97eb56bca95bb4845b",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#a449581c9b33027438a7f2d6003b65f78",
"classyarp_1_1dev_1_1Pid.html#a20979a12e417720ebed335c2ecca56bd",
"classyarp_1_1dev_1_1StubImplControlLimitsRaw.html",
"classyarp_1_1dev_1_1impl_1_1jointData.html#a9d3ee9133d7f20408aaa52f25e35d2f8",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__getConversation__helper_1_1Reply.html#a60e23b54d714de5a81b0e1bcfdcc3ded",
"classyarp_1_1dev_1_1llm_1_1return__getConversation.html#a2cb619657f6832bf665fba80486a0c52",
"classyarp_1_1manager_1_1Arbitrator.html#a6695d72d00cb5f6f26beb11a9ed47299",
"classyarp_1_1manager_1_1Connecting.html#a52b98b64789e7d9359c5a06561d58214",
"classyarp_1_1manager_1_1Executable.html#a5873b6bfba0b55648899178f7f69044f",
"classyarp_1_1manager_1_1InputData.html#a7fcba164ba6717f5fbfed46fbeffe484",
"classyarp_1_1manager_1_1Manager.html#a2860fef771c8e9e29e70b91d893b9e15",
"classyarp_1_1manager_1_1Module.html#ad6096c6b4827beb3a63c2d8606501d00",
"classyarp_1_1manager_1_1OutputData.html#ae68355f5bc71c1d18eef02ea42f3888b",
"classyarp_1_1manager_1_1TempLoader.html#a0e4dc34b9c986a85601d5ecce6928a13",
"classyarp_1_1math_1_1Quaternion.html#a11b8e1e8ab0c621823d14778cb41882b",
"classyarp_1_1os_1_1AbstractCarrier.html#a098b7f25351968aad8f8bf07b12943a0",
"classyarp_1_1os_1_1BufferedPort.html#a06ef439f55cf641d304e74bbda05edb1",
"classyarp_1_1os_1_1Connection.html#a2e4352edf667bea83001569e9da8a24d",
"classyarp_1_1os_1_1Contactable.html#a6c216015fabafc3fcd26e25863183c90",
"classyarp_1_1os_1_1Log.html#a11ebabc2dd88bb6fe0b5f056c66ae280",
"classyarp_1_1os_1_1MonitorObject.html#a1231230c991ee46d749a40e630e86d2a",
"classyarp_1_1os_1_1NetworkBase.html#adf64fbc362716ba50d37ae96c205ef84",
"classyarp_1_1os_1_1OutputStream.html#aeaab4cae21f4476fcc78515d1234fdc5",
"classyarp_1_1os_1_1PortReaderBufferBase.html#aee2774f20ebea9b3a4f91ae0afa52a8b",
"classyarp_1_1os_1_1RateResult.html",
"classyarp_1_1os_1_1SharedLibrary.html#a5076d8e3cf89a281460c24e10c81053d",
"classyarp_1_1os_1_1SystemInfo.html#a594c60cfb7b0ad82b70d49d9d78e8f84",
"classyarp_1_1os_1_1TypedReader.html#aea94cb599cb0c0fe8e351bddd341cab5",
"classyarp_1_1os_1_1YarpNameSpace.html#a92b67354fa2d42c709e536ebd828e183",
"classyarp_1_1os_1_1idl_1_1WireState.html#a26ef369c438481504aaf491d1f4bb457",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#a26411b22131c57f2a8c2c582012436c1",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html",
"classyarp_1_1os_1_1impl_1_1NameServerStub.html",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#aa5c9c71c934bcb6c1d8dfc7e8a979f14",
"classyarp_1_1os_1_1impl_1_1Protocol.html#a73bc57b04a1c8b9f38ba6d93d6c2a1f0",
"classyarp_1_1os_1_1impl_1_1StoreDict.html#a5a244b54d0979d62f550b8252d4c26f6",
"classyarp_1_1os_1_1impl_1_1StoreInt8.html#afad49c7de9f675cb54da3ed869d27753",
"classyarp_1_1os_1_1impl_1_1StreamConnectionReader.html#af218227548d524f44ae6d58ea149fc46",
"classyarp_1_1profiler_1_1NetworkProfiler.html#a2e5e654e5053c44844bb3292d659d83c",
"classyarp_1_1robotinterface_1_1Device.html#a37f44ddec31880683d529928411cf2d4",
"classyarp_1_1robotinterface_1_1Robot_1_1Private.html#ad13534003e050838759c2e96e72c27f7",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV3_1_1Private.html#aee2e3148d012e0cc18d04673b2ab5e4b",
"classyarp_1_1serversql_1_1impl_1_1NameServiceOnTriples.html#ab220ad21d403f1450f43222adb360387",
"classyarp_1_1sig_1_1AudioBufferSize.html#a97d1d53ba226cb90dd98e3d1701e710d",
"classyarp_1_1sig_1_1LayeredImage.html#a7d81c75cc4ad5a17d89c7a3df381a7bc",
"classyarp_1_1sig_1_1VectorOf.html#ae9d8cdc242bd0687a2f1404114963247",
"classyarpdataplayer__IDL__getFrame__helper_1_1Command.html#aa28760925abb1759ddf3dfe379016d9d",
"classyarpdataplayer__IDL__setFrame__helper_1_1Reply.html#a364765df44d8124b5158f6b03a30246f",
"classyarpdataplayer__console__IDL__getAllParts__helper.html#a62793ddca86577112fb01c24a8590c9b",
"classyarpdataplayer__console__IDL__pause__helper.html#aceccbd9f139dc1e9f1db8cf937e35941",
"classyarpdataplayer__console__IDL__setSpeed__helper_1_1Command.html#a5664bedb88070964ded113af6a00789b",
"classyarprobotinterfaceRpc__get__phase__helper_1_1Command.html",
"compiler_8h.html#a0963dc585cff833dfa5d609818992664",
"depthCameraDriver_8cpp.html",
"dir_6da24729687d77b93fd1876d938b732e.html",
"dir_d9e07034fb1892df8a612764c49f5dbe.html",
"executable_8cpp_source.html",
"frameTransformGet__nwc__ros2_8cpp.html",
"globals_g.html",
"guis_2yarpview_2src_2main_8cpp_source.html",
"libYARP__name_2src_2yarp_2name_2all_8h.html",
"math_8cpp.html#a3b67b8295c7d01757e8ced2bcfb095f0",
"namespaceyarp_1_1dev.html#a488f005d19aa631a87bee4fc2cba0c2cac0131078a7f2cb99b32501fe357539dd",
"namespaceyarp_1_1manager.html#ab9c21ddb0951be7e807977400e676e7c",
"namespaceyarp_1_1sig.html#a7d63bc4c0fdeb0b0d8f17ca1e5295d8a",
"os_2simple_sender_2simple_sender_8cpp-example.html",
"realsense2Driver_8cpp.html#abd5cacc895f9f160ee82e1873252faa4",
"return__get__speed_8h_source.html",
"startdlg_8h.html",
"structJoypadControl_1_1JoyPort.html#ac552a52b47880438793b3e18ead04fef",
"structVideo__params.html#aa437ec2f2c83a3e2bed755cb8e535924",
"structswig__type__info.html#a07df4bedf85be77b23756b531b60e0dd",
"structyarp_1_1manager_1_1__LoadAvg.html#a72a97608d6c6bf6d89ba053d1fd47f85",
"structyarp_1_1sig_1_1DataNormalNoCurvature.html#a3b18655d352bc2bfe2a578997b9486ef",
"structyarp_1_1sig_1_1utils_1_1PCL__ROI.html#a573729c42400bfedb0df5840fac58dab",
"testControlBrigthness_8cpp.html#a7e7c19563d6c07b9e8dde970de0d7fd9",
"v2_3_68.html#autotoc_md188",
"v3_10_0.html#autotoc_md427",
"v3_4_1.html#autotoc_md747",
"v3_7_1.html",
"yarp-git-master-build_2src_2libYARP__conf_2src_2yarp_2conf_2api_8h.html#a49ebc38ff7a194978f07051477699da8",
"yarp_protocol.html#proto_shmem",
"yarpmotorgui_2mainwindow_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';