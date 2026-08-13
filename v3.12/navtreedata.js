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
"Log_8h.html#ac7fb240e8c0489e258bb8b76cf6aa014",
"MjpegDecompression_8cpp.html#a176426b0d339ed0e89c7f2c64c2d57a3",
"NameStore_8cpp.html",
"OpenCVWriter_8cpp.html",
"PortAudioDeviceDriver_8h.html#a2dd475425881969c899ffe595be82268",
"Rangefinder2DTransformer_8h.html",
"Route_8h.html",
"SimulatedWorld__nws__yarp__ParamsParser_8cpp_source.html",
"Time_8h.html#ac2feeb3791cbf7578578236fc04baabf",
"VoiceBoxSynthesizer__ParamsParser_8h.html",
"bottle_2main_8cpp-example.html",
"classApplicationViewWidget.html#a5cbd5371c30605d68a368fe685b3b153",
"classAudioRecorder__nws__yarp__ParamsParser.html#a211c6084caaa6b096b6e65a54f9ef9ec",
"classBoschIMU.html#a34172d3fd98122c877981e948160c184",
"classChatBot__nws__yarp__ParamsParser.html",
"classControlBoardRemapper.html#aa684266b6dd69225383bf22496253bd0",
"classCustomWizardPage.html#ac5dbe9a99c6261c48f0568e60195da36",
"classEntitiesTreeWidget.html#a6a7ae2f1c0e7d1eefd5f88af02bb59e0",
"classFakeBatteryService__getBatteryCurrent__helper_1_1Command.html#a6d15e22a91058b744b7e44eff54ff2c4",
"classFakeBatteryService__setBatteryCurrent__helper_1_1Reply.html#a83bc0dde9cf7f8b91d84653fd20e9692",
"classFakeBot.html#a96c3a4a045794da1b8db952da01b101e",
"classFakeFrameGrabber.html#a1d36d8185cba7b538aa2c0d2f743242d",
"classFakeJointCoupling.html#a985f6feb9237e510c82c7b1ac09c5d9e",
"classFakeLaserWithMotor.html#a6620f215bbce31dcd4f28504cf6f0704",
"classFakeMicrophone.html#a9bde221f9312d4e49574c8ff0c524e5e",
"classFakeMotionControl.html#a92b2506aee7308bd9ca0e67bfbf23b2c",
"classFakeMotionControlMicro__ParamsParser.html",
"classFakePythonSpeechTranscription__ParamsParser.html#a9228a95f79e3414500b59f8a65ceb779",
"classFakeSpeechTranscription__ParamsParser.html#a1629768988b1b0b4788a813a78df735c",
"classFrameGrabberCropper.html#aa8d9a70c2d083ce22db47fd7ee65e0c3",
"classFrameTransformClient__ParamsParser.html#ae800fd94d3aac44e7e3182a79313e9c5",
"classFrameTransformStorageGetRPC__getTransformsRPC__helper_1_1Reply.html#a471b0a5e3d665dd0b002dd5346421f6b",
"classGPTDevice__ParamsParser.html#a6864bff94aa59956b7e918d49eb4c8cb",
"classGptTranscribeDevice.html#a7a67515e0de12e83386935fc39ac0332",
"classIAudioGrabberMsgs__getRecordingAudioBufferCurrentSize__RPC__helper_1_1Reply.html#a9ebf3dc20f4d4e55c2a06f0e00d904f0",
"classIAudioGrabberMsgs__startRecording__RPC__helper_1_1Reply.html#ae79af513656701d0f4f26583b4a7b1ec",
"classIChatBotMsgs__resetBotRPC__helper_1_1Reply.html#a299faafab69784695d4d99d85e844039",
"classILocalization2DMsgs__get__localization__status__RPC__helper_1_1Reply.html#a96a06c3f31f60a059b5d481770cf1a40",
"classIMap2DMsgs__clear__all__locations__RPC__helper.html#a68bfe334e50cacc3dbe04a924cbbb439",
"classIMap2DMsgs__delete__location__RPC__helper_1_1Command.html#a62cac6490aca56edefbd6854dfde3477",
"classIMap2DMsgs__get__all__paths__RPC__helper_1_1Command.html#a97a29cf0bd895106c3b1e8d5528edea8",
"classIMap2DMsgs__get__object__RPC__helper_1_1Reply.html#a0bcc260b1e9170205b5a9cc600269c92",
"classIMap2DMsgs__reload__maps__collection__RPC__helper.html#a2aa0489362178df55435e305ce8cd404",
"classIMap2DMsgs__save__locations__and__extras__RPC__helper_1_1Reply.html#afca6248ed9130eb1712d31e600b8e2a0",
"classIMap2DMsgs__store__path__RPC__helper_1_1Command.html#afd71cb655d9daed1ce94e9e420345c00",
"classINavigation2DMsgs__get__current__nav__waypoint__RPC__helper_1_1Command.html#a12075d02118edc56ed688608f83b2364",
"classINavigation2DMsgs__goto__target__by__absolute__location__and__set__name__RPC__helper_1_1Command.html#aaf85214d51b3f22814bae53909302be7",
"classIOdometry2DMsgs__getRemoteProtocolVersion__helper.html#a6bdec7ee933e3d0e9298e54715a340a6",
"classIRangefinder2DMsgs__getScanRate__RPC__helper_1_1Command.html#af2471862ec7e6ded4fb4905180f44f4f",
"classIRobotDescriptionMsgs__getRemoteProtocolVersion__helper.html",
"classISimulatedWorldMsgsImpl.html#ae37566fc355f278109cd7b3e6a2c1052",
"classISimulatedWorldMsgs__enableGravity__helper_1_1Reply.html#a4a3f2b833d07e72f4a49ae4b54b28de7",
"classISimulatedWorldMsgs__makeModel__helper.html#a053db6367f05b4e7c91b2bf147a87be3",
"classISpeechSynthesizerMsgs__get__speed__helper.html#a5bf34c41b88bb254c7918e4c8d717e66",
"classISpeechSynthesizerMsgsd.html#af49174e7af94f51004184786a73e7535",
"classItemSignalHandler.html#a531bbe45ed552fab13263aade2b73005",
"classLLM__nwc__yarp__ParamsParser.html#a1ce976d8278c1e55afc470e30ffe6a4b",
"classLocalization2D__nwc__yarp__ParamsParser.html#a7bf8ee7da1bc9d54324267cc02f8b18a",
"classMainWindow.html#a460f32225a83247159e85fde47e2cd02",
"classMap2D__nwc__yarp.html#ae6afc7d3292974d4bda45795fa7f23af",
"classMobileBaseVelocityControlRPC__applyVelocityCommandRPC__helper.html#af541f65e7316b81ce3b7bc2778d7e278",
"classMonitorSharedLib.html#a8aa1d7fa1cb81d6a66f401e5b9636815",
"classMultipleAnalogSensorsMetadata.html#a6146712ea2e62d8f67fd5f5481dd2567",
"classNavigation2D__nwc__yarp.html#a97b4e91ad6168b114ec862bfaf0c6eab",
"classNop__ParamsParser.html#aaf95d4112ef48964778ae1643a63f08d",
"classParamsFilesGenerator.html#a7a66ad54c7ed07f732d287be824e9497",
"classPortAudioDeviceDriver.html#a9699a227438c44f8b080ff7b2a23bfbb",
"classPriorityGroup.html#a23388ac6007bf0c6e5608e8f37c7490b",
"classRGBDSensorClient.html#a1fc4b4225d06a8e41439d46094f37760",
"classRangefinder2D__nwc__ros2.html#a2ad088c1a0bfea324db363f870007ff1",
"classRemappedSubControlBoard.html#a9bc0dbfbdb56c65b922827b4ab87a2e6",
"classRemoteControlBoard.html#afa1774feebccfbd175b859f6612e7c47",
"classRgbdSensor__nws__ros2__ParamsParser.html#ae0debcfea0d08e6d38ffe54845e02d3d",
"classRpLidar3.html#a67029419762c113d5788b0023632d1a9",
"classSequenceWindow.html#a1b8d6c15f37c8affc08fbb38151a5539",
"classSimulatedWorld__nwc__yarp.html#a655402eae6197aae73e2b4e496dd97eb",
"classSpeechSynthesizer__nwc__yarp__ParamsParser.html#a4be8fe58aa45bc5f84ffefa2c98d1316",
"classTextureCrosshairs.html#a660807a34a5f21e51bb35eac58078e6a",
"classUltraPythonDriver.html#a5355611d9b54ae1cca9ef2d91be0fc23",
"classWhisperDevice__ParamsParser.html#a60190c76489806ea23ae47354aaddb16",
"classWorldInterfaceServer__detach__helper_1_1Reply.html#a5e58582430aecd6926ccc31cb936da39",
"classWorldInterfaceServer__makeBox__helper_1_1Command.html#a1d291540e9f2f4d67080a7177c837735",
"classYarpRunCmdWithStdioInfo.html#a3f3424ff855e1dbfffe90d47089d71a0",
"classgetPoseReturnValue.html#a32b310b7967bafe6a07a88b8f23ba84f",
"classrealsense2Tracking.html#af54cd7e9de22c4c4baf5f1ad4978a896",
"classreturn__get__all__nav__waypoints.html#a1602d5b8390648827bf23668e2d68035",
"classreturn__get__objects__list.html#a7cd2dcb8e9d8f70d11cd869b9376730e",
"classstreamFrameListener.html#a921bc71d1e4d109384ed891e9b8ce2d7",
"classyarpActionsPlayer__IDL__resample__helper_1_1Command.html",
"classyarpActionsPlayer__IDL__stop__helper_1_1Command.html#ac4a5743d69276f3992357d2f622ec905",
"classyarp_1_1dev_1_1CanErrors.html#a63c17178bf6e68798b7616326ca59008",
"classyarp_1_1dev_1_1ControlBoardHelper.html#af887a4ac20459f1dd8bb5e3c93c69637",
"classyarp_1_1dev_1_1IAudioRender.html#ab0cff5d31eb62287521e71d6a5aeaaee",
"classyarp_1_1dev_1_1IEncoders.html#a8b018f0e2386f8f42960042ca77bb892",
"classyarp_1_1dev_1_1IInteractionModeRaw.html#a816ca7e0eeba3b31a37de280aabd1a46",
"classyarp_1_1dev_1_1IPidControl.html#a29e8f684a15d859229a9ae2902f886da",
"classyarp_1_1dev_1_1ISimulatedWorld.html#a20f8f4b623d2e8771692eb794a45ef79",
"classyarp_1_1dev_1_1ImplementAmplifierControl.html#a89160800512b4e162f026e827e7d83d1",
"classyarp_1_1dev_1_1ImplementInteractionMode.html",
"classyarp_1_1dev_1_1ImplementPositionControl.html#a2c8b72d2800de227f980c8c361e49dbb",
"classyarp_1_1dev_1_1KeyboardJoypad.html#a73a41953dd1dbbbb1cd69f943cc56f18",
"classyarp_1_1dev_1_1Map2DLocationData.html#ab215ff15580fb9d8ad6e1d5307e6909e",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DArea.html#a0eee5f8d7d9550bff242504e8d811a7a",
"classyarp_1_1dev_1_1OdometryData.html#a0fa125127c52f6ea31c09af733711915",
"classyarp_1_1dev_1_1SensorMeasurement.html#a501d0141be22db1fa15d4a5f3ece4d00",
"classyarp_1_1dev_1_1WrapperMultiple.html",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__deleteConversation__helper_1_1Command.html#a51dd156c89a81262d60f2f299d14e6dc",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__setPrompt__helper.html#a8623be5e4d1f835f2e9f49a77944352d",
"classyarp_1_1dev_1_1xHandControlBoard.html#a457d066fb9a34a2e07566bf180b67ef3",
"classyarp_1_1dev_1_1xHandControlBoard.html#afe78933c590f8b3df83cfd4c60d59957",
"classyarp_1_1manager_1_1Author.html#aa9cc2a5e41c0d4fc77977e57bdb9da02",
"classyarp_1_1manager_1_1Connection.html#ab61416aa32dfafc582578eff82e4a061",
"classyarp_1_1manager_1_1GPU.html#a2ca7973e32f63ba3472166a007419a75",
"classyarp_1_1manager_1_1KnowledgeBase.html#a7ee6b52a671b1fc0466302c704bfb932",
"classyarp_1_1manager_1_1Manager.html#a706d0969ad44b9318f4799dc4dabb770",
"classyarp_1_1manager_1_1ModuleInterface.html#a425c26d8090d7c96396203aaab7130f9",
"classyarp_1_1manager_1_1Processor.html#abf4b043c16b374a5b5004bb698701a82",
"classyarp_1_1manager_1_1XmlModLoader.html#a37f89aa541ab211b4b2e5c4e87a1fd59",
"classyarp_1_1math_1_1Rand.html#a4377406ff7e7aa08e69a7b5042bb9653",
"classyarp_1_1os_1_1AbstractCarrier.html#aacac70a4b197580de3ffd870ef527cf4",
"classyarp_1_1os_1_1Bytes.html#add598a5394f38b32b317f170875cc054",
"classyarp_1_1os_1_1ConnectionReader.html#a81cef41af9af18633e5e9c9344a48a56",
"classyarp_1_1os_1_1Contactables.html#adbbb5842bed2f9643022a224b199d21c",
"classyarp_1_1os_1_1Log.html#aa16b46ff27fe977029d4830eb3fc3453ab6224c0d8cf9c26eb55af5873a37750b",
"classyarp_1_1os_1_1MultiNameSpace.html#aad999d7e2051d5ce8ed6414e33e28d1a",
"classyarp_1_1os_1_1Node_1_1Helper.html#a1fd72aaee42dc520c10a933979cc7e2b",
"classyarp_1_1os_1_1NullConnectionWriter.html#a762caac6d64f67069f05eb17145e54ad",
"classyarp_1_1os_1_1Port.html#aed1be3992f92f584698ca3bc4347d855",
"classyarp_1_1os_1_1Publisher.html#a355d267c6611c8d24ca316235151ad3b",
"classyarp_1_1os_1_1ResourceFinderOptions.html#a56db4ff8e76c846bfcea01e34b554e3ba2c026d6e9bcd4f4eb408937ba14508a5",
"classyarp_1_1os_1_1SharedLibraryClassFactory.html",
"classyarp_1_1os_1_1SystemInfo.html#a633252d51c4cfba79895b2579fe3168c",
"classyarp_1_1os_1_1TypedReaderCallback.html",
"classyarp_1_1os_1_1YarpNameSpace.html#ab15e45129c648c1be0378ace37a44cc1",
"classyarp_1_1os_1_1idl_1_1WireState.html#ad1fb6c99058923b172e44506c0cd22cb",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#a727a5710d3253c5968e7a09b7e945cc9",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html#a5247444ee09c0e96a882772647c789bf",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html#a2ad632be3e4b376b290338d5b50caa72",
"classyarp_1_1os_1_1impl_1_1NameserCarrier.html#a432d4833d6ef57bfd1877e0e76a7780e",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#acb699c4621821d60af8b9353111c7473",
"classyarp_1_1os_1_1impl_1_1Protocol.html#a91b553eb6eab17922edad3ef21755332",
"classyarp_1_1os_1_1impl_1_1StoreDict.html#aab4bce9e25232924f253a09a2957b517",
"classyarp_1_1os_1_1impl_1_1StoreList.html#a6c8c532c00f1f18b065958a1651fbfb0",
"classyarp_1_1os_1_1impl_1_1TextCarrier.html#a499b055f61845fe9af17b044459fe22f",
"classyarp_1_1profiler_1_1NetworkProfilerBasic.html#ab61c5d5def6c2d39604ad5ee7f74f337",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html#ac3716b8b0c9f905c231bad1d31b7af8d",
"classyarp_1_1robotinterface_1_1Param.html#afe7abad1c8edeb9802db1d8d91ff57ad",
"classyarp_1_1robotinterface_1_1impl_1_1CalibratorThread.html#a3bc4d22581af000f6e9572795ed4b268",
"classyarp_1_1robottestingframework_1_1jointsPosMotion_1_1Private.html#ac11a23e1c484d250b38f0b22747d9364",
"classyarp_1_1serversql_1_1impl_1_1Subscriber.html#a699046d7726a30948da9610baf84f766",
"classyarp_1_1sig_1_1Image.html#a1b1c8cc47354a8831f6a2f8f4be9fd1f",
"classyarp_1_1sig_1_1PointCloud.html#a4ab5c9c2eefa565d06e11f8ab8c2a54f",
"classyarp_1_1yarpLogger_1_1LogEntry.html",
"classyarpdataplayer__IDL__getSliderPercentage__helper_1_1Reply.html#af1aa3105d9c3225b82ee57aa1e6371a1",
"classyarpdataplayer__IDL__stop__helper.html#ae5b2efb355f709d6afbccb527863c852",
"classyarpdataplayer__console__IDL__getFrame__helper_1_1Command.html#aa84350ebd879e175b6867dcdff1d7612",
"classyarpdataplayer__console__IDL__play__helper_1_1Reply.html#a317960fcc3c3a480dca410c401abcb86",
"classyarpdataplayer__console__IDL__setStrict__helper_1_1Reply.html#abbc6346dc59a82b0765abd5080451cdf",
"classyarprobotinterfaceRpc__get__robot__helper_1_1Reply.html#a98bb385cd7d43411ad1a83006679fd74",
"compiler_8h.html#a7337f73a0914ccfd471c9defe12961c1",
"dir_1dc19abc7da52e2131091fa759f0b068.html",
"dir_8a464d839b273917bfac7c2d88e23739.html",
"dir_f698b8d9163f81ed0699dfed6ace1471.html",
"dr__wav_8h.html#a6afd791fe9026b2c3c4c2b995b62e58d",
"fakeDeviceWrapped__test_8cpp.html",
"functions_vars_r.html",
"group__yarpRobotDescriptionInfo.html",
"install_yarp_linux.html",
"libYARP__os_2src_2yarp_2os_2impl_2LogComponent_8h_source.html",
"namespacemembers.html",
"namespaceyarp_1_1dev_1_1tests.html#a9b1970694b990cfb68a290bf679a8d93",
"namespaceyarp_1_1os_1_1impl.html#a82724b4f9625db5338f25f1b6b753d53",
"newapplicationwizard_8cpp.html",
"port_power_2ex0507_alternative_compliant_target_receiver_8cpp-example.html",
"return__get__areas__list_8h.html",
"rpc_ports.html#rpc_ports_basics",
"structFakeNavigation__ParamsParser_1_1parser__version__type.html#a75759093825e36ed50075aa89ed37a4d",
"structOdometry2D__nws__ros2__ParamsParser_1_1parser__version__type.html#abe2f74cf8b5f93f7ae46036d5a88119b",
"structdrmp3.html#ad1d4cb4cb6209977963313a27f34c3bd",
"structguiParam.html#aca8a3eadf878c0a3b079d13270256cf7",
"structyarp_1_1dev_1_1FrameTransformContainer_1_1Iterator.html#ad16c5261bac6215b21361fb2902736ed",
"structyarp_1_1os_1_1YarpTimerEvent.html#ac85bf1474a0a1c4f16f97894263d66e9",
"structyarp_1_1sig_1_1DataXYZNormal.html#a718015660cbd0f7263e086ef09a5a118",
"swigluarun_8h.html#a6e2b880437634cb73e882be20de53d32",
"v2_1_3.html",
"v2_3_70_2.html",
"v3_1_0.html#autotoc_md535",
"v3_5_0.html#autotoc_md861",
"v3_9_1.html#autotoc_md1146",
"yarp_2src_2libYARP__robotinterface_2src_2yarp_2robotinterface_2api_8h.html#a095a5a6e90486443267deada6b3d35c6",
"yarpbroker_8cpp.html#a7fcddab83f5d58be3ec4f0ec78ad3247",
"ymm-types_8h.html#a2a258df14366136378c2aedcad4793f8af02cfb407dd1de082d4dd49c62456282"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';