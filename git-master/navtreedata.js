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
      [ "YARP <yarp-4.0> (UNRELEASED)", "yarp_4_0.html", [
        [ "YARP <yarp-4.0.> Release Notes", "yarp_4_0.html#autotoc_md90", [
          [ "New Features", "yarp_4_0.html#autotoc_md91", [
            [ "Devices", "yarp_4_0.html#autotoc_md92", null ],
            [ "libYARP_sig", "yarp_4_0.html#autotoc_md93", null ],
            [ "PortMonitors", "yarp_4_0.html#autotoc_md94", null ]
          ] ],
          [ "Deprecations and removals", "yarp_4_0.html#autotoc_md95", [
            [ "Devices", "yarp_4_0.html#autotoc_md96", null ]
          ] ],
          [ "Breaking Changes", "yarp_4_0.html#autotoc_md97", [
            [ "Devices", "yarp_4_0.html#autotoc_md98", null ],
            [ "libYARP_sig", "yarp_4_0.html#autotoc_md99", null ],
            [ "libYARP_os", "yarp_4_0.html#autotoc_md100", null ]
          ] ]
        ] ]
      ] ],
      [ "YARP <yarp-3.12> (2025-06-04)", "yarp_3_12.html", [
        [ "YARP <yarp-3.12> Release Notes", "yarp_3_12.html#autotoc_md493", [
          [ "New Features", "yarp_3_12.html#autotoc_md494", [
            [ "Thrift", "yarp_3_12.html#autotoc_md495", null ],
            [ "Library", "yarp_3_12.html#autotoc_md496", [
              [ "<tt>libYARP_os</tt>", "yarp_3_12.html#autotoc_md497", null ]
            ] ],
            [ "Devices", "yarp_3_12.html#autotoc_md498", null ],
            [ "yarprobotinterface", "yarp_3_12.html#autotoc_md499", null ],
            [ "yarpmotorgui", "yarp_3_12.html#autotoc_md500", null ]
          ] ],
          [ "Breaking Changes", "yarp_3_12.html#autotoc_md501", [
            [ "Devices", "yarp_3_12.html#autotoc_md503", null ]
          ] ],
          [ "Other", "yarp_3_12.html#autotoc_md504", null ],
          [ "Contributors", "yarp_3_12.html#autotoc_md505", null ]
        ] ]
      ] ],
      [ "YARP ChangeLog", "changelog.html", [
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
        [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md488", [
            [ "Fixes", "v3_11_2.html#autotoc_md489", [
              [ "GUIs", "v3_11_2.html#autotoc_md490", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md491", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md492", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md484", [
            [ "Changes", "v3_11_1.html#autotoc_md485", [
              [ "Compiler features", "v3_11_1.html#autotoc_md486", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md487", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md465", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md466", [
              [ "Library", "v3_11_0.html#autotoc_md467", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md468", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md469", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md470", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md471", null ],
            [ "New Features", "v3_11_0.html#autotoc_md472", [
              [ "devices", "v3_11_0.html#autotoc_md473", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md474", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md475", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md476", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md477", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md478", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md479", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md480", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md481", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md482", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md483", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md461", [
            [ "Fixes", "v3_10_1.html#autotoc_md462", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md463", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md464", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md434", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md435", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md436", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md437", null ],
            [ "New Features", "v3_10_0.html#autotoc_md438", [
              [ "Carriers", "v3_10_0.html#autotoc_md440", null ],
              [ "Devices", "v3_10_0.html#autotoc_md441", [
                [ "Docker", "v3_10_0.html#autotoc_md439", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md442", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md443", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md444", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md445", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md446", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md447", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md448", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md449", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md450", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md451", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md452", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md453", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md454", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md455", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md456", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md457", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md458", [
                [ "Python", "v3_10_0.html#autotoc_md459", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md460", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1122", [
            [ "Fixes", "v3_9_1.html#autotoc_md1123", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1124", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1125", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1126", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1127", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1128", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1129", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1130", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1131", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1103", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1104", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1105", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1106", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1107", [
              [ "Docker", "v3_9_0.html#autotoc_md1108", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1109", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1110", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1111", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1112", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1113", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1114", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1115", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1116", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1117", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1118", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1119", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1120", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1121", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1094", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1095", [
              [ "tools", "v3_8_1.html#autotoc_md1096", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1097", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1098", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1099", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1100", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1101", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1102", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1053", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1054", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1055", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1056", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1057", [
              [ "Libraries", "v3_8_0.html#autotoc_md1058", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1059", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1060", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1061", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1062", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1063", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1064", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1065", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1066", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1067", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1068", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1069", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1070", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1071", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1072", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1073", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1074", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1075", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1076", null ],
              [ "Other", "v3_8_0.html#autotoc_md1077", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1078", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1079", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1080", [
              [ "bindings", "v3_8_0.html#autotoc_md1081", null ],
              [ "devices", "v3_8_0.html#autotoc_md1082", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1083", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1084", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1085", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1086", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1087", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1088", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1089", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1090", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1091", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1092", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1093", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1045", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1046", [
              [ "Documentation", "v3_7_2.html#autotoc_md1047", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1048", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1049", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1050", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1051", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1052", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1036", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1037", [
              [ "CMake", "v3_7_1.html#autotoc_md1038", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1039", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1040", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1041", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1042", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1043", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1044", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1011", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1012", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1013", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1014", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1015", [
              [ "Libraries", "v3_7_0.html#autotoc_md1016", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1017", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1020", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1021", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1022", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1023", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1024", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1025", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1026", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1027", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1028", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1029", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1030", [
              [ "Catch2", "v3_7_0.html#autotoc_md1031", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1032", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1033", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1034", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1035", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md954", [
            [ "Important Changes", "v3_6_0.html#autotoc_md955", [
              [ "Dependencies", "v3_6_0.html#autotoc_md956", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md957", [
              [ "Devices", "v3_6_0.html#autotoc_md958", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md959", [
              [ "Libraries", "v3_6_0.html#autotoc_md960", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md961", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md962", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md968", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md969", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md979", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md980", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md981", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md982", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md983", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md984", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md985", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md986", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md987", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md988", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md989", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md990", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md991", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md992", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md993", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md994", null ],
              [ "Tools", "v3_6_0.html#autotoc_md995", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md996", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md997", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md998", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md999", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1000", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1001", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1002", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1003", [
              [ "Build System", "v3_6_0.html#autotoc_md1004", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1005", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1006", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1007", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1008", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1009", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1010", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md908", [
            [ "New Features", "v3_5_1.html#autotoc_md909", [
              [ "Libraries", "v3_5_1.html#autotoc_md910", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md911", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md912", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md913", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md914", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md918", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md919", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md920", null ],
              [ "Devices", "v3_5_1.html#autotoc_md921", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md922", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md923", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md924", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md925", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md926", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md927", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md928", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md929", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md930", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md931", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md932", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md933", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md934", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md935", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md936", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md937", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md938", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md939", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md940", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md941", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md942", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md943", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md944", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md945", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md946", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md947", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md948", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md949", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md950", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md951", [
                [ "Python", "v3_5_1.html#autotoc_md952", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md953", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md806", [
            [ "Important Changes", "v3_5_0.html#autotoc_md807", [
              [ "Dependencies", "v3_5_0.html#autotoc_md808", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md809", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md810", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md812", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md813", [
              [ "Libraries", "v3_5_0.html#autotoc_md814", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md815", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md816", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md828", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md830", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md833", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md834", null ],
              [ "Devices", "v3_5_0.html#autotoc_md835", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md836", [
              [ "Libraries", "v3_5_0.html#autotoc_md837", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md838", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md839", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md840", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md850", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md856", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md865", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md867", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md868", null ],
              [ "Devices", "v3_5_0.html#autotoc_md869", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md870", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md871", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md872", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md873", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md874", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md875", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md876", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md877", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md878", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md879", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md880", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md881", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md882", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md883", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md884", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md885", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md886", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md887", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md888", [
              [ "Carriers", "v3_5_0.html#autotoc_md889", null ],
              [ "Devices", "v3_5_0.html#autotoc_md890", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md891", [
                [ "Python", "v3_5_0.html#autotoc_md892", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md893", [
              [ "Libraries", "v3_5_0.html#autotoc_md894", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md895", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md898", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md899", null ],
              [ "Devices", "v3_5_0.html#autotoc_md900", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md901", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md902", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md903", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md904", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md905", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md906", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md907", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md791", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md792", null ],
            [ "Build System", "v3_4_6.html#autotoc_md793", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md794", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md795", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md796", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md797", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md798", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md799", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md800", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md801", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md802", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md803", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md804", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md805", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md783", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md784", [
              [ "Libraries", "v3_4_5.html#autotoc_md785", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md786", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md788", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md789", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md790", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md772", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md773", [
              [ "Build System", "v3_4_4.html#autotoc_md774", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md775", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md776", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md777", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md778", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md779", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md780", [
                [ "Python", "v3_4_4.html#autotoc_md781", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md782", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md761", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md762", [
              [ "Libraries", "v3_4_3.html#autotoc_md763", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md764", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md765", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md766", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md767", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md768", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md769", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md770", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md771", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md740", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md741", [
              [ "Build System", "v3_4_2.html#autotoc_md742", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md743", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md744", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md746", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md747", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md750", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md751", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md752", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md753", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md754", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md755", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md756", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md757", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md758", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md759", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md760", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md722", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md723", [
              [ "Build System", "v3_4_1.html#autotoc_md724", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md725", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md726", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md728", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md730", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md731", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md732", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md733", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md734", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md735", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md736", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md737", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md738", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md739", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md647", [
            [ "Important Changes", "v3_4_0.html#autotoc_md648", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md649", [
              [ "Build System", "v3_4_0.html#autotoc_md650", [
                [ "os", "v3_4_0.html#autotoc_md652", null ],
                [ "dev", "v3_4_0.html#autotoc_md659", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md660", null ],
              [ "Tools", "v3_4_0.html#autotoc_md661", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md663", [
              [ "Build System", "v3_4_0.html#autotoc_md664", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md667", [
                [ "conf", "v3_4_0.html#autotoc_md668", null ],
                [ "os", "v3_4_0.html#autotoc_md669", null ],
                [ "sig", "v3_4_0.html#autotoc_md677", null ],
                [ "math", "v3_4_0.html#autotoc_md680", null ],
                [ "dev", "v3_4_0.html#autotoc_md681", null ],
                [ "logger", "v3_4_0.html#autotoc_md682", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md683", null ],
              [ "Devices", "v3_4_0.html#autotoc_md684", null ],
              [ "Tools", "v3_4_0.html#autotoc_md699", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md702", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md708", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md709", [
              [ "Libraries", "v3_4_0.html#autotoc_md710", [
                [ "os", "v3_4_0.html#autotoc_md711", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md712", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md713", null ],
              [ "Devices", "v3_4_0.html#autotoc_md714", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md715", [
              [ "Libraries", "v3_4_0.html#autotoc_md716", [
                [ "os", "v3_4_0.html#autotoc_md717", null ],
                [ "sig", "v3_4_0.html#autotoc_md719", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md721", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md628", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md629", [
              [ "Build System", "v3_3_3.html#autotoc_md630", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md631", [
                [ "os", "v3_3_3.html#autotoc_md632", null ],
                [ "dev", "v3_3_3.html#autotoc_md636", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md637", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md644", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md646", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md621", [
            [ "Contributors", "v3_3_2.html#autotoc_md627", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md608", [
            [ "Important Changes", "v3_3_1.html#autotoc_md609", [
              [ "Dependencies", "v3_3_1.html#autotoc_md610", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md611", [
              [ "Libraries", "v3_3_1.html#autotoc_md612", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md613", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md614", [
                [ "grabberDual", "v3_3_1.html#autotoc_md615", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md616", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md617", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md618", [
                [ "Perl", "v3_3_1.html#autotoc_md619", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md620", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md583", [
            [ "Important Changes", "v3_3_0.html#autotoc_md584", [
              [ "Dependencies", "v3_3_0.html#autotoc_md585", null ],
              [ "Build System", "v3_3_0.html#autotoc_md586", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md587", [
                [ "YARP_os", "v3_3_0.html#autotoc_md588", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md589", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md590", [
              [ "Build System", "v3_3_0.html#autotoc_md591", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md592", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md593", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md594", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md595", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md596", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md597", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md600", null ],
              [ "devices", "v3_3_0.html#autotoc_md602", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md603", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md607", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md574", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md575", [
              [ "Build System", "v3_2_2.html#autotoc_md576", null ],
              [ "Devices", "v3_2_2.html#autotoc_md577", null ],
              [ "Tools", "v3_2_2.html#autotoc_md580", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md582", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md561", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md562", [
              [ "Carriers", "v3_2_1.html#autotoc_md563", null ],
              [ "Devices", "v3_2_1.html#autotoc_md565", null ],
              [ "Tools", "v3_2_1.html#autotoc_md567", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md570", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md573", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md551", [
            [ "Important Changes", "v3_2_0.html#autotoc_md552", [
              [ "Dependencies", "v3_2_0.html#autotoc_md553", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md554", null ],
              [ "Devices", "v3_2_0.html#autotoc_md555", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md556", [
              [ "Build System", "v3_2_0.html#autotoc_md557", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md558", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md559", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md560", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md543", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md544", [
              [ "CMake", "v3_1_2.html#autotoc_md545", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md546", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md547", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md548", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md549", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md550", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md521", [
            [ "New Features", "v3_1_1.html#autotoc_md522", [
              [ "Build System", "v3_1_1.html#autotoc_md523", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md524", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md525", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md526", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md527", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md528", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md529", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md530", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md531", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md532", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md533", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md534", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md535", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md536", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md537", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md538", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md539", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md540", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md541", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md542", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md506", [
            [ "New Features", "v3_1_0.html#autotoc_md507", [
              [ "Libraries", "v3_1_0.html#autotoc_md508", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md509", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md510", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md511", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md512", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md513", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md514", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md515", [
                [ "yarp", "v3_1_0.html#autotoc_md516", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md517", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md518", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md519", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md520", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md406", [
            [ "Important Changes", "v3_0_1.html#autotoc_md407", null ],
            [ "New Features", "v3_0_1.html#autotoc_md409", [
              [ "Libraries", "v3_0_1.html#autotoc_md410", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md411", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md412", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md413", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md414", [
              [ "Build System", "v3_0_1.html#autotoc_md415", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md416", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md417", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md418", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md419", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md420", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md421", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md422", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md423", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md424", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md425", [
                [ "yarpscope", "v3_0_1.html#autotoc_md426", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md427", [
                [ "rplidar2", "v3_0_1.html#autotoc_md428", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md429", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md430", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md431", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md432", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md433", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md370", [
            [ "Important Changes", "v3_0_0.html#autotoc_md371", [
              [ "Build System", "v3_0_0.html#autotoc_md372", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md373", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md374", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md375", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md376", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md377", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md378", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md379", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md380", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md381", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md382", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md383", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md384", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md385", [
              [ "Build System", "v3_0_0.html#autotoc_md386", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md387", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md388", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md389", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md390", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md391", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md392", null ],
              [ "Tools", "v3_0_0.html#autotoc_md393", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md394", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md395", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md396", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md397", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md398", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md399", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md400", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md401", [
              [ "Libraries", "v3_0_0.html#autotoc_md402", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md403", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md404", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md405", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md348", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md349", [
              [ "Build System", "v2_3_72_1.html#autotoc_md350", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md351", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md352", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md353", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md354", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md355", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md356", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md357", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md358", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md359", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md360", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md361", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md362", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md363", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md364", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md365", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md366", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md367", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md321", [
            [ "Important Changes", "v2_3_72.html#autotoc_md322", [
              [ "Libraries", "v2_3_72.html#autotoc_md323", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md324", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md325", [
              [ "Libraries", "v2_3_72.html#autotoc_md326", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md327", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md328", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md329", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md330", null ],
              [ "Devices", "v2_3_72.html#autotoc_md331", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md332", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md333", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md334", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md335", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md336", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md337", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md338", [
                [ "Java", "v2_3_72.html#autotoc_md339", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md340", [
              [ "Libraries", "v2_3_72.html#autotoc_md341", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md342", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md343", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md344", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md345", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md346", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md347", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md308", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md309", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md310", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md311", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md312", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md313", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md314", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md315", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md316", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md317", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md318", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md319", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md320", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md296", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md297", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md298", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md299", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md300", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md301", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md302", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md303", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md304", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md305", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md306", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md307", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md247", [
            [ "Important Changes", "v2_3_70.html#autotoc_md248", [
              [ "System Configuration", "v2_3_70.html#autotoc_md249", null ],
              [ "Build System", "v2_3_70.html#autotoc_md250", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md251", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md252", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md253", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md254", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md255", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md256", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md257", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md258", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md259", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md260", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md261", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md262", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md263", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md264", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md265", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md266", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md267", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md268", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md269", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md270", null ],
              [ "Devices", "v2_3_70.html#autotoc_md271", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md272", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md273", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md274", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md275", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md276", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md277", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md278", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md279", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md280", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md281", [
              [ "Libraries", "v2_3_70.html#autotoc_md282", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md283", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md284", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md285", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md286", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md287", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md288", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md289", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md290", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md291", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md292", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md293", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md294", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md295", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md209", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md210", [
              [ "Build System", "v2_3_68_1.html#autotoc_md211", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md212", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md213", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md214", [
              [ "Build System", "v2_3_68_1.html#autotoc_md215", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md216", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md217", [
              [ "Build System", "v2_3_68_1.html#autotoc_md218", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md219", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md220", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md221", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md222", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md223", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md224", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md225", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md226", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md227", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md228", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md229", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md230", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md231", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md232", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md233", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md234", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md235", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md236", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md237", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md238", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md239", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md240", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md241", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md242", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md243", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md244", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md245", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md184", [
            [ "Important Changes", "v2_3_68.html#autotoc_md185", [
              [ "Dependencies", "v2_3_68.html#autotoc_md186", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md187", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md188", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md189", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md190", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md191", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md192", null ],
              [ "Tools", "v2_3_68.html#autotoc_md193", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md194", null ],
              [ "Devices", "v2_3_68.html#autotoc_md195", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md196", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md197", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md198", null ],
              [ "Devices", "v2_3_68.html#autotoc_md199", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md200", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md201", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md202", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md203", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md204", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md205", null ],
              [ "Devices", "v2_3_68.html#autotoc_md206", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md207", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md208", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md176", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md177", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md178", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md179", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md180", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md181", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md182", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md183", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md163", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md164", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md165", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md166", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md167", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md168", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md169", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md170", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md171", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md172", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md173", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md174", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md175", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md154", [
            [ "Important Changes", "v2_3_66.html#autotoc_md155", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md156", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md157", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md158", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md159", null ],
              [ "Modules", "v2_3_66.html#autotoc_md160", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md161", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md162", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md139", [
            [ "Important Changes", "v2_3_65.html#autotoc_md140", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md141", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md142", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md143", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md144", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md145", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md146", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md147", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md148", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md149", null ],
              [ "Devices", "v2_3_65.html#autotoc_md150", null ],
              [ "Tools", "v2_3_65.html#autotoc_md151", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md152", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md153", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md138", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md137", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md136", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md135", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md134", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md129", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md128", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md127", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md126", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md124", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md123", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md122", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md121", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md120", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md369", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md368", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md246", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md133", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md132", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md131", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md130", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md125", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md119", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md118", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md117", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md101", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1132", [
          [ "C++", "contributing.html#autotoc_md1133", [
            [ "Header guards", "contributing.html#autotoc_md1134", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1135", null ],
          [ "Git", "contributing.html#autotoc_md1136", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1137", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1138", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1140", null ],
          [ "Example", "contributing.html#autotoc_md1141", null ],
          [ "Terminology", "contributing.html#autotoc_md1142", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1143", [
          [ "Deprecated Features", "contributing.html#autotoc_md1144", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1145", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1146", null ]
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
"CameraVocabs_8h.html#a18471ecdb8d9f0f154079ca76d400294",
"ControlBoardVocabs_8h.html#a6edd834b773b07036ccae85e0f8b3858",
"FakeBot__ParamsParser_8cpp.html",
"FakeSpeechTranscription_8h_source.html",
"GenericVocabs_8h.html#a9a0ecc9d9f099b93824cbcda4f7b4216",
"ICurrentControlTest_8h.html",
"ILLMServerImpl_8h.html",
"IRangefinder2DTest_8cpp.html",
"Image_8copyPixels_8cpp.html#a4a0a6df94cc65247453e30d67979bad5",
"ImplementPWMControl_8cpp_source.html",
"Log_8cpp.html",
"Math_8h.html#a137c2cadeca2009e2d75bc39d35a4113",
"MultipleAnalogSensorsClient_8h_source.html",
"NormRand_8h.html",
"PointCloudTypes_8h.html#ac143e7160c4dfde2e47ecf07f59e9716a12099c29aacd30f7cc318f7de3aaffef",
"RFModuleFactory_8h_source.html",
"RgbdToPointCloudSensor__nws__ros2_8h.html#a658a8fa0608648b54462a143dc56c92a",
"SerialServoBoard_8h.html#addf96501d4e14e19f2affb358da252e1",
"TextCarrier_8h_source.html",
"Vector_8cpp.html#aacb63cdb74d565acd8c443ddf9a50a32",
"binexparser_8h.html",
"classAudioPlayerWrapper.html#a0e8381e11d633881890de4006297c3af",
"classBattery__nws__ros2__ParamsParser.html#aa95f7bddaaf0dea5d7f7b5a309c2c588",
"classBuilderScene.html#a32b5e27d67d8d61956c507095c3bea33",
"classControlBoardMsgs__dummyTest__RPC__helper_1_1Reply.html#ae5cfdf8011dcead6462255194b18da6a",
"classControlBoard__nws__ros2__ParamsParser.html#ad26d3af96a17ee9f870d9b3947f3a03a",
"classDrivers_1_1Private.html#aa9d5b0dfead70a96c3e26aec4b2daa21",
"classFakeAnalogSensor.html#ae32de04f38d7343151ee30b33dc5bd75",
"classFakeBatteryService__getBatteryTemperature__helper.html",
"classFakeBatteryService__setBatteryVoltage__helper.html#a25fc4221eb398f80affca65b9eb27676",
"classFakeDepthCameraDriver.html#a0fe05436ba42ee8c8691af5982a8a08a",
"classFakeFrameGrabber__ParamsParser.html#a780b7165baa1c27d32fc0efa97f4285d",
"classFakeLaser.html#a226d5c18dbe343babbd3cc5eccf77744",
"classFakeLaserWithMotor.html#af62ceb53f9be7728742741da50173de3ab49e5ae5c9b93e56cf8cf0ebac86dfe2",
"classFakeMotionControl.html#a4503f0a8515b53124ec8bb037f092680",
"classFakeMotionControl.html#ae0db03cdd5d367446dd5316a37908574",
"classFakeNavigation__ParamsParser.html#a69f66342b8d77256d7b1f0c8dff7a7a0",
"classFakeSpeaker__ParamsParser.html#a90a852b5175458b9fd5ab8bb0814961f",
"classForwardingCarrier.html#ad82a8df9bfe928819a0113f6546ec52e",
"classFrameTransformClient.html#a2728a004ed695ad97459809da86565b0",
"classFrameTransformStorage.html#a1a86db1d024627d9f35f35a3bfbc5108",
"classFrameWriter__nws__yarp__ParamsParser.html#a14b79cfce3a836cf14eee529933ed875",
"classGoogleSpeechTranscription__ParamsParser.html#a272d3edba876c09d7bb55a245b8ab9ba",
"classIAudioGrabberMsgs__getSound__RPC__helper.html#aa77772be92ad952ec5170fa53768b982",
"classIBatteryMsgs.html#ac0ac2211afb32be3ee4c47a201915670",
"classIFrameGrabberControlsMock.html#a8b8f0342869104f24d3ec4984106550f",
"classILocalization2DMsgs__set__initial__pose2__RPC__helper.html#ad934eda8ceb0779ebf82ec0405757651",
"classIMap2DMsgs__clear__all__maps__RPC__helper_1_1Reply.html#afa485dc0948038ff7ef98f30c5b18a11",
"classIMap2DMsgs__getRemoteProtocolVersion__helper.html#aca7f0a1b48349bda9806f83eb8640382",
"classIMap2DMsgs__get__map__RPC__helper.html#ae2f52b13b3e4b6f46b99252f1d917f64",
"classIMap2DMsgs__remove__map__RPC__helper_1_1Command.html",
"classIMap2DMsgs__store__area__RPC__helper.html#aad3087fa8d005ce11cc14ddfc65745ad",
"classINavigation2DMsgs__follow__path__RPC__helper.html#ac5817a210f00967d01639ebccab1ccb5",
"classINavigation2DMsgs__get__navigation__status__RPC__helper_1_1Command.html#a0f46afa3f6ec3cd4814650ee2d150475",
"classINavigation2DMsgs__resume__navigation__RPC__helper_1_1Command.html#a794313a5b3bdd5bfe556761006b0cc27",
"classIRangefinder2DMsgs__getDistanceRange__RPC__helper.html#afbf0be43f178988e82bc78d13037aeeb",
"classIRangefinder2DMsgs__setScanRate__RPC__helper_1_1Command.html#a01ceb664c00f91433d0736f36eba7f32",
"classISerialMsgs__flush__helper.html#a9bf1a73fe9be7c27cb112265c3e69652",
"classISpeechSynthesizerMsgs__set__language__helper_1_1Command.html#afcc1f12ac8611f0e128a3c843e59f9ed",
"classISpeechTranscriptionMsgs__set__language__helper_1_1Reply.html#ae396eaf0a660dbf8c06e38d47a4b3617",
"classJointItem.html#ab7be145f8def7a4207dc00db73e350af",
"classLaserFromExternalPort.html#a30d43605ddc680d941bcb9fcf9296ae1",
"classLogModel.html#a2f9c5e0ae33c9263a2aaeb1d361308f8",
"classMap2DStorage__ParamsParser.html#aaad27753b17001680c941aa95e87bdd2",
"classMjpegCarrier.html#a89f772b2c16d69708490fd793080d355",
"classModesTreeManager.html#ad4ff41d59e44ef0c06affd62054f4c47",
"classMultipleAnalogSensorsClient.html#a5bb3338e9458ed4e69609180723b9da4",
"classNavigation2D__nwc__yarp.html#a3facbac8f2e7be4f88264bfeb0433277",
"classNop.html#a3ff12f8d25e6f5db383857a9b14800ec",
"classParameter.html#ab8fe977950b8f288287d0e9357c8bd37",
"classPortAudioDeviceDriver.html#a7b474516d1d33d13959ec09e3600a22c",
"classPropertiesTable.html#a5a3d80af04761a0d30d25f5548406203",
"classRGBDSensorClient.html#a44cf8a1de65da0b53df92b9a930c7565",
"classRangefinder2D__nwc__ros2.html#ab5babc9ac430aae36a7ae40620cbb724",
"classRemoteControlBoard.html#a0c413f98fc50651958f3f163c61f2799",
"classRemoteControlBoard__ParamsParser.html#a41f3e78b249313a897c2a4ebd5da6b2b",
"classRgbdToPointCloudSensor__nws__ros2.html#abb4aed01669e03f115159d62ba7edcea",
"classRunReadWrite.html#a3bd31a9ab20b34b907d57fed298582c5",
"classSequenceWindow.html#ab546f6f914414ad05270a507898eb134",
"classSoundFilter__resample.html",
"classStubDriver.html#a258a6a26c6c8ac06a200ef8ce853d631",
"classUSBCameraDriver.html#afbdab6f13614d979e64b2f03cf037d5a",
"classWhisperDevice.html#a3b6f0a67f086d6bde4babd3081e88d57",
"classargusCameraDriver__ParamsParser.html#ad435227b16812dd5945c8a5e00bbf790",
"classrealsense2Driver.html#afe86ffba00e1408be6131be79b6e60be",
"classreturn__getSound.html#aa544245be88efb59e6cfa0cd8ecf05c9",
"classreturn__get__map__names.html#a1da9cc1065428352b14949b3e9538fca",
"classscriptModule.html#aad914b60be15bde7f8f7a5ec99d2c29b",
"classyarpActionsPlayer__IDL__reset__helper.html#a9cf9ec7f30712197b3887499c6debf08",
"classyarp_1_1dev_1_1AudioPlayerDeviceBase.html#ae883cb6fc5508f12a671e46d69770b71",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a70fcbe808912ecbcc65fdcee1843620e",
"classyarp_1_1dev_1_1Drivers.html#a0b6f82983314573c84965979aa1d948d",
"classyarp_1_1dev_1_1IControlCalibrationRaw.html#a60ae10c593a8d1a93f081da8a3c89f17",
"classyarp_1_1dev_1_1IGazeControl.html#a3a10d392ef7411f7a329552a4b02c84c",
"classyarp_1_1dev_1_1ILinearVelocitySensors.html#a4c09a63040a57529a83ed9ac4dd7ea07",
"classyarp_1_1dev_1_1IRGBDSensor.html#a5c82ff8d290e347baab45af7da81b6e1",
"classyarp_1_1dev_1_1IVisualServoing.html#a454ce72b6feb3736ff5ea8a5250ffeac",
"classyarp_1_1dev_1_1ImplementEncodersTimed.html#a285fe902f48c14aae62bd81bc65f9919",
"classyarp_1_1dev_1_1ImplementPidControl.html#a421e939433d8127028774f97fd2f7cc3",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#aa8ba23cdde848d2bbb4193382f5712d0",
"classyarp_1_1dev_1_1MobileBaseVelocity.html#af6a52440829123b8229a50f583fb2b27",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#a67cd095a509ff29b51118ff562615882",
"classyarp_1_1dev_1_1Pid.html#a8c423ccfba850eb0fd27ad6dccf4caac",
"classyarp_1_1dev_1_1StubImplPositionControlRaw.html#ace8d1d44973256c3dbb968082d9cdd22",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__ask__helper_1_1Command.html#a7d4d2a4ea9a7f9943937896902dc3444",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__refreshConversation__helper.html#ad5c15a4bb36aeb35ce3122e5bff3d510",
"classyarp_1_1manager_1_1Application.html#a1f2b25ca1c116ca2f85c8e8a07f6c178",
"classyarp_1_1manager_1_1Broker.html#a405d24109daf95a6d73121cbdeed96e4",
"classyarp_1_1manager_1_1Dying.html#ac812cb75b50c4916426a143d6e45029f",
"classyarp_1_1manager_1_1GenericResource.html#a4c8e3bc378edf640a666433ab2b72cc4",
"classyarp_1_1manager_1_1Link.html#a3de9f3eefce291cb20574d70c788e380",
"classyarp_1_1manager_1_1Manager.html#afc3211ded537c89325a90be24108999b",
"classyarp_1_1manager_1_1ModuleLoader.html#a46fb76089aaf4f381223cb6219c62d9f",
"classyarp_1_1manager_1_1ResourceLoader.html#a72e9189bce2d015dbc84abcad875cac4",
"classyarp_1_1manager_1_1YarpBroker.html#a5e592d4af9b463c5863c5b8ce83fd5e8",
"classyarp_1_1math_1_1Vec2D.html#a51838e7c296ef4f7608276110807a71a",
"classyarp_1_1os_1_1AbstractContactable.html#a6ce3f9cd3a7a6c50a87ab0f9d61ce1c3",
"classyarp_1_1os_1_1Carrier.html#aa8bd0df9aab08d985972c36adc176ba5",
"classyarp_1_1os_1_1ConnectionState.html#ac0d66b2849d0d9d8b16ae1b92faefa49",
"classyarp_1_1os_1_1Face.html#a2abf292d39783b9c9f56779856bb23f9",
"classyarp_1_1os_1_1LogStream.html#a101d2dde6a480089b96d381f7fc9d549",
"classyarp_1_1os_1_1NameSpace.html#a9245431687586060203938ef906d9881",
"classyarp_1_1os_1_1NullConnectionReader.html#acf758e827445acfbaa4194cf43ec6b1a",
"classyarp_1_1os_1_1Port.html#a7b4eb018faba3837d50fffee0ea722ef",
"classyarp_1_1os_1_1Property.html#abfd96557e2cebc3473e297afbdcf412e",
"classyarp_1_1os_1_1ResourceFinderOptions.html#a63957fdaafd3be9ad6ddbfd1aaf22379ae72a5517bbd21cd25c7072218ead404f",
"classyarp_1_1os_1_1SizedWriter.html#a2380f0d4923cada17eccbd56715db797",
"classyarp_1_1os_1_1Timer.html#a646a14c54028c48b4be2085d43349d21",
"classyarp_1_1os_1_1Value.html#a7a977b624f958bba27c8c69b3633984e",
"classyarp_1_1os_1_1idl_1_1UnwrappedView.html#afce48b2fe509980bfaa382576e547220",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a2822e099b7035fc02b4d5d1c2f244a70",
"classyarp_1_1os_1_1impl_1_1ConnectionRecorder.html#a9bc5670b90f6ffb0ea82e3176ea6e8e6",
"classyarp_1_1os_1_1impl_1_1HttpTwoWayStream.html#ae5ef4d43af28066ff00f70dafba7f988",
"classyarp_1_1os_1_1impl_1_1NameClient.html#a0e173ae4c86dde52656c5defc047ecf1",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a51396c0243f5ab1cc01040b1788f831e",
"classyarp_1_1os_1_1impl_1_1PortCorePacket.html#afe279d0338f45fb6defecc4a027a15df",
"classyarp_1_1os_1_1impl_1_1Storable.html#a56d590b478dc8112725ddde16b8c4761",
"classyarp_1_1os_1_1impl_1_1StoreInt32.html#a1b2826d3c087aacd2b00a9c15559362b",
"classyarp_1_1os_1_1impl_1_1StreamConnectionReader.html#a006a3baefb43a1f3928afe3f0cd7e1b9",
"classyarp_1_1os_1_1impl_1_1posix_1_1TcpAcceptor.html#af284aa19a14081536edf2710bb371901",
"classyarp_1_1proto_1_1framegrabber_1_1DepthVisualParams__Forwarder.html#aa908377a5a1b9b9564a8296bcc43795e",
"classyarp_1_1robotinterface_1_1Device.html#a11e94bd45316b1400b9348f89e69b294",
"classyarp_1_1robotinterface_1_1Robot_1_1Private.html#a8f502867504c0f04aa9cc4ff4c89e64e",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV3_1_1Private.html#a7f023b4b1ac1d0da940a5e258c93ce6a",
"classyarp_1_1serversql_1_1impl_1_1NameServiceOnTriples.html#a31c02c681384c021cd085a04f85f55e4",
"classyarp_1_1serversql_1_1impl_1_1TripleSourceCreator.html#abf24aa1bb52d85be02e31d33b339aa89",
"classyarp_1_1sig_1_1LaserScan2D.html#a680ae547c9b2ee7af57975129fa524f1",
"classyarp_1_1sig_1_1VectorOf.html#a65e9fee37adbc925a186126ef68a7686",
"classyarpdataplayer__IDL__getFrame__helper.html#a023256eb17333c227aac67e1cdf7e4a5",
"classyarpdataplayer__IDL__setFrame__helper.html#a89a427fe050052575b75bb535747859d",
"classyarpdataplayer__console__IDL__forward__helper_1_1Command.html#a8c8d97e51e802474886319ee89385c01",
"classyarpdataplayer__console__IDL__load__helper_1_1Command.html#ad87566bfccf484ef940dc74ae6062502",
"classyarpdataplayer__console__IDL__setPortName__helper_1_1Reply.html#adee9c370bc5e5d22d31e2f49451b9bb5",
"classyarprobotinterfaceRpc__get__level__helper_1_1Reply.html",
"commons_8h.html#a119a15c25a144b5c76457d3702e02d40",
"dir_0443a2af9d2661954800632d0cea1220.html",
"dir_77676962c5ac58ce3a256a46cb93cb73.html",
"dir_e8cbd762e0a452d47d21b0e613b9777b.html",
"experimental_2Device_8h.html",
"functions_s.html",
"group__dev__impl__other.html#gaedeeb0e33153357281deebd82c36bfa1",
"index.html",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h.html#ae34e65f1d771570e88b7e2c80e870b7b",
"name_server.html#protocol_name_unregister",
"namespaceyarp_1_1dev_1_1tests.html#a7624adfe83554601cdfc0034e48f2cdd",
"namespaceyarp_1_1os_1_1idl.html",
"navigation2D__nwc__test_8cpp.html",
"port_power_2ex0501_raw_target_sender_8cpp-example.html",
"return__get__areas__list_8cpp.html",
"safe__manager_8cpp.html#ad369b34febd405acff978a058f35fa69",
"structFrameTransformServer__ParamsParser_1_1parser__version__type.html",
"structSDLJoypadImpl_1_1stick.html#abe908c7b6946e653e590212121bf5693",
"structmOptions.html#abd3aebc43067c2b45d932605aec50fa9",
"structyarp_1_1dev_1_1Nav2D_1_1Map2DLocation.html#ab4ba47ce23bbc2d1e5210a78292b9d6c",
"structyarp_1_1profiler_1_1NetworkProfilerBasic_1_1ProcessInfo.html#a97d063aafa929f413531eb18de4fdc96",
"structyarp_1_1sig_1_1DataXYZRGBA.html#a05ce81b582382bd90632e0e705738d8e",
"swigluarun_8h.html#ac24315f20782462ad057bf1c8309a616",
"v2_3_3.html#autotoc_md130",
"v2_3_72_1.html#autotoc_md360",
"v3_3_2.html#autotoc_md621",
"v3_6_0.html#autotoc_md955",
"xilinx-v4l2-controls_8h.html#ad55e723c414b8740b1998d91e2558444",
"yarp_data_dirs.html#datafiles_searchpolicy",
"yarpdataplayer__console__IDL_8cpp.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';