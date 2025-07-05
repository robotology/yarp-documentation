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
      [ "YARP <yarp-3.12> (2025-06-04)", "yarp_3_12.html", [
        [ "YARP <yarp-3.12> Release Notes", "yarp_3_12.html#autotoc_md469", [
          [ "New Features", "yarp_3_12.html#autotoc_md470", [
            [ "Thrift", "yarp_3_12.html#autotoc_md471", null ],
            [ "Library", "yarp_3_12.html#autotoc_md472", [
              [ "<tt>libYARP_os</tt>", "yarp_3_12.html#autotoc_md473", null ]
            ] ],
            [ "Devices", "yarp_3_12.html#autotoc_md474", null ],
            [ "yarprobotinterface", "yarp_3_12.html#autotoc_md475", null ],
            [ "yarpmotorgui", "yarp_3_12.html#autotoc_md476", null ]
          ] ],
          [ "Breaking Changes", "yarp_3_12.html#autotoc_md477", [
            [ "Devices", "yarp_3_12.html#autotoc_md479", null ]
          ] ],
          [ "Other", "yarp_3_12.html#autotoc_md480", null ],
          [ "Contributors", "yarp_3_12.html#autotoc_md481", null ]
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
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md464", [
            [ "Fixes", "v3_11_2.html#autotoc_md465", [
              [ "GUIs", "v3_11_2.html#autotoc_md466", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md467", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md468", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md460", [
            [ "Changes", "v3_11_1.html#autotoc_md461", [
              [ "Compiler features", "v3_11_1.html#autotoc_md462", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md463", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md441", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md442", [
              [ "Library", "v3_11_0.html#autotoc_md443", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md444", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md445", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md446", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md447", null ],
            [ "New Features", "v3_11_0.html#autotoc_md448", [
              [ "devices", "v3_11_0.html#autotoc_md449", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md450", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md451", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md452", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md453", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md454", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md455", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md456", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md457", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md458", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md459", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md437", [
            [ "Fixes", "v3_10_1.html#autotoc_md438", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md439", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md440", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md410", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md411", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md412", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md413", null ],
            [ "New Features", "v3_10_0.html#autotoc_md414", [
              [ "Carriers", "v3_10_0.html#autotoc_md416", null ],
              [ "Devices", "v3_10_0.html#autotoc_md417", [
                [ "Docker", "v3_10_0.html#autotoc_md415", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md418", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md419", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md420", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md421", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md422", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md423", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md424", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md425", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md426", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md427", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md428", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md429", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md430", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md431", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md432", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md433", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md434", [
                [ "Python", "v3_10_0.html#autotoc_md435", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md436", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1098", [
            [ "Fixes", "v3_9_1.html#autotoc_md1099", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1100", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1101", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1102", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1103", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1104", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1105", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1106", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1107", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1079", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1080", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1081", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1082", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1083", [
              [ "Docker", "v3_9_0.html#autotoc_md1084", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1085", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1086", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1087", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1088", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1089", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1090", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1091", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1092", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1093", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1094", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1095", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1096", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1097", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1070", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1071", [
              [ "tools", "v3_8_1.html#autotoc_md1072", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1073", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1074", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1075", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1076", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1077", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1078", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1029", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1030", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1031", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1032", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1033", [
              [ "Libraries", "v3_8_0.html#autotoc_md1034", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1035", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1036", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1037", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1038", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1039", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1040", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1041", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1042", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1043", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1044", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1045", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1046", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1047", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1048", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1049", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1050", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1051", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1052", null ],
              [ "Other", "v3_8_0.html#autotoc_md1053", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1054", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1055", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1056", [
              [ "bindings", "v3_8_0.html#autotoc_md1057", null ],
              [ "devices", "v3_8_0.html#autotoc_md1058", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1059", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1060", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1061", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1062", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1063", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1064", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1065", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1066", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1067", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1068", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1069", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1021", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1022", [
              [ "Documentation", "v3_7_2.html#autotoc_md1023", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1024", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1025", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1026", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1027", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1028", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1012", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1013", [
              [ "CMake", "v3_7_1.html#autotoc_md1014", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1015", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1016", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1017", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1018", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1019", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1020", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md987", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md988", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md989", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md990", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md991", [
              [ "Libraries", "v3_7_0.html#autotoc_md992", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md993", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md996", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md997", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md998", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md999", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1000", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1001", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1002", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1003", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1004", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1005", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1006", [
              [ "Catch2", "v3_7_0.html#autotoc_md1007", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1008", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1009", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1010", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1011", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md930", [
            [ "Important Changes", "v3_6_0.html#autotoc_md931", [
              [ "Dependencies", "v3_6_0.html#autotoc_md932", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md933", [
              [ "Devices", "v3_6_0.html#autotoc_md934", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md935", [
              [ "Libraries", "v3_6_0.html#autotoc_md936", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md937", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md938", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md944", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md945", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md955", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md956", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md957", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md958", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md959", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md960", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md961", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md962", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md963", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md964", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md965", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md966", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md967", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md968", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md969", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md970", null ],
              [ "Tools", "v3_6_0.html#autotoc_md971", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md972", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md973", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md974", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md975", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md976", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md977", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md978", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md979", [
              [ "Build System", "v3_6_0.html#autotoc_md980", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md981", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md982", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md983", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md984", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md985", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md986", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md884", [
            [ "New Features", "v3_5_1.html#autotoc_md885", [
              [ "Libraries", "v3_5_1.html#autotoc_md886", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md887", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md888", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md889", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md890", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md894", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md895", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md896", null ],
              [ "Devices", "v3_5_1.html#autotoc_md897", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md898", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md899", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md900", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md901", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md902", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md903", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md904", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md905", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md906", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md907", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md908", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md909", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md910", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md911", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md912", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md913", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md914", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md915", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md916", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md917", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md918", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md919", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md920", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md921", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md922", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md923", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md924", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md925", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md926", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md927", [
                [ "Python", "v3_5_1.html#autotoc_md928", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md929", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md782", [
            [ "Important Changes", "v3_5_0.html#autotoc_md783", [
              [ "Dependencies", "v3_5_0.html#autotoc_md784", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md785", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md786", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md788", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md789", [
              [ "Libraries", "v3_5_0.html#autotoc_md790", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md791", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md792", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md804", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md806", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md809", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md810", null ],
              [ "Devices", "v3_5_0.html#autotoc_md811", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md812", [
              [ "Libraries", "v3_5_0.html#autotoc_md813", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md814", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md815", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md816", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md826", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md832", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md841", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md843", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md844", null ],
              [ "Devices", "v3_5_0.html#autotoc_md845", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md846", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md847", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md848", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md849", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md850", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md851", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md852", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md853", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md854", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md855", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md856", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md857", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md858", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md859", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md860", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md861", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md862", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md863", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md864", [
              [ "Carriers", "v3_5_0.html#autotoc_md865", null ],
              [ "Devices", "v3_5_0.html#autotoc_md866", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md867", [
                [ "Python", "v3_5_0.html#autotoc_md868", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md869", [
              [ "Libraries", "v3_5_0.html#autotoc_md870", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md871", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md874", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md875", null ],
              [ "Devices", "v3_5_0.html#autotoc_md876", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md877", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md878", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md879", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md880", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md881", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md882", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md883", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md767", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md768", null ],
            [ "Build System", "v3_4_6.html#autotoc_md769", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md770", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md771", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md772", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md773", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md774", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md775", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md776", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md777", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md778", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md779", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md780", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md781", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md759", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md760", [
              [ "Libraries", "v3_4_5.html#autotoc_md761", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md762", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md764", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md765", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md766", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md748", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md749", [
              [ "Build System", "v3_4_4.html#autotoc_md750", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md751", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md752", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md753", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md754", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md755", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md756", [
                [ "Python", "v3_4_4.html#autotoc_md757", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md758", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md737", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md738", [
              [ "Libraries", "v3_4_3.html#autotoc_md739", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md740", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md741", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md742", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md743", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md744", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md745", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md746", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md747", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md716", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md717", [
              [ "Build System", "v3_4_2.html#autotoc_md718", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md719", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md720", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md722", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md723", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md726", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md727", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md728", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md729", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md730", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md731", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md732", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md733", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md734", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md735", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md736", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md698", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md699", [
              [ "Build System", "v3_4_1.html#autotoc_md700", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md701", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md702", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md704", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md706", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md707", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md708", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md709", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md710", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md711", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md712", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md713", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md714", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md715", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md623", [
            [ "Important Changes", "v3_4_0.html#autotoc_md624", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md625", [
              [ "Build System", "v3_4_0.html#autotoc_md626", [
                [ "os", "v3_4_0.html#autotoc_md628", null ],
                [ "dev", "v3_4_0.html#autotoc_md635", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md636", null ],
              [ "Tools", "v3_4_0.html#autotoc_md637", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md639", [
              [ "Build System", "v3_4_0.html#autotoc_md640", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md643", [
                [ "conf", "v3_4_0.html#autotoc_md644", null ],
                [ "os", "v3_4_0.html#autotoc_md645", null ],
                [ "sig", "v3_4_0.html#autotoc_md653", null ],
                [ "math", "v3_4_0.html#autotoc_md656", null ],
                [ "dev", "v3_4_0.html#autotoc_md657", null ],
                [ "logger", "v3_4_0.html#autotoc_md658", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md659", null ],
              [ "Devices", "v3_4_0.html#autotoc_md660", null ],
              [ "Tools", "v3_4_0.html#autotoc_md675", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md678", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md684", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md685", [
              [ "Libraries", "v3_4_0.html#autotoc_md686", [
                [ "os", "v3_4_0.html#autotoc_md687", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md688", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md689", null ],
              [ "Devices", "v3_4_0.html#autotoc_md690", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md691", [
              [ "Libraries", "v3_4_0.html#autotoc_md692", [
                [ "os", "v3_4_0.html#autotoc_md693", null ],
                [ "sig", "v3_4_0.html#autotoc_md695", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md697", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md604", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md605", [
              [ "Build System", "v3_3_3.html#autotoc_md606", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md607", [
                [ "os", "v3_3_3.html#autotoc_md608", null ],
                [ "dev", "v3_3_3.html#autotoc_md612", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md613", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md620", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md622", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md597", [
            [ "Contributors", "v3_3_2.html#autotoc_md603", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md584", [
            [ "Important Changes", "v3_3_1.html#autotoc_md585", [
              [ "Dependencies", "v3_3_1.html#autotoc_md586", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md587", [
              [ "Libraries", "v3_3_1.html#autotoc_md588", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md589", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md590", [
                [ "grabberDual", "v3_3_1.html#autotoc_md591", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md592", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md593", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md594", [
                [ "Perl", "v3_3_1.html#autotoc_md595", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md596", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md559", [
            [ "Important Changes", "v3_3_0.html#autotoc_md560", [
              [ "Dependencies", "v3_3_0.html#autotoc_md561", null ],
              [ "Build System", "v3_3_0.html#autotoc_md562", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md563", [
                [ "YARP_os", "v3_3_0.html#autotoc_md564", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md565", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md566", [
              [ "Build System", "v3_3_0.html#autotoc_md567", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md568", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md569", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md570", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md571", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md572", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md573", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md576", null ],
              [ "devices", "v3_3_0.html#autotoc_md578", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md579", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md583", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md550", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md551", [
              [ "Build System", "v3_2_2.html#autotoc_md552", null ],
              [ "Devices", "v3_2_2.html#autotoc_md553", null ],
              [ "Tools", "v3_2_2.html#autotoc_md556", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md558", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md537", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md538", [
              [ "Carriers", "v3_2_1.html#autotoc_md539", null ],
              [ "Devices", "v3_2_1.html#autotoc_md541", null ],
              [ "Tools", "v3_2_1.html#autotoc_md543", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md546", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md549", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md527", [
            [ "Important Changes", "v3_2_0.html#autotoc_md528", [
              [ "Dependencies", "v3_2_0.html#autotoc_md529", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md530", null ],
              [ "Devices", "v3_2_0.html#autotoc_md531", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md532", [
              [ "Build System", "v3_2_0.html#autotoc_md533", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md534", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md535", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md536", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md519", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md520", [
              [ "CMake", "v3_1_2.html#autotoc_md521", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md522", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md523", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md524", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md525", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md526", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md497", [
            [ "New Features", "v3_1_1.html#autotoc_md498", [
              [ "Build System", "v3_1_1.html#autotoc_md499", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md500", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md501", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md502", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md503", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md504", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md505", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md506", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md507", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md508", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md509", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md510", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md511", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md512", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md513", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md514", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md515", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md516", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md517", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md518", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md482", [
            [ "New Features", "v3_1_0.html#autotoc_md483", [
              [ "Libraries", "v3_1_0.html#autotoc_md484", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md485", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md486", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md487", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md488", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md489", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md490", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md491", [
                [ "yarp", "v3_1_0.html#autotoc_md492", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md493", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md494", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md495", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md496", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md382", [
            [ "Important Changes", "v3_0_1.html#autotoc_md383", null ],
            [ "New Features", "v3_0_1.html#autotoc_md385", [
              [ "Libraries", "v3_0_1.html#autotoc_md386", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md387", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md388", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md389", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md390", [
              [ "Build System", "v3_0_1.html#autotoc_md391", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md392", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md393", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md394", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md395", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md396", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md397", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md398", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md399", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md400", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md401", [
                [ "yarpscope", "v3_0_1.html#autotoc_md402", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md403", [
                [ "rplidar2", "v3_0_1.html#autotoc_md404", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md405", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md406", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md407", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md408", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md409", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md346", [
            [ "Important Changes", "v3_0_0.html#autotoc_md347", [
              [ "Build System", "v3_0_0.html#autotoc_md348", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md349", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md350", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md351", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md352", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md353", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md354", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md355", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md356", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md357", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md358", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md359", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md360", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md361", [
              [ "Build System", "v3_0_0.html#autotoc_md362", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md363", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md364", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md365", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md366", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md367", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md368", null ],
              [ "Tools", "v3_0_0.html#autotoc_md369", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md370", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md371", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md372", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md373", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md374", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md375", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md376", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md377", [
              [ "Libraries", "v3_0_0.html#autotoc_md378", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md379", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md380", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md381", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md324", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md325", [
              [ "Build System", "v2_3_72_1.html#autotoc_md326", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md327", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md328", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md329", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md330", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md331", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md332", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md333", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md334", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md335", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md336", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md337", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md338", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md339", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md340", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md341", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md342", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md343", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md297", [
            [ "Important Changes", "v2_3_72.html#autotoc_md298", [
              [ "Libraries", "v2_3_72.html#autotoc_md299", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md300", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md301", [
              [ "Libraries", "v2_3_72.html#autotoc_md302", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md303", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md304", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md305", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md306", null ],
              [ "Devices", "v2_3_72.html#autotoc_md307", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md308", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md309", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md310", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md311", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md312", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md313", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md314", [
                [ "Java", "v2_3_72.html#autotoc_md315", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md316", [
              [ "Libraries", "v2_3_72.html#autotoc_md317", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md318", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md319", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md320", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md321", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md322", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md323", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md284", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md285", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md286", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md287", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md288", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md289", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md290", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md291", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md292", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md293", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md294", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md295", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md296", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md272", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md273", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md274", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md275", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md276", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md277", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md278", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md279", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md280", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md281", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md282", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md283", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md223", [
            [ "Important Changes", "v2_3_70.html#autotoc_md224", [
              [ "System Configuration", "v2_3_70.html#autotoc_md225", null ],
              [ "Build System", "v2_3_70.html#autotoc_md226", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md227", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md228", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md229", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md230", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md231", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md232", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md233", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md234", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md235", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md236", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md237", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md238", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md239", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md240", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md241", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md242", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md243", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md244", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md245", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md246", null ],
              [ "Devices", "v2_3_70.html#autotoc_md247", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md248", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md249", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md250", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md251", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md252", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md253", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md254", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md255", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md256", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md257", [
              [ "Libraries", "v2_3_70.html#autotoc_md258", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md259", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md260", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md261", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md262", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md263", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md264", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md265", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md266", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md267", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md268", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md269", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md270", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md271", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md185", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md186", [
              [ "Build System", "v2_3_68_1.html#autotoc_md187", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md188", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md189", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md190", [
              [ "Build System", "v2_3_68_1.html#autotoc_md191", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md192", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md193", [
              [ "Build System", "v2_3_68_1.html#autotoc_md194", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md195", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md196", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md197", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md198", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md199", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md200", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md201", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md202", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md203", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md204", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md205", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md206", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md207", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md208", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md209", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md210", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md211", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md212", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md213", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md214", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md215", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md216", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md217", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md218", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md219", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md220", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md221", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md160", [
            [ "Important Changes", "v2_3_68.html#autotoc_md161", [
              [ "Dependencies", "v2_3_68.html#autotoc_md162", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md163", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md164", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md165", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md166", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md167", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md168", null ],
              [ "Tools", "v2_3_68.html#autotoc_md169", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md170", null ],
              [ "Devices", "v2_3_68.html#autotoc_md171", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md172", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md173", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md174", null ],
              [ "Devices", "v2_3_68.html#autotoc_md175", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md176", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md177", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md178", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md179", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md180", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md181", null ],
              [ "Devices", "v2_3_68.html#autotoc_md182", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md183", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md184", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md152", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md153", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md154", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md155", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md156", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md157", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md158", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md159", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md139", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md140", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md141", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md142", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md143", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md144", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md145", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md146", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md147", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md148", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md149", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md150", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md151", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md130", [
            [ "Important Changes", "v2_3_66.html#autotoc_md131", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md132", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md133", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md134", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md135", null ],
              [ "Modules", "v2_3_66.html#autotoc_md136", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md137", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md138", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md115", [
            [ "Important Changes", "v2_3_65.html#autotoc_md116", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md117", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md118", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md119", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md120", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md121", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md122", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md123", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md124", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md125", null ],
              [ "Devices", "v2_3_65.html#autotoc_md126", null ],
              [ "Tools", "v2_3_65.html#autotoc_md127", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md128", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md129", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md345", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md344", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md222", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md92", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md91", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md90", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md89", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md88", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md87", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md86", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md85", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md84", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md83", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md82", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md81", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md80", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md79", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md78", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md77", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1108", [
          [ "C++", "contributing.html#autotoc_md1109", [
            [ "Header guards", "contributing.html#autotoc_md1110", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1111", null ],
          [ "Git", "contributing.html#autotoc_md1112", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1113", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1114", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1116", null ],
          [ "Example", "contributing.html#autotoc_md1117", null ],
          [ "Terminology", "contributing.html#autotoc_md1118", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1119", [
          [ "Deprecated Features", "contributing.html#autotoc_md1120", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1121", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1122", null ]
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
"CalibratorVocabs_8h.html#ad39b7fed6cfe3f5ed702aa93622b0673",
"ControlBoardVocabs_8h.html#a6d401b41788321315c911af1db30f731",
"FakeBot_8cpp.html#a46e2fa8b1dce40cc847d4e357dd50f31",
"FakeSpeechSynthesizer__ParamsParser_8cpp_source.html",
"GenericSensorRosPublisher_8h.html",
"IControlModeTest_8h.html#adb7992b8f7f79c190736b0666d190346",
"IJoypadController_8h.html#a0076d4578fb0e90ce3883ec2a1ac93ad",
"IPositionControl_8h.html#a541f4f3651c597748c3256fd471c34f5",
"Image_8copyPixels_8cpp.html#a2e06502feb123e5bad991e3c970edae2",
"ImplementEncoders_8h.html",
"Lidar2DDeviceBase_8cpp.html#af7e8592d0a634bd3642e9fd508ea8022",
"Map2DServerImpl_8h_source.html",
"Module_8h.html",
"NetInt32_8h.html#ab2676e32122f2ffd9eeb4301a2c06b4f",
"PidEnums_8h.html#a488f005d19aa631a87bee4fc2cba0c2ca7a5baf549502d514a124eda47ebaa159",
"PortCore_8cpp_source.html",
"Rangefinder2D__nwc__yarp_8cpp.html#a525335710b53cb064ca56b936120431e",
"RunCheckpoints_8h_source.html",
"Sound_8cpp.html#ab2d99483d9c6670af5e67717c6f24e0d",
"Type_8h.html",
"XMLReaderFileV3_8h.html",
"classAnalogSensorClient.html#a53fb3a4e6b7d2ccf66ddcc4f5d8cc4bb",
"classAudioFromFileDevice__ParamsParser.html#a93eb020ca41467f768a936c584dabb22",
"classBattery__nws__ros2.html#af48ab629dd2d701d36665b4711ed067e",
"classBuilderItem.html#ae7cfd198e31fc62081325ee733b65b0a",
"classControlBoardRemapper.html#a1d297e6a9d85bb0f308406e3d22c8a6b",
"classControlBoard__nws__yarp__ParamsParser.html#a39ec0510065dd55fb66a59bf467682e1",
"classDumpPort.html",
"classFakeBattery.html",
"classFakeBatteryService__getBatteryTemperature__helper_1_1Reply.html#a1d465481f5172313f8c9d49d0e2d594b",
"classFakeBatteryService__setBatteryVoltage__helper_1_1Reply.html#a543ea419383758c46aad01151f82e5c6",
"classFakeDepthCameraDriver.html#adcef40652c30f92baabe1cb89cb7a709",
"classFakeFrameGrabber__ParamsParser.html#acb04acc1b6ae409b630550a8ea7cda8d",
"classFakeLaser.html#a41f6d64c8b7134945a215e3b6b70d469",
"classFakeLaserWithMotor__ParamsParser.html#ab38316abd822b26ea306cb28abeaa137",
"classFakeMotionControl.html#a5422483dd904c27afccb8f27095f82ff",
"classFakeMotionControl.html#af273c0a3a6807e6ba2a4ba53d87a15be",
"classFakeOdometry2D.html#af95c0fa022d991c3e456a7eb6276033e",
"classFakeSpeechSynthesizer.html#aae26c93762ab5640e349b193530b261f",
"classFrameGrabberCropper.html#a2b717decf6353140c2cc2d4add18acd1",
"classFrameTransformClient.html#a793c8d9e6bbf6415c075c50ba47c3a2d",
"classFrameTransformSet__nws__yarp.html#a9b74e0497d3bc37a045e314e8ca36955",
"classFrameWriter__nws__yarp.html#a82a14f3755e26edc40d1c8bc536da03d",
"classGoogleSpeechSynthesizer__ParamsParser.html#a637e3b4179acce7d3e77baf5fa60bfa7",
"classIAudioGrabberMsgs__getRecordingAudioBufferMaxSize__RPC__helper_1_1Command.html#a59cdfc886dbbde20f0eaae214dd5118c",
"classIAudioGrabberMsgs__stopRecording__RPC__helper_1_1Command.html#a8bfd189f7d83a7d5f141fdf425cbe1e1",
"classIChatBotMsgs__setLanguageRPC__helper.html#adc92855a727ca0310f55327b593f7ddd",
"classILocalization2DMsgs__set__initial__pose1__RPC__helper_1_1Command.html#a3edf4331ec28628196084b272c908b14",
"classIMap2DMsgs__clear__all__locations__RPC__helper_1_1Reply.html#ac44698669e874a204e650594551d4676",
"classIMap2DMsgs__enable__maps__compression__RPC__helper.html#a460e4f2151522ee4ccd01439a43efd3b",
"classIMap2DMsgs__get__locations__list__RPC__helper.html#adeaf37af7956cf63138aaf7c3f09fea3",
"classIMap2DMsgs__load__maps__collection__RPC__helper_1_1Command.html#a145ee4089240073cdb20bc94498d6f57",
"classIMap2DMsgs__save__maps__collection__RPC__helper.html#aed2ee437f7e9c41aa624fcc45895d308",
"classINavigation2DMsgs__apply__velocity__command__RPC__helper_1_1Command.html#a418fd856a334d5c0d253609a34e5e91a",
"classINavigation2DMsgs__get__name__of__current__target__RPC__helper_1_1Command.html#a4e8c7c58fc71509fb0f3b13e481e22fe",
"classINavigation2DMsgs__recompute__current__navigation__path__RPC__helper_1_1Command.html#a69c20cbe5383f6b77530bfc233a95019",
"classIRangefinder2DMsgs__getDeviceStatus__RPC__helper.html#afa31d00331765134e4d0b0221b399f63",
"classIRangefinder2DMsgs__setScanLimits__RPC__helper_1_1Command.html#a395203d0a98f68f2dd4438852ac94a42",
"classIRobotDescriptionMsgs__unregisterDeviceRPC__helper_1_1Reply.html#a1e187287a613b691ca2b59dccb6cb55f",
"classISpeechSynthesizerMsgs__get__voice__helper_1_1Reply.html#a5fa2d85f7a8cc122fb87720d1a7af5a2",
"classISpeechTranscriptionMsgs__set__language__helper.html#a6148f4e6e464a067584e62611b2512cd",
"classJointItem.html#a70e0d31efcb70a91afdaea92f9b54c6f",
"classLabel.html#a5547ec065850c24039f3160cfd26286a",
"classLocalization2D__nws__ros.html#aea3ee273d5206f65ec2253512484e716",
"classMainWindow.html#a4aa386518569b0bbceb958df0ddc8f32",
"classMap2D__nwc__yarp.html#abe5c4f6fb5d7e77393b25635e57b1927",
"classMobileBaseVelocityControlRPC__applyVelocityCommandRPC__helper.html#a0beba5f0ca877fd38d771a52a4588e2a",
"classMonitorBinding.html#aa04c0869c442c439fba125aee6f8dc34",
"classMultipleAnalogSensorsClient.html#af792a2df17988cbe69bc73ad518f7d93",
"classNavigation2D__nwc__yarp.html#a78459f6067ca509684b0533199a92e44",
"classNop__ParamsParser.html#a5e7f1fa13bd3a39121c4e0d588bf963b",
"classParameter.html#a5c5fda0a63bd1f4b586c9c107f11408e",
"classPortAudioDeviceDriver.html#a7514404e51a4b84c031c272b57c49ebd",
"classPriorityGroup.html#a64a1a5acfb2024dc5b5545c831f203d2",
"classRGBDSensorClient.html#a2cb981a14f2c61ded87738d045bd66c7",
"classRangefinder2D__controlBoard__nws__ros2__ParamsParser.html#a9e0c29cddf8135c1ca984f4826722d9b",
"classRemappedSubControlBoard.html#a240be4a0dc495b4bc717f5d97e632c1b",
"classRemoteControlBoard.html#af1a5373529479d628c74fa646095729a",
"classRgbdSensor__nws__ros2__ParamsParser.html#a8e21d46bfd06cb25696dffaeb852d2b4",
"classRpLidar3.html#a5fcd296633ebe6969b6384b695c961df",
"classSensorStreamingData.html#a3ffa2e9d7b06e3aacab72fc118180e16",
"classShmemOutputStreamImpl.html#a1b709fd35acba07c8881dd6cf8e2a42a",
"classStateExtendedInputPort.html",
"classType_1_1Private.html#a6ab879c596d85b401d52e5747d921298",
"classVirtualAnalogWrapper.html#a8c1c131b53d5df9fa36b25f5d0b93e20",
"classadvanced__dialog.html#a723c58698f4ae907b214723b4ab2a94d",
"classrealsense2Driver.html#a42bac92e82fb1601785f1e382ab98527",
"classreturn__getLastVelocityCommand.html#a2caca0325fc60d1ea793e695cebeaa3a",
"classreturn__get__language.html#aec12de4111eca363d38455bcfa1af9ef",
"classreturn__transcribe.html#aedeffd442fb5f0cdb2c6fa060369ffb3",
"classyarpActionsPlayer__IDL__print__frames__helper_1_1Command.html#a29faa5268372d1a6ff0d04c4645c6a20",
"classyarpActionsPlayer__IDL__stop__helper_1_1Reply.html#a1579f33fb7dc49f56d04fac61d931b7e",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a2907145c4df4d5837558182c706b62b5",
"classyarp_1_1dev_1_1DeviceDescriptionData.html#aa70c1b3999cced389271d5f6406741ab",
"classyarp_1_1dev_1_1ICartesianControl.html#a3dac0b83678f1e275a7aea6320cad486",
"classyarp_1_1dev_1_1IFrameTransform.html#a7d889a2a33163f250d4a76152c8e8ab7",
"classyarp_1_1dev_1_1IJoypadEventDriven.html#a48014e700a9a49fc51ed9f45dd33ac21",
"classyarp_1_1dev_1_1IPositionControlRaw.html#aa8547aee3504521d7739a52d4fed8fe7",
"classyarp_1_1dev_1_1ITorqueControlRaw.html#a9ca8d664a4969aa9616bb2ac75b5847c",
"classyarp_1_1dev_1_1ImplementCurrentControl.html#a57c14042dfad86b85769896b62d360ee",
"classyarp_1_1dev_1_1ImplementMotorEncoders.html#aa4e649e3d8c06e7505f9b1e052f3d751",
"classyarp_1_1dev_1_1ImplementTorqueControl.html#a4ed12cf629df1631b0b8c51c63aaabd4",
"classyarp_1_1dev_1_1Map2DLocationData.html#aa62e91e7696dd0972f5c94973999c793",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DPath.html#a4477f4f4c8025814f00e296cc780590f",
"classyarp_1_1dev_1_1OdometryData6D.html#a5c3c6a15a76b971f78b44605624c674d",
"classyarp_1_1dev_1_1StubImplControlLimitsRaw.html",
"classyarp_1_1dev_1_1impl_1_1jointData.html#aa4f3c2158edf347616f39fa4d0558ef8",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__getConversation__helper_1_1Reply.html#aac901b3a24914613ab878f4286957730",
"classyarp_1_1dev_1_1llm_1_1return__getConversation.html#a66278914f025fb0d1cb7c48c99c3eaf1",
"classyarp_1_1manager_1_1Arbitrator.html#ad3f4a1bf6d43d33fe4c85266691ccfa3",
"classyarp_1_1manager_1_1Connection.html#a117be37451adb61b94dba1c4c3e34075",
"classyarp_1_1manager_1_1Executable.html#aaca66b2f2cc11a50b65b56de84f47f01",
"classyarp_1_1manager_1_1InputData.html#aeb3a4cec105a8f9f47760a567a1cee2c",
"classyarp_1_1manager_1_1Manager.html#a455a345aa192484faeecceefbe65baa9",
"classyarp_1_1manager_1_1Module.html#ae73e38e545d1b15a05d1e19e72d1e9dd",
"classyarp_1_1manager_1_1Platform.html#aaef9aef68b4393e7fd755562ed5b796c",
"classyarp_1_1manager_1_1TextParser.html#acfc77b7b06db82c1d8b0443ff368b307",
"classyarp_1_1math_1_1Quaternion.html#a53261c27a20f89b4622ae0db347ca7de",
"classyarp_1_1os_1_1AbstractCarrier.html#a2a00cb22b4b2fe5f171bcb781be71bd8",
"classyarp_1_1os_1_1BufferedPort.html#a6fb99a24f6fc13d5e193c8ab62e8ff66",
"classyarp_1_1os_1_1Connection.html#aa3aa0c345e6e5f523d57547142920f00",
"classyarp_1_1os_1_1Contactable.html#aabdcc5ae79d8e2ef8b0562246b13726d",
"classyarp_1_1os_1_1Log.html#a4af3169c483a9d7ac43522437034e813",
"classyarp_1_1os_1_1MultiNameSpace.html#a058463c8180e4c22123dcfea93255f41",
"classyarp_1_1os_1_1NetworkClock.html#a38f24e83d4fbc276f8e631ab1ff708a7",
"classyarp_1_1os_1_1NullConnectionReader.html#a815858e12dc5e515888cf910c3ccbc24",
"classyarp_1_1os_1_1Port.html#a1dd5e79319a03bc62d806dddc7e3df96",
"classyarp_1_1os_1_1Property.html#a287ec0902a5328385d97f966f213138e",
"classyarp_1_1os_1_1ResourceFinder.html#aaecf836b34622bb0e7d2f5ad73025207",
"classyarp_1_1os_1_1SharedLibrary.html#a5076d8e3cf89a281460c24e10c81053d",
"classyarp_1_1os_1_1Subscriber.html#a8e2480a79575ca1220237665b76c98fd",
"classyarp_1_1os_1_1Type.html#a9cdf052fcf21debb8784a294d28ddf82",
"classyarp_1_1os_1_1YarpDummyNameSpace.html#a2c55ea6ef72814791aa9fd973e30d9ff",
"classyarp_1_1os_1_1idl_1_1WireReader.html#a9a917d1616eaa9818000c998f99cec70",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#af87940e79042ead617c6df34bf18f86a",
"classyarp_1_1os_1_1impl_1_1DgramTwoWayStream.html#aca9b76f5c308f6f758979fb455d305c0",
"classyarp_1_1os_1_1impl_1_1LocalCarrierStream.html#aa7c8dbe3eab28af0abf0f2398762aa56",
"classyarp_1_1os_1_1impl_1_1NameServer.html#a4ceefc786b846fbfe0250509a5fe7118",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#a2c55208554df344e8d4a9e08289681a6",
"classyarp_1_1os_1_1impl_1_1Protocol.html#a17c06d0f6664adf9a7d2cbe0db86508e",
"classyarp_1_1os_1_1impl_1_1StoreBlob.html#a9003b27909d52a012f1d7ca68c678b30",
"classyarp_1_1os_1_1impl_1_1StoreInt8.html#a46e28c701119386bfebe1c7377cb7067",
"classyarp_1_1os_1_1impl_1_1TcpCarrier.html#a6eca6ce8981aa191c4f09b7a2babdf95",
"classyarp_1_1profiler_1_1NetworkProfilerBasic.html#a3a7b2a2b366784a281aded4f3dfc5b61",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html",
"classyarp_1_1robotinterface_1_1Device_1_1Private.html#ae37be57dc3628a919c934832a854a1f3",
"classyarp_1_1robotinterface_1_1experimental_1_1Robot.html#ac833a6b51dabdd2b184169627552f386",
"classyarp_1_1robottestingframework_1_1jointsPosMotion_1_1Private.html",
"classyarp_1_1serversql_1_1impl_1_1SqliteTripleSource.html#af9a6f0ef42ca36ed095a4eb07d8f79c4",
"classyarp_1_1sig_1_1Image.html#a1b1c8cc47354a8831f6a2f8f4be9fd1f",
"classyarp_1_1sig_1_1PointCloud.html#a4ab5c9c2eefa565d06e11f8ab8c2a54f",
"classyarp_1_1yarpLogger_1_1LogEntry.html#a9119d0014017b6d5f0051eaffa6c4466",
"classyarpdataplayer__IDL__getStatus__helper.html#af7ee057238e634a9e40b913b18b83e2e",
"classyarpdataplayer__IDL__stop__helper_1_1Reply.html#a012d217bf73c17cf319d044c223fac56",
"classyarpdataplayer__console__IDL__getPortName__helper.html#a20cd9ef57e5422b1c0c61023327280aa",
"classyarpdataplayer__console__IDL__quit__helper.html#a57a58dc3f6121e080d2b1eb3ad9636cd",
"classyarpdataplayer__console__IDL__step__helper.html#ad476b362d886c34041da6a014d3634ed",
"classyarprobotinterfaceRpc__is__ready__helper.html#add0bac89a1258ffdff1f7bda26d0df40",
"compiler_8h.html#a9d10740dcabac84c91470cd78e5b1d5b",
"dir_28b2004b3f526e6361eff2c2bd770310.html",
"dir_9aa632983ef87eb25bbbc2a8bbde5a3c.html",
"dr__mp3_8h.html#a0796b22998b0880b15d7d9fd75bd6bca",
"fakeLaserWithMotor__test_8cpp_source.html",
"generator_8h.html#a7efee0a86e6337c46ca7007d7c4cca5b",
"guis_2yarpdataplayer_2include_2utils_8h_source.html",
"jointitem_8cpp.html",
"localbroker_8cpp.html#ac275a5b936bff6134236bbbde4ce4443",
"namespacemembers_v.html",
"namespaceyarp_1_1manager.html#a2a258df14366136378c2aedcad4793f8",
"namespaceyarp_1_1robotinterface.html#aa0b0ff1b8ca52a4d736e07147451e561",
"numeric_8h.html#a8d51ce73bd8c0c82dd027a02a2576e63",
"pylonCameraDriver_8h_source.html",
"return__get__map__names_8h_source.html",
"run_2Run_8h.html",
"structFrameTransformClient__ParamsParser_1_1parser__version__type.html#ad8ab091e698110d6f00a111c8455143a",
"structRobotDescription__nws__yarp__ParamsParser_1_1parser__version__type.html#acbb4a3063421e893302a59869c33783f",
"structmOptions.html#a7186700b0aadad2c0e4deb7a388df388",
"structyarp_1_1dev_1_1Nav2D_1_1Map2DLocation.html#a16e89ad6d309de24c246f8dbda76e346",
"structyarp_1_1profiler_1_1NetworkProfilerBasic_1_1PortInfo.html#ac4b53055b4951592b67f7ff0bc4fe512",
"structyarp_1_1sig_1_1DataXYZNormalRGBA.html#ab4d2dfa2542b8ce2ca4e4ced17adadbe",
"swigluarun_8h.html#ab63da8f19b45f71c49facae1984f96c6",
"v2_3_20.html",
"v2_3_72_1.html#autotoc_md327",
"v3_3_1.html#autotoc_md589",
"v3_6_0.html#autotoc_md933",
"xilinx-v4l2-controls_8h.html#aac44de6f4646645874ac1efa4edf9c7a",
"yarp_data_dirs.html#datafiles_shadow",
"yarpdataplayer__console__IDL_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';