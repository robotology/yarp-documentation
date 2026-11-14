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
        [ "Libraries", "master.html#autotoc_md77", [
          [ "<tt>os</tt>", "master.html#autotoc_md78", [
            [ "<tt>Log</tt>", "master.html#autotoc_md79", null ]
          ] ]
        ] ]
      ] ],
      [ "YARP <yarp-3.12> (2025-06-04)", "yarp_3_12.html", [
        [ "YARP <yarp-3.12> Release Notes", "yarp_3_12.html#autotoc_md472", [
          [ "New Features", "yarp_3_12.html#autotoc_md473", [
            [ "Thrift", "yarp_3_12.html#autotoc_md474", null ],
            [ "Library", "yarp_3_12.html#autotoc_md475", [
              [ "<tt>libYARP_os</tt>", "yarp_3_12.html#autotoc_md476", null ]
            ] ],
            [ "Devices", "yarp_3_12.html#autotoc_md477", null ],
            [ "yarprobotinterface", "yarp_3_12.html#autotoc_md478", null ],
            [ "yarpmotorgui", "yarp_3_12.html#autotoc_md479", null ]
          ] ],
          [ "Breaking Changes", "yarp_3_12.html#autotoc_md480", [
            [ "Devices", "yarp_3_12.html#autotoc_md482", null ]
          ] ],
          [ "Other", "yarp_3_12.html#autotoc_md483", null ],
          [ "Contributors", "yarp_3_12.html#autotoc_md484", null ]
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
        [ "YARP 3.12.3 (2026-07-15)", "v3_12_3.html", [
          [ "YARP 3.12.3 Release Notes", "v3_12_3.html#autotoc_md518", [
            [ "libYARP_sig", "v3_12_3.html#autotoc_md519", null ],
            [ "libYARP_dev", "v3_12_3.html#autotoc_md520", null ],
            [ "libYARP_os", "v3_12_3.html#autotoc_md521", null ],
            [ "devices", "v3_12_3.html#autotoc_md522", null ],
            [ "Bindings", "v3_12_3.html#autotoc_md523", null ],
            [ "Commands", "v3_12_3.html#autotoc_md524", [
              [ "<tt>yarpAudioPlayer</tt>", "v3_12_3.html#autotoc_md525", null ],
              [ "<tt>yarprobotinterface</tt>", "v3_12_3.html#autotoc_md526", null ]
            ] ],
            [ "GUIs", "v3_12_3.html#autotoc_md527", [
              [ "<tt>yarpmanager</tt>", "v3_12_3.html#autotoc_md528", null ]
            ] ],
            [ "Contributors", "v3_12_3.html#autotoc_md529", null ]
          ] ]
        ] ],
        [ "YARP 3.12.2 (2025-12-10)", "v3_12_2.html", [
          [ "YARP 3.12.2 Release Notes", "v3_12_2.html#autotoc_md508", [
            [ "libYARP_dev", "v3_12_2.html#autotoc_md509", null ],
            [ "Devices", "v3_12_2.html#autotoc_md510", [
              [ "MultipleAnalogSensorsRemapper", "v3_12_2.html#autotoc_md511", null ]
            ] ],
            [ "Tests", "v3_12_2.html#autotoc_md512", null ],
            [ "Commands", "v3_12_2.html#autotoc_md513", [
              [ "<tt>yarpActionsPlayer</tt>", "v3_12_2.html#autotoc_md514", null ]
            ] ],
            [ "Bindings", "v3_12_2.html#autotoc_md515", null ],
            [ "Other", "v3_12_2.html#autotoc_md516", null ],
            [ "Contributors", "v3_12_2.html#autotoc_md517", null ]
          ] ]
        ] ],
        [ "YARP 3.12.1 (2025-08-26)", "v3_12_1.html", [
          [ "YARP 3.12.1 Release Notes", "v3_12_1.html#autotoc_md485", [
            [ "New Features", "v3_12_1.html#autotoc_md486", [
              [ "yarpRerun", "v3_12_1.html#autotoc_md487", null ],
              [ "yarpRobotDescriptionInfo", "v3_12_1.html#autotoc_md488", null ],
              [ "Library", "v3_12_1.html#autotoc_md489", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md490", null ]
              ] ],
              [ "Portmonitor", "v3_12_1.html#autotoc_md491", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md492", null ]
              ] ]
            ] ],
            [ "Fixes", "v3_12_1.html#autotoc_md493", [
              [ "Bindings", "v3_12_1.html#autotoc_md494", null ],
              [ "Executables", "v3_12_1.html#autotoc_md495", null ],
              [ "GUIs", "v3_12_1.html#autotoc_md496", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md497", null ]
              ] ],
              [ "Devices", "v3_12_1.html#autotoc_md498", null ],
              [ "Library", "v3_12_1.html#autotoc_md499", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md500", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_12_1.html#autotoc_md501", null ]
              ] ]
            ] ],
            [ "Breaking Changes", "v3_12_1.html#autotoc_md502", [
              [ "GUIs", "v3_12_1.html#autotoc_md503", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md504", null ]
              ] ],
              [ "Library", "v3_12_1.html#autotoc_md505", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md506", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_12_1.html#autotoc_md507", null ]
          ] ]
        ] ],
        [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md467", [
            [ "Fixes", "v3_11_2.html#autotoc_md468", [
              [ "GUIs", "v3_11_2.html#autotoc_md469", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md470", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md471", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md463", [
            [ "Changes", "v3_11_1.html#autotoc_md464", [
              [ "Compiler features", "v3_11_1.html#autotoc_md465", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md466", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md444", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md445", [
              [ "Library", "v3_11_0.html#autotoc_md446", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md447", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md448", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md449", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md450", null ],
            [ "New Features", "v3_11_0.html#autotoc_md451", [
              [ "devices", "v3_11_0.html#autotoc_md452", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md453", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md454", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md455", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md456", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md457", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md458", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md459", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md460", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md461", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md462", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md440", [
            [ "Fixes", "v3_10_1.html#autotoc_md441", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md442", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md443", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md413", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md414", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md415", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md416", null ],
            [ "New Features", "v3_10_0.html#autotoc_md417", [
              [ "Carriers", "v3_10_0.html#autotoc_md419", null ],
              [ "Devices", "v3_10_0.html#autotoc_md420", [
                [ "Docker", "v3_10_0.html#autotoc_md418", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md421", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md422", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md423", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md424", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md425", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md426", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md427", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md428", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md429", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md430", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md431", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md432", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md433", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md434", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md435", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md436", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md437", [
                [ "Python", "v3_10_0.html#autotoc_md438", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md439", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1146", [
            [ "Fixes", "v3_9_1.html#autotoc_md1147", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1148", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1149", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1150", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1151", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1152", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1153", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1154", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1155", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1127", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1128", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1129", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1130", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1131", [
              [ "Docker", "v3_9_0.html#autotoc_md1132", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1133", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1134", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1135", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1136", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1137", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1138", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1139", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1140", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1141", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1142", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1143", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1144", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1145", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1118", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1119", [
              [ "tools", "v3_8_1.html#autotoc_md1120", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1121", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1122", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1123", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1124", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1125", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1126", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1077", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1078", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1079", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1080", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1081", [
              [ "Libraries", "v3_8_0.html#autotoc_md1082", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1083", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1084", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1085", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1086", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1087", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1088", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1089", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1090", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1091", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1092", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1093", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1094", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1095", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1096", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1097", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1098", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1099", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1100", null ],
              [ "Other", "v3_8_0.html#autotoc_md1101", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1102", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1103", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1104", [
              [ "bindings", "v3_8_0.html#autotoc_md1105", null ],
              [ "devices", "v3_8_0.html#autotoc_md1106", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1107", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1108", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1109", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1110", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1111", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1112", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1113", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1114", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1115", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1116", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1117", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1069", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1070", [
              [ "Documentation", "v3_7_2.html#autotoc_md1071", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1072", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1073", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1074", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1075", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1076", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1060", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1061", [
              [ "CMake", "v3_7_1.html#autotoc_md1062", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1063", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1064", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1065", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1066", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1067", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1068", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1035", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1036", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1037", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1038", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1039", [
              [ "Libraries", "v3_7_0.html#autotoc_md1040", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1041", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1044", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1045", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1046", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1047", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1048", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1049", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1050", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1051", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1052", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1053", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1054", [
              [ "Catch2", "v3_7_0.html#autotoc_md1055", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1056", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1057", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1058", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1059", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md978", [
            [ "Important Changes", "v3_6_0.html#autotoc_md979", [
              [ "Dependencies", "v3_6_0.html#autotoc_md980", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md981", [
              [ "Devices", "v3_6_0.html#autotoc_md982", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md983", [
              [ "Libraries", "v3_6_0.html#autotoc_md984", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md985", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md986", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md992", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md993", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md1003", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md1004", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md1005", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md1006", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md1007", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md1008", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md1009", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md1010", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md1011", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md1012", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md1013", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md1014", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md1015", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md1016", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md1017", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md1018", null ],
              [ "Tools", "v3_6_0.html#autotoc_md1019", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md1020", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md1021", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md1022", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md1023", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1024", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1025", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1026", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1027", [
              [ "Build System", "v3_6_0.html#autotoc_md1028", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1029", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1030", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1031", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1032", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1033", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1034", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md932", [
            [ "New Features", "v3_5_1.html#autotoc_md933", [
              [ "Libraries", "v3_5_1.html#autotoc_md934", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md935", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md936", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md937", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md938", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md942", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md943", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md944", null ],
              [ "Devices", "v3_5_1.html#autotoc_md945", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md946", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md947", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md948", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md949", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md950", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md951", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md952", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md953", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md954", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md955", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md956", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md957", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md958", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md959", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md960", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md961", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md962", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md963", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md964", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md965", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md966", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md967", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md968", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md969", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md970", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md971", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md972", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md973", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md974", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md975", [
                [ "Python", "v3_5_1.html#autotoc_md976", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md977", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md830", [
            [ "Important Changes", "v3_5_0.html#autotoc_md831", [
              [ "Dependencies", "v3_5_0.html#autotoc_md832", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md833", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md834", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md836", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md837", [
              [ "Libraries", "v3_5_0.html#autotoc_md838", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md839", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md840", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md852", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md854", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md857", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md858", null ],
              [ "Devices", "v3_5_0.html#autotoc_md859", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md860", [
              [ "Libraries", "v3_5_0.html#autotoc_md861", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md862", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md863", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md864", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md874", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md880", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md889", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md891", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md892", null ],
              [ "Devices", "v3_5_0.html#autotoc_md893", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md894", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md895", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md896", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md897", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md898", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md899", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md900", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md901", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md902", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md903", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md904", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md905", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md906", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md907", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md908", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md909", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md910", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md911", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md912", [
              [ "Carriers", "v3_5_0.html#autotoc_md913", null ],
              [ "Devices", "v3_5_0.html#autotoc_md914", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md915", [
                [ "Python", "v3_5_0.html#autotoc_md916", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md917", [
              [ "Libraries", "v3_5_0.html#autotoc_md918", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md919", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md922", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md923", null ],
              [ "Devices", "v3_5_0.html#autotoc_md924", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md925", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md926", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md927", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md928", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md929", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md930", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md931", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md815", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md816", null ],
            [ "Build System", "v3_4_6.html#autotoc_md817", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md818", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md819", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md820", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md821", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md822", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md823", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md824", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md825", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md826", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md827", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md828", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md829", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md807", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md808", [
              [ "Libraries", "v3_4_5.html#autotoc_md809", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md810", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md812", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md813", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md814", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md796", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md797", [
              [ "Build System", "v3_4_4.html#autotoc_md798", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md799", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md800", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md801", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md802", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md803", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md804", [
                [ "Python", "v3_4_4.html#autotoc_md805", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md806", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md785", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md786", [
              [ "Libraries", "v3_4_3.html#autotoc_md787", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md788", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md789", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md790", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md791", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md792", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md793", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md794", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md795", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md764", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md765", [
              [ "Build System", "v3_4_2.html#autotoc_md766", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md767", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md768", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md770", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md771", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md774", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md775", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md776", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md777", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md778", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md779", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md780", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md781", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md782", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md783", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md784", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md746", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md747", [
              [ "Build System", "v3_4_1.html#autotoc_md748", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md749", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md750", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md752", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md754", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md755", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md756", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md757", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md758", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md759", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md760", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md761", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md762", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md763", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md671", [
            [ "Important Changes", "v3_4_0.html#autotoc_md672", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md673", [
              [ "Build System", "v3_4_0.html#autotoc_md674", [
                [ "os", "v3_4_0.html#autotoc_md676", null ],
                [ "dev", "v3_4_0.html#autotoc_md683", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md684", null ],
              [ "Tools", "v3_4_0.html#autotoc_md685", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md687", [
              [ "Build System", "v3_4_0.html#autotoc_md688", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md691", [
                [ "conf", "v3_4_0.html#autotoc_md692", null ],
                [ "os", "v3_4_0.html#autotoc_md693", null ],
                [ "sig", "v3_4_0.html#autotoc_md701", null ],
                [ "math", "v3_4_0.html#autotoc_md704", null ],
                [ "dev", "v3_4_0.html#autotoc_md705", null ],
                [ "logger", "v3_4_0.html#autotoc_md706", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md707", null ],
              [ "Devices", "v3_4_0.html#autotoc_md708", null ],
              [ "Tools", "v3_4_0.html#autotoc_md723", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md726", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md732", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md733", [
              [ "Libraries", "v3_4_0.html#autotoc_md734", [
                [ "os", "v3_4_0.html#autotoc_md735", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md736", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md737", null ],
              [ "Devices", "v3_4_0.html#autotoc_md738", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md739", [
              [ "Libraries", "v3_4_0.html#autotoc_md740", [
                [ "os", "v3_4_0.html#autotoc_md741", null ],
                [ "sig", "v3_4_0.html#autotoc_md743", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md745", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md652", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md653", [
              [ "Build System", "v3_3_3.html#autotoc_md654", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md655", [
                [ "os", "v3_3_3.html#autotoc_md656", null ],
                [ "dev", "v3_3_3.html#autotoc_md660", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md661", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md668", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md670", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md645", [
            [ "Contributors", "v3_3_2.html#autotoc_md651", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md632", [
            [ "Important Changes", "v3_3_1.html#autotoc_md633", [
              [ "Dependencies", "v3_3_1.html#autotoc_md634", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md635", [
              [ "Libraries", "v3_3_1.html#autotoc_md636", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md637", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md638", [
                [ "grabberDual", "v3_3_1.html#autotoc_md639", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md640", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md641", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md642", [
                [ "Perl", "v3_3_1.html#autotoc_md643", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md644", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md607", [
            [ "Important Changes", "v3_3_0.html#autotoc_md608", [
              [ "Dependencies", "v3_3_0.html#autotoc_md609", null ],
              [ "Build System", "v3_3_0.html#autotoc_md610", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md611", [
                [ "YARP_os", "v3_3_0.html#autotoc_md612", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md613", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md614", [
              [ "Build System", "v3_3_0.html#autotoc_md615", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md616", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md617", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md618", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md619", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md620", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md621", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md624", null ],
              [ "devices", "v3_3_0.html#autotoc_md626", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md627", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md631", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md598", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md599", [
              [ "Build System", "v3_2_2.html#autotoc_md600", null ],
              [ "Devices", "v3_2_2.html#autotoc_md601", null ],
              [ "Tools", "v3_2_2.html#autotoc_md604", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md606", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md585", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md586", [
              [ "Carriers", "v3_2_1.html#autotoc_md587", null ],
              [ "Devices", "v3_2_1.html#autotoc_md589", null ],
              [ "Tools", "v3_2_1.html#autotoc_md591", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md594", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md597", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md575", [
            [ "Important Changes", "v3_2_0.html#autotoc_md576", [
              [ "Dependencies", "v3_2_0.html#autotoc_md577", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md578", null ],
              [ "Devices", "v3_2_0.html#autotoc_md579", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md580", [
              [ "Build System", "v3_2_0.html#autotoc_md581", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md582", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md583", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md584", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md567", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md568", [
              [ "CMake", "v3_1_2.html#autotoc_md569", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md570", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md571", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md572", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md573", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md574", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md545", [
            [ "New Features", "v3_1_1.html#autotoc_md546", [
              [ "Build System", "v3_1_1.html#autotoc_md547", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md548", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md549", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md550", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md551", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md552", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md553", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md554", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md555", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md556", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md557", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md558", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md559", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md560", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md561", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md562", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md563", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md564", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md565", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md566", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md530", [
            [ "New Features", "v3_1_0.html#autotoc_md531", [
              [ "Libraries", "v3_1_0.html#autotoc_md532", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md533", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md534", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md535", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md536", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md537", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md538", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md539", [
                [ "yarp", "v3_1_0.html#autotoc_md540", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md541", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md542", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md543", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md544", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md385", [
            [ "Important Changes", "v3_0_1.html#autotoc_md386", null ],
            [ "New Features", "v3_0_1.html#autotoc_md388", [
              [ "Libraries", "v3_0_1.html#autotoc_md389", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md390", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md391", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md392", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md393", [
              [ "Build System", "v3_0_1.html#autotoc_md394", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md395", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md396", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md397", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md398", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md399", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md400", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md401", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md402", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md403", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md404", [
                [ "yarpscope", "v3_0_1.html#autotoc_md405", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md406", [
                [ "rplidar2", "v3_0_1.html#autotoc_md407", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md408", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md409", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md410", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md411", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md412", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md349", [
            [ "Important Changes", "v3_0_0.html#autotoc_md350", [
              [ "Build System", "v3_0_0.html#autotoc_md351", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md352", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md353", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md354", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md355", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md356", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md357", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md358", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md359", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md360", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md361", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md362", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md363", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md364", [
              [ "Build System", "v3_0_0.html#autotoc_md365", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md366", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md367", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md368", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md369", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md370", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md371", null ],
              [ "Tools", "v3_0_0.html#autotoc_md372", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md373", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md374", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md375", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md376", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md377", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md378", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md379", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md380", [
              [ "Libraries", "v3_0_0.html#autotoc_md381", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md382", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md383", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md384", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md327", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md328", [
              [ "Build System", "v2_3_72_1.html#autotoc_md329", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md330", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md331", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md332", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md333", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md334", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md335", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md336", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md337", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md338", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md339", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md340", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md341", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md342", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md343", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md344", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md345", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md346", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md300", [
            [ "Important Changes", "v2_3_72.html#autotoc_md301", [
              [ "Libraries", "v2_3_72.html#autotoc_md302", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md303", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md304", [
              [ "Libraries", "v2_3_72.html#autotoc_md305", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md306", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md307", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md308", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md309", null ],
              [ "Devices", "v2_3_72.html#autotoc_md310", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md311", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md312", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md313", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md314", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md315", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md316", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md317", [
                [ "Java", "v2_3_72.html#autotoc_md318", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md319", [
              [ "Libraries", "v2_3_72.html#autotoc_md320", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md321", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md322", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md323", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md324", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md325", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md326", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md287", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md288", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md289", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md290", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md291", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md292", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md293", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md294", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md295", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md296", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md297", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md298", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md299", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md275", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md276", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md277", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md278", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md279", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md280", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md281", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md282", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md283", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md284", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md285", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md286", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md226", [
            [ "Important Changes", "v2_3_70.html#autotoc_md227", [
              [ "System Configuration", "v2_3_70.html#autotoc_md228", null ],
              [ "Build System", "v2_3_70.html#autotoc_md229", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md230", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md231", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md232", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md233", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md234", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md235", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md236", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md237", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md238", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md239", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md240", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md241", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md242", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md243", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md244", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md247", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md248", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md249", null ],
              [ "Devices", "v2_3_70.html#autotoc_md250", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md251", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md252", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md253", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md254", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md255", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md256", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md257", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md258", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md259", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md260", [
              [ "Libraries", "v2_3_70.html#autotoc_md261", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md262", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md263", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md264", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md265", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md266", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md267", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md268", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md269", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md270", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md271", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md272", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md273", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md274", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md188", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md189", [
              [ "Build System", "v2_3_68_1.html#autotoc_md190", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md191", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md192", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md193", [
              [ "Build System", "v2_3_68_1.html#autotoc_md194", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md195", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md196", [
              [ "Build System", "v2_3_68_1.html#autotoc_md197", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md198", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md199", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md200", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md201", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md202", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md203", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md204", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md205", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md206", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md207", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md208", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md209", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md210", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md211", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md212", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md213", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md214", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md215", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md216", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md217", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md218", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md219", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md220", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md221", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md222", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md223", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md224", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md163", [
            [ "Important Changes", "v2_3_68.html#autotoc_md164", [
              [ "Dependencies", "v2_3_68.html#autotoc_md165", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md166", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md167", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md168", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md169", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md170", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md171", null ],
              [ "Tools", "v2_3_68.html#autotoc_md172", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md173", null ],
              [ "Devices", "v2_3_68.html#autotoc_md174", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md175", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md176", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md177", null ],
              [ "Devices", "v2_3_68.html#autotoc_md178", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md179", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md180", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md181", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md182", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md183", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md184", null ],
              [ "Devices", "v2_3_68.html#autotoc_md185", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md186", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md187", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md155", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md156", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md157", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md158", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md159", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md160", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md161", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md162", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md142", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md143", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md144", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md145", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md146", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md147", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md148", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md149", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md150", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md151", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md152", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md153", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md154", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md133", [
            [ "Important Changes", "v2_3_66.html#autotoc_md134", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md135", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md136", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md137", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md138", null ],
              [ "Modules", "v2_3_66.html#autotoc_md139", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md140", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md141", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md118", [
            [ "Important Changes", "v2_3_65.html#autotoc_md119", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md120", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md121", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md122", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md123", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md124", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md125", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md126", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md127", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md128", null ],
              [ "Devices", "v2_3_65.html#autotoc_md129", null ],
              [ "Tools", "v2_3_65.html#autotoc_md130", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md131", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md132", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md117", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md348", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md347", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md225", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md92", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md91", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md90", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md89", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md88", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md87", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md86", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md85", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md84", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md83", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md82", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md81", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md80", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1156", [
          [ "C++", "contributing.html#autotoc_md1157", [
            [ "Header guards", "contributing.html#autotoc_md1158", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1159", null ],
          [ "Git", "contributing.html#autotoc_md1160", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1161", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1162", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1164", null ],
          [ "Example", "contributing.html#autotoc_md1165", null ],
          [ "Terminology", "contributing.html#autotoc_md1166", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1167", [
          [ "Deprecated Features", "contributing.html#autotoc_md1168", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1169", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1170", null ]
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
"CalibratorThread_8h.html",
"ControlBoardRemapperHelpers_8h.html",
"FakeAnalogSensor_8cpp.html",
"FakeSerialPort_8cpp_source.html",
"GPTDevice_8h.html#a46aeb184cdc856948a10a0c3ea210c6f",
"IChatBotTest_8h_source.html",
"IInteractionModeTest_8cpp.html",
"IOdometry2DTest_8h.html",
"ImageFile_8h.html#a93dd198bb228a13eca91e66a006266b2",
"Image_8h.html#a2e411d9f65992414d37bdcfec7f737b4a764c9a0721712f046f9c07bfd34f336a",
"JoypadControlServer__ParamsParser_8h.html",
"Log_8h.html#ab5b5a5572de8dc086fed1d0e0075e402",
"MjpegCarrier_8cpp.html#adefca0d98a0950197369f3024fbcf28c",
"NameServiceOnTriples_8h_source.html",
"OdometryData_8h_source.html",
"PortAudioDeviceDriver_8cpp.html",
"Rangefinder2DServerImpl_8cpp.html",
"Ros2Utils_8h.html#a949db874ee3c4b0c0ef5dc711ceb7d73",
"SimulatedWorld__nws__ros2__ParamsParser_8h_source.html",
"Time_8cpp_source.html",
"VoiceBoxSynthesizer_8cpp.html#abdf4ef08d081dfe9470a64bb0c623f43",
"binexparser_8cpp.html#a4519b66f77985a3a71c44958a52b537e",
"classApplicationViewWidget.html#a09b7d565a5fdcc63b0f85b159f0d0453",
"classAudioRecorder__nws__yarp_1_1AudioRecorderDataThread.html#a9b31efa6ea03053df70eb4c9dc644615",
"classBoschIMU.html#a13c6b491b7568fed80f9dd256b1ef34c",
"classChatBot__nwc__yarp__ParamsParser.html#adf39694def9de190fc8a77c90ebf0905",
"classControlBoardRemapper.html#a939d1d8bb5303c66ba6428bc754c717f",
"classCustomView.html#ad2cace60bca05b0d5ea26ca7cd5b9ecb",
"classEcho.html#af7bb11eb28e0e7814490f1bd62423b68",
"classFakeBatteryService__getBatteryCurrent__helper.html#a8238c20a116b3561885b4ac752b7746d",
"classFakeBatteryService__setBatteryCurrent__helper_1_1Command.html#a796907e5bdbfeec1b56f9cc38abc796a",
"classFakeBot.html#a855ea1e5e46ba416d69b425a8d742e75",
"classFakeFrameGrabber.html",
"classFakeJointCoupling.html#a081b29746f7e543c9e5b82ae007622cc",
"classFakeLaserWithMotor.html#a53ccdf9987deac9a6390822ff66d4c45",
"classFakeLocalizer__ParamsParser.html#ac135be954b843cfd9e547c7a931bb7fa",
"classFakeMotionControl.html#a8cc198f637be38c54a86830223315cf6",
"classFakeMotionControlMicro.html#acc5e1f53301bca91680480938b307d41",
"classFakePythonSpeechTranscription.html#aa9e7c51029f656c6da55a5c049406496",
"classFakeSpeechTranscription.html#a6406dea1ac73c899e9171c933016ca01",
"classFrameGrabberCropper.html#a77e7f95fd1e3418335629d3cdcd41cde",
"classFrameTransformClient__ParamsParser.html#a7998369b29040f76820099ffc070bbfa",
"classFrameTransformStorageGetRPC__getTransformsRPC__helper_1_1Command.html#a1bc87213b9ca27aebae0fba183ad8d60",
"classGPTDevice.html#ae7b702d0cea659b3e891ceba069ff700",
"classGoogleSpeechTranscription__ParamsParser.html#a73b07fbcda82d421205e59d68418b7e6",
"classIAudioGrabberMsgs__getRecordingAudioBufferCurrentSize__RPC__helper_1_1Command.html#a12fdc4320ba3a2dcfd5d88a71fc933c3",
"classIAudioGrabberMsgs__startRecording__RPC__helper_1_1Command.html#a7191949a06aed92a145475f7c516363e",
"classIChatBotMsgs__resetBotRPC__helper.html#abf9ddd150dc75508f731d410659b96a4",
"classILocalization2DMsgs__get__localization__status__RPC__helper_1_1Command.html#a068889b275bfc7a2b90fc2e044fed33b",
"classIMap2DMsgs__clear__all__areas__RPC__helper_1_1Command.html#ae73604f5abad4bcba89d9b8df63b6e40",
"classIMap2DMsgs__delete__location__RPC__helper.html#a3c1dd15c54df671843437b2f27b47e8f",
"classIMap2DMsgs__get__all__paths__RPC__helper.html#a58cef673e3a9f2826bcb4c89d272f195",
"classIMap2DMsgs__get__object__RPC__helper_1_1Command.html#a04040fff356aca82c7601f880f2bac59",
"classIMap2DMsgs__reload__locations__and__extras__RPC__helper_1_1Command.html#a90d6e4c3be60e27e01c4a7bd4c51e4f3",
"classIMap2DMsgs__save__locations__and__extras__RPC__helper_1_1Command.html#a6675cbfa707170d07cb434cc85f1fb6e",
"classIMap2DMsgs__store__path__RPC__helper.html#afbfb32e49e2e3d1dbab1a4a49b1152a7",
"classINavigation2DMsgs__get__current__nav__waypoint__RPC__helper.html#a179e4ef3384468c102ff2ef0e22c6f88",
"classINavigation2DMsgs__goto__target__by__absolute__location__and__set__name__RPC__helper.html#ac8fd9db2798d7843f41f1395728f98c4",
"classINavigation2DRPCd.html#ad801a6296336a24e7a6a93408aa117b7",
"classIRangefinder2DMsgs__getScanRate__RPC__helper.html#ac9bccae6b4b143784b6172c39f1c352a",
"classIRobotDescriptionMsgs__getAllDevicesRPC__helper_1_1Command.html#a58567c179f55cf32c123e313651cc411",
"classISimulatedWorldMsgsImpl.html#a3cc194b3c815b7954f46ed9f1722f054",
"classISimulatedWorldMsgs__enableGravity__helper_1_1Command.html#a3c6a9f87d0eeafc0b9382582a6fe5b0a",
"classISimulatedWorldMsgs__makeFrame__helper_1_1Command.html#acd29dcbd2b9bf16f07b8ad59a5b9184f",
"classISpeechSynthesizerMsgs__get__pitch__helper_1_1Reply.html#a00403d703c6d2c552f69934967993f84",
"classISpeechSynthesizerMsgs__synthesize__helper_1_1Reply.html#ade0ca137553f963570467f63166fe327",
"classInterfaceForCApi.html#aacd1206ba5b1269cfd61dd158f15919f",
"classKokoroSpeechSynthesizer.html#a005bef130a3c2a71ea9fc8b3f6c8c67c",
"classLlama2Device__ParamsParser.html#a5aabc606c6df27a6c741ff549012631d",
"classLogModel.html#af7360a2960ff9e3804c59287a82571a4",
"classMap2D__nwc__yarp.html#a44ba2a584e1577f33ef1998454a4e929",
"classMjpegCarrier.html#ad4e3d0864f3cd76fc06989c49bb6d7d6",
"classModuleItem.html#a3e4c3b11fae5c40294b1d25997cdb8ab",
"classMultipleAnalogSensorsClient.html#a73c25257e5fe55034883a502f90e4a60",
"classNavigation2D__nwc__yarp.html#a3facbac8f2e7be4f88264bfeb0433277",
"classNewApplicationWizard.html#abe969f2dc83d4827529dfb7b0746accc",
"classOpenCVGrabber__ParamsParser.html#af57a489f485594e77243c1f10fa405d0",
"classPlotter.html#a37a3b2df95ca2b0f783afc7a14c932f7",
"classPortWriterBufferBase_1_1Private.html#a56030e36ab55449f4378fa9ba45a3bcb",
"classRFModuleThreadedHandler.html",
"classRangefinder2DTransformer__ParamsParser.html#ae148b40c741e2adfe0746778a754747a",
"classRangefinder2D__nws__yarp.html#a28a9d77237189872cb728c1fc882d6d1",
"classRemoteControlBoard.html#ab52475170d8fee292ecae9ba2f1e156b",
"classRgbdSensor__nwc__ros2__ParamsParser.html#a034ffc93249984a7af57f2e684919d8e",
"classRos2Test.html#af3148c2e0d5eac3d46567c5403897262",
"classSensorMeasurements__to__vector.html#ab65f9e6a482a07113fa1b670262ce414",
"classShmemInputStreamImpl.html#a02a1df5cbff55767959c177980a5a900",
"classSoundHeader.html#aadd692ee0610d14f96a21981d77ebb9f",
"classSystemInfoSerializer_1_1Private.html",
"classUSBCameraDriver.html#acea2229b74bcdcc43fb0cba05a10e94c",
"classVoiceBoxSynthesizer__ParamsParser.html#ad839b5ee8f9ede13c430b61482155b80",
"classWorldInterfaceServer__deleteAll__helper.html#ac736bc241fb7ecd355993a5a50f1bc4b",
"classWorldInterfaceServer__loadModelFromFileWithPose__helper.html#a71094c864b43a13b7cdee0820850e82a",
"classWorldInterfaceServer__rename__helper.html#a5a6a4649a322e42f7f1c05e03113a041",
"classargusCameraDriver__ParamsParser.html#ab9a40fdb8d566a65852408b17b88f3ba",
"classrealsense2Driver.html#aaf11c115260d5c42f4e2443d6b6ada09",
"classreturn__getScanLimits.html#a09a081e9655c0d1786f0b623f4de95b5",
"classreturn__get__localization__status.html#a8fd1ab9d39c53a54531f51920b570cee",
"classreturn__transcribe.html#aedeffd442fb5f0cdb2c6fa060369ffb3",
"classyarpActionsPlayer__IDL__getRemoteProtocolVersion__helper.html",
"classyarpActionsPlayer__IDL__speed__factor__helper.html#a1c5f60622dd12db0b5d0ca960bb7bac3",
"classyarp_1_1dev_1_1AudioRecorderDeviceBase.html#a0c10ab41352e119db6d257900463c950",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a79846f4cfe1ea1d669bbf43ba28e464c",
"classyarp_1_1dev_1_1FrameTransformContainer.html",
"classyarp_1_1dev_1_1IControlLimits.html",
"classyarp_1_1dev_1_1IGazeControl.html#a53e072b41ae5a83a3eb0f80868450cb3",
"classyarp_1_1dev_1_1IMotor.html",
"classyarp_1_1dev_1_1IRGBDSensor.html#ab590f14cb1ed3c79b719a1eb48f782bd",
"classyarp_1_1dev_1_1IVelocityControlRaw.html#a7557635a6d96975c7d774eb957429725",
"classyarp_1_1dev_1_1ImplementEncoders.html#a73f936990ffe920181417934bbe5db74",
"classyarp_1_1dev_1_1ImplementPWMControl.html#a66ac44fbeea454f60cbd30f71a492f8d",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#a045767eca77885b1bd06bfbe91ea39e1",
"classyarp_1_1dev_1_1Lidar2DDeviceBase.html#a4e70b554ef973a6fdd286a2d8c0fdc2d",
"classyarp_1_1dev_1_1Nav2D_1_1IMap2D.html#ad3e7f680e8cf495152cec3d8985f6216",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#aece20c6e433234cc1d8e520a70759520afa0f7e19011273ecf0d1a63e482ac402",
"classyarp_1_1dev_1_1PolyDriverList.html#a02cc0680dd0be069360e531137183947",
"classyarp_1_1dev_1_1StubImplPositionControlRaw.html#a5c82baaaa3748b4c9acd2b951f6ba299",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__ask__helper.html#a9e074482e74a880cf48fb75c6813a0c5",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__readPrompt__helper_1_1Reply.html#ab991359fb114f74ffdaadb8c2d7883af",
"classyarp_1_1dev_1_1xHandControlBoard.html#a13a8eb9ffb1be9d6f750c421f0778371",
"classyarp_1_1dev_1_1xHandControlBoard.html#ab609b4e1ee02c66dd1f81bc696262706",
"classyarp_1_1manager_1_1ApplicationInterface.html#aadeb92936a7d70a7ca35abd4f07c46e4",
"classyarp_1_1manager_1_1Computer.html#ab5f8ff3f194d43e7c1659dfc2c1f006f",
"classyarp_1_1manager_1_1Executable.html#a1090c00bd6a03c7f4fa6c86d9d1d8feb",
"classyarp_1_1manager_1_1ITransition.html#a858398e462d75294d1853b1d8258b32c",
"classyarp_1_1manager_1_1MEvent.html#afda92ccd20270570dffd2ab196a6d079",
"classyarp_1_1manager_1_1Module.html#a9671b484ebcd70fe659c2db10af39ab5",
"classyarp_1_1manager_1_1OutputData.html#a23c2014f4db76cad8a3f1a1b5549dd30",
"classyarp_1_1manager_1_1StrStream.html#ab1b1fc392dee02e53f6e8f60e77da897",
"classyarp_1_1math_1_1FrameTransform.html#aa19ef2b4f1037b2f0baa8b8af3f39c42",
"classyarp_1_1name_1_1NameServerManager.html#ac50c94ee2b4f6455ecd8992fcadf4e19",
"classyarp_1_1os_1_1Bottle.html#a9a98533da1dfef02172cfcae62439f00",
"classyarp_1_1os_1_1ConnectResult.html#a34f78e342f8c2aaa6210f91b2fb1e164",
"classyarp_1_1os_1_1ContactStyle.html#ae1559b39acfdbbddcf945a902e3282e8",
"classyarp_1_1os_1_1InputStream.html#a5e87cef215d6954ef3b6f19c6d6cdecc",
"classyarp_1_1os_1_1MessageStack.html#a5ae5f5086d2d09f727e1a034ced7a506",
"classyarp_1_1os_1_1NetworkBase.html#a5535976e49b9aa2f2f75d48efa6822ce",
"classyarp_1_1os_1_1NullConnection.html#ab62c77eecdfbd443c28d2fd4d52cbc82",
"classyarp_1_1os_1_1PeriodicThread.html#af8bb72b93be3823a3d4e217f959a612f",
"classyarp_1_1os_1_1PortWriterBufferBase.html#a139911741f00ce53be536aebde102d9f",
"classyarp_1_1os_1_1ResourceFinder.html#a0d3f61ce0e3e59a71dde34bfa5f65cb8",
"classyarp_1_1os_1_1RpcServer.html#afd62f8b1a748f9ac483dfef930fc5058",
"classyarp_1_1os_1_1StringInputStream.html#a91dbae671bd31fef98afb6d3ce135a22",
"classyarp_1_1os_1_1TwoWayStream.html",
"classyarp_1_1os_1_1Value.html#adb0a82ddc765b861144cbf1c01313216",
"classyarp_1_1os_1_1idl_1_1WireReader.html#a3f90fbde5d0164c8028a510401e5312e",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a74b9bdfe15e4d7d84685b552fde8d616",
"classyarp_1_1os_1_1impl_1_1DgramTwoWayStream.html#a0ff2b10caf0c9a51a1691d374201da54",
"classyarp_1_1os_1_1impl_1_1LocalCarrier.html#ac9b84fce1eb12de84c1580b496ff1fa9",
"classyarp_1_1os_1_1impl_1_1NameClient.html#afd73a6ad47a65092e0f477cdfe2ec3ef",
"classyarp_1_1os_1_1impl_1_1PortCore.html#aa81fca006e4881dcbb20a361811d4978",
"classyarp_1_1os_1_1impl_1_1PortCoreUnit.html#aa65d32a007a786697f43981c93b9ab42",
"classyarp_1_1os_1_1impl_1_1Storable.html#aa4128d2e85779002cfb04e9f588c96ee",
"classyarp_1_1os_1_1impl_1_1StoreInt64.html#a104ca1ac0cd74a78eb64ea3ac4945be6",
"classyarp_1_1os_1_1impl_1_1StreamConnectionReader.html#a783a4331463a314078f6826582df64e6",
"classyarp_1_1os_1_1impl_1_1posix_1_1TcpStream.html#a29a88c1c8896c0d7d246b5bf77deba45",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControlsDC1394__Forwarder.html#a01bcd6b35349f15fb1355ff2f69188c6",
"classyarp_1_1robotinterface_1_1Device.html#a4e0cdb47002239929e02673fcff08db3",
"classyarp_1_1robotinterface_1_1Robot_1_1Private.html#ad997b366c53a6a3041b0749d33e76ce6",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV3_1_1Private.html#aefe27fd7cd2d9d7f73aa2169c47585a7",
"classyarp_1_1serversql_1_1impl_1_1NameServiceOnTriples.html#ab38a3b865f86f28d3887b6871d3a0fd6",
"classyarp_1_1sig_1_1AudioBufferSize.html#a9877d67ae02eff20a685f926a8f31ea1",
"classyarp_1_1sig_1_1LaserScan2D.html#a60ceeb759a6ed103cc5003bbf4b9c88c",
"classyarp_1_1sig_1_1VectorBase.html",
"classyarpdataplayer__IDL.html#a16cc9a4e9fed24db6b7b3413eb71b881",
"classyarpdataplayer__IDL__quit__helper_1_1Reply.html",
"classyarpdataplayer__console__IDL__forward__helper.html#a444276e8cdd9ad8131ecc031f33b3aaa",
"classyarpdataplayer__console__IDL__load__helper.html#a6beda5c5eb4cf1f61476a8f1c827a026",
"classyarpdataplayer__console__IDL__setPortName__helper_1_1Command.html#a37ff3010029edea9beb3e4e74491c6ce",
"classyarprobotinterfaceRpc__get__level__helper.html#a78bf585a4aab66b6a1ecae197aedb77b",
"commands_2yarpdatadumper_2main_8cpp.html#af261caa616a330969044eb9dde645aceab7b0ea7b983724b04d1a1b1f81ba4d6b",
"depthCameraDriver_8cpp.html#a4455f5f991334d5406a5364b77a9408e",
"dir_65366b9585d237bef23b0eae737bd292.html",
"dir_cea09ea050b4f218257144e36af69b33.html",
"dr__mp3_8h.html#af7cf55a0ad3a8adfc515d3b9df88cd3f",
"environment_8h.html",
"functions_eval_l.html",
"globals_vars_t.html",
"img-battery-charging-060_8h_source.html",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h.html#a33de275f991abda35d0ccc6ff17a25b3",
"math_8cpp.html#aae590b4dd6d1998cb80797e161d4607a",
"namespaceyarp_1_1dev.html#aa6e0de626466de7cfa94283de02a8c4e",
"namespaceyarp_1_1math.html#a52e750c2d428f88b87e223fbc0f79bb6",
"namespaceyarp_1_1sig.html#ac143e7160c4dfde2e47ecf07f59e9716aa49866df14fab4d30acdcf5c0e98b892",
"piddlg_8cpp.html#a4b4e3974810ec0e251b126b284c2209f",
"return__ask_8cpp_source.html",
"robotDriver_8cpp.html#a7bd9efb563100ab94c500bfe9d2e4e83",
"structButtonState.html#a01002ff64a2975ed5fe64931651f2325",
"structJoypadControl_1_1LoopablePort.html#a18aad0fc45f188190392d80a2f5c720a",
"structTextureStatic_1_1Image.html#a0a3954eb9f92284f7a9d5fe85de28aba",
"structdrwav__fmt.html#a4e2484decd3b42c4c5d4076ce6696d33",
"structyarp_1_1cv_1_1convert__code__from__cv_3_01yarp_1_1sig_1_1PixelRgba_01_4.html",
"structyarp_1_1manager_1_1____GyPoint.html",
"structyarp_1_1sig_1_1DataNormalNoCurvature.html#acd5a33ccf76ceb25fb7d1524181a6500",
"structyarp_1_1yarpLogger_1_1MessageEntry.html#a0160c58d62ceb4408638ad7e3bce7939",
"testControlExposition_8cpp.html",
"v2_3_68.html#autotoc_md184",
"v3_10_0.html#autotoc_md423",
"v3_4_0.html#autotoc_md738",
"v3_7_0.html#autotoc_md1045",
"xmlloader_8cpp_source.html",
"yarp_http.html#yarp_http_data",
"yarpmanager_2src-manager_2mainwindow_8h_source.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';