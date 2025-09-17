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
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1124", [
            [ "Fixes", "v3_9_1.html#autotoc_md1125", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1126", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1127", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1128", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1129", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1130", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1131", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1132", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1133", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1105", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1106", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1107", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1108", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1109", [
              [ "Docker", "v3_9_0.html#autotoc_md1110", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1111", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1112", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1113", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1114", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1115", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1116", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1117", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1118", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1119", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1120", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1121", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1122", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1123", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1096", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1097", [
              [ "tools", "v3_8_1.html#autotoc_md1098", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1099", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1100", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1101", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1102", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1103", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1104", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1055", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1056", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1057", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1058", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1059", [
              [ "Libraries", "v3_8_0.html#autotoc_md1060", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1061", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1062", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1063", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1064", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1065", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1066", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1067", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1068", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1069", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1070", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1071", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1072", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1073", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1074", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1075", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1076", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1077", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1078", null ],
              [ "Other", "v3_8_0.html#autotoc_md1079", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1080", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1081", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1082", [
              [ "bindings", "v3_8_0.html#autotoc_md1083", null ],
              [ "devices", "v3_8_0.html#autotoc_md1084", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1085", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1086", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1087", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1088", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1089", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1090", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1091", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1092", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1093", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1094", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1095", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1047", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1048", [
              [ "Documentation", "v3_7_2.html#autotoc_md1049", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1050", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1051", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1052", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1053", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1054", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1038", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1039", [
              [ "CMake", "v3_7_1.html#autotoc_md1040", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1041", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1042", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1043", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1044", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1045", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1046", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1013", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1014", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1015", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1016", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1017", [
              [ "Libraries", "v3_7_0.html#autotoc_md1018", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1019", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1022", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1023", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1024", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1025", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1026", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1027", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1028", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1029", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1030", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1031", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1032", [
              [ "Catch2", "v3_7_0.html#autotoc_md1033", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1034", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1035", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1036", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1037", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md956", [
            [ "Important Changes", "v3_6_0.html#autotoc_md957", [
              [ "Dependencies", "v3_6_0.html#autotoc_md958", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md959", [
              [ "Devices", "v3_6_0.html#autotoc_md960", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md961", [
              [ "Libraries", "v3_6_0.html#autotoc_md962", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md963", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md964", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md970", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md971", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md981", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md982", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md983", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md984", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md985", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md986", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md987", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md988", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md989", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md990", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md991", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md992", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md993", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md994", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md995", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md996", null ],
              [ "Tools", "v3_6_0.html#autotoc_md997", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md998", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md999", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md1000", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md1001", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1002", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1003", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1004", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1005", [
              [ "Build System", "v3_6_0.html#autotoc_md1006", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1007", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1008", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1009", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1010", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1011", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1012", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md910", [
            [ "New Features", "v3_5_1.html#autotoc_md911", [
              [ "Libraries", "v3_5_1.html#autotoc_md912", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md913", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md914", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md915", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md916", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md920", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md921", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md922", null ],
              [ "Devices", "v3_5_1.html#autotoc_md923", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md924", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md925", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md926", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md927", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md928", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md929", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md930", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md931", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md932", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md933", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md934", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md935", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md936", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md937", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md938", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md939", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md940", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md941", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md942", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md943", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md944", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md945", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md946", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md947", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md948", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md949", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md950", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md951", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md952", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md953", [
                [ "Python", "v3_5_1.html#autotoc_md954", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md955", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md808", [
            [ "Important Changes", "v3_5_0.html#autotoc_md809", [
              [ "Dependencies", "v3_5_0.html#autotoc_md810", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md811", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md812", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md814", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md815", [
              [ "Libraries", "v3_5_0.html#autotoc_md816", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md817", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md818", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md830", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md832", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md835", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md836", null ],
              [ "Devices", "v3_5_0.html#autotoc_md837", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md838", [
              [ "Libraries", "v3_5_0.html#autotoc_md839", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md840", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md841", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md842", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md852", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md858", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md867", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md869", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md870", null ],
              [ "Devices", "v3_5_0.html#autotoc_md871", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md872", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md873", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md874", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md875", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md876", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md877", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md878", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md879", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md880", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md881", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md882", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md883", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md884", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md885", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md886", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md887", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md888", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md889", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md890", [
              [ "Carriers", "v3_5_0.html#autotoc_md891", null ],
              [ "Devices", "v3_5_0.html#autotoc_md892", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md893", [
                [ "Python", "v3_5_0.html#autotoc_md894", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md895", [
              [ "Libraries", "v3_5_0.html#autotoc_md896", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md897", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md900", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md901", null ],
              [ "Devices", "v3_5_0.html#autotoc_md902", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md903", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md904", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md905", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md906", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md907", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md908", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md909", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md793", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md794", null ],
            [ "Build System", "v3_4_6.html#autotoc_md795", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md796", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md797", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md798", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md799", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md800", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md801", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md802", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md803", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md804", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md805", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md806", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md807", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md785", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md786", [
              [ "Libraries", "v3_4_5.html#autotoc_md787", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md788", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md790", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md791", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md792", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md774", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md775", [
              [ "Build System", "v3_4_4.html#autotoc_md776", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md777", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md778", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md779", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md780", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md781", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md782", [
                [ "Python", "v3_4_4.html#autotoc_md783", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md784", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md763", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md764", [
              [ "Libraries", "v3_4_3.html#autotoc_md765", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md766", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md767", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md768", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md769", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md770", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md771", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md772", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md773", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md742", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md743", [
              [ "Build System", "v3_4_2.html#autotoc_md744", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md745", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md746", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md748", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md749", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md752", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md753", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md754", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md755", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md756", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md757", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md758", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md759", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md760", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md761", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md762", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md724", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md725", [
              [ "Build System", "v3_4_1.html#autotoc_md726", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md727", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md728", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md730", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md732", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md733", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md734", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md735", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md736", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md737", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md738", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md739", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md740", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md741", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md649", [
            [ "Important Changes", "v3_4_0.html#autotoc_md650", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md651", [
              [ "Build System", "v3_4_0.html#autotoc_md652", [
                [ "os", "v3_4_0.html#autotoc_md654", null ],
                [ "dev", "v3_4_0.html#autotoc_md661", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md662", null ],
              [ "Tools", "v3_4_0.html#autotoc_md663", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md665", [
              [ "Build System", "v3_4_0.html#autotoc_md666", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md669", [
                [ "conf", "v3_4_0.html#autotoc_md670", null ],
                [ "os", "v3_4_0.html#autotoc_md671", null ],
                [ "sig", "v3_4_0.html#autotoc_md679", null ],
                [ "math", "v3_4_0.html#autotoc_md682", null ],
                [ "dev", "v3_4_0.html#autotoc_md683", null ],
                [ "logger", "v3_4_0.html#autotoc_md684", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md685", null ],
              [ "Devices", "v3_4_0.html#autotoc_md686", null ],
              [ "Tools", "v3_4_0.html#autotoc_md701", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md704", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md710", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md711", [
              [ "Libraries", "v3_4_0.html#autotoc_md712", [
                [ "os", "v3_4_0.html#autotoc_md713", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md714", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md715", null ],
              [ "Devices", "v3_4_0.html#autotoc_md716", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md717", [
              [ "Libraries", "v3_4_0.html#autotoc_md718", [
                [ "os", "v3_4_0.html#autotoc_md719", null ],
                [ "sig", "v3_4_0.html#autotoc_md721", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md723", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md630", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md631", [
              [ "Build System", "v3_3_3.html#autotoc_md632", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md633", [
                [ "os", "v3_3_3.html#autotoc_md634", null ],
                [ "dev", "v3_3_3.html#autotoc_md638", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md639", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md646", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md648", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md623", [
            [ "Contributors", "v3_3_2.html#autotoc_md629", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md610", [
            [ "Important Changes", "v3_3_1.html#autotoc_md611", [
              [ "Dependencies", "v3_3_1.html#autotoc_md612", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md613", [
              [ "Libraries", "v3_3_1.html#autotoc_md614", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md615", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md616", [
                [ "grabberDual", "v3_3_1.html#autotoc_md617", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md618", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md619", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md620", [
                [ "Perl", "v3_3_1.html#autotoc_md621", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md622", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md585", [
            [ "Important Changes", "v3_3_0.html#autotoc_md586", [
              [ "Dependencies", "v3_3_0.html#autotoc_md587", null ],
              [ "Build System", "v3_3_0.html#autotoc_md588", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md589", [
                [ "YARP_os", "v3_3_0.html#autotoc_md590", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md591", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md592", [
              [ "Build System", "v3_3_0.html#autotoc_md593", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md594", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md595", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md596", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md597", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md598", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md599", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md602", null ],
              [ "devices", "v3_3_0.html#autotoc_md604", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md605", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md609", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md576", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md577", [
              [ "Build System", "v3_2_2.html#autotoc_md578", null ],
              [ "Devices", "v3_2_2.html#autotoc_md579", null ],
              [ "Tools", "v3_2_2.html#autotoc_md582", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md584", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md563", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md564", [
              [ "Carriers", "v3_2_1.html#autotoc_md565", null ],
              [ "Devices", "v3_2_1.html#autotoc_md567", null ],
              [ "Tools", "v3_2_1.html#autotoc_md569", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md572", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md575", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md553", [
            [ "Important Changes", "v3_2_0.html#autotoc_md554", [
              [ "Dependencies", "v3_2_0.html#autotoc_md555", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md556", null ],
              [ "Devices", "v3_2_0.html#autotoc_md557", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md558", [
              [ "Build System", "v3_2_0.html#autotoc_md559", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md560", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md561", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md562", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md545", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md546", [
              [ "CMake", "v3_1_2.html#autotoc_md547", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md548", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md549", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md550", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md551", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md552", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md523", [
            [ "New Features", "v3_1_1.html#autotoc_md524", [
              [ "Build System", "v3_1_1.html#autotoc_md525", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md526", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md527", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md528", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md529", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md530", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md531", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md532", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md533", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md534", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md535", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md536", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md537", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md538", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md539", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md540", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md541", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md542", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md543", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md544", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md508", [
            [ "New Features", "v3_1_0.html#autotoc_md509", [
              [ "Libraries", "v3_1_0.html#autotoc_md510", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md511", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md512", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md513", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md514", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md515", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md516", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md517", [
                [ "yarp", "v3_1_0.html#autotoc_md518", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md519", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md520", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md521", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md522", null ]
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
        [ "Code Style", "contributing.html#autotoc_md1134", [
          [ "C++", "contributing.html#autotoc_md1135", [
            [ "Header guards", "contributing.html#autotoc_md1136", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1137", null ],
          [ "Git", "contributing.html#autotoc_md1138", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1139", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1140", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1142", null ],
          [ "Example", "contributing.html#autotoc_md1143", null ],
          [ "Terminology", "contributing.html#autotoc_md1144", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1145", [
          [ "Deprecated Features", "contributing.html#autotoc_md1146", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1147", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1148", null ]
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
"FakeBot_8h.html#a17d2881e93c6abd0bb2c8e043af3ddb7",
"FakeSpeechTranscription_8cpp_source.html",
"GenericVocabs_8h.html#a6a7a795e8de0055f4256103723a3e05c",
"ICurrentControlTest_8cpp.html",
"IJoypadController_8h_source.html",
"IRGBDSensor_8cpp_source.html",
"Image_8copyPixels_8cpp.html#a4375f43ac64ecfc08ea5efff9e5c7d86",
"ImplementMotor_8cpp.html",
"Localization2D__nws__yarp__ParamsParser_8h_source.html",
"MapGrid2D_8h.html",
"MultiNameSpace_8cpp.html#a28e00556a3b777da7ef819772a4b3c50",
"Node_8h.html",
"PointCloudTypes_8h.html#a9295f5441020fdd11c4f260b91c234d6aa5b0cc9e0393d2c5429ce5d79f0d6587",
"Protocol_8h.html",
"RgbdSensor__nws__yarp_8cpp.html",
"SerialPort__nws__yarp__ParamsParser_8h_source.html",
"TcpStream_8h_source.html",
"Vec2D_8cpp.html#a0a4d8f7ec85a9f3f61c7345b3f60689d",
"batchqosconfdialog_8cpp_source.html",
"classApplicationItem.html#a7321c24dc11be6f51c3c90d1e2e935ee",
"classAudioRecorder__nws__yarp__ParamsParser.html#a5183ddf49e241e52ddd201d9943ec558",
"classBoschIMU.html#a4cf66fec03cf3d8f58eb9743fbe76e8c",
"classChatBot__nws__yarp__ParamsParser.html#a57d19597c1a548591aa78fad5e1354bf",
"classControlBoardRemapper.html#ad8f3a9de195a209f654dff9be078b7d7",
"classDepthImageZlibMonitorObject.html#aa34cdaeff44405f4be8af54c2c205437",
"classFSM_1_1Event.html#a3d20decc3b0abb57a56a87aa8a5bef87",
"classFakeBatteryService__getBatteryInfo__helper_1_1Command.html#ac90fc2212539f41b032493613ffaa168",
"classFakeBatteryService__setBatteryInfo__helper_1_1Reply.html",
"classFakeBot.html#adb7fe328c8fff05374574ceb63ef4d08",
"classFakeFrameGrabber.html#a6b60188a326d2ecc7c4877ecdb5c6a15",
"classFakeJoypad.html#a38d992d547ca7370066f0bdb573d066a",
"classFakeLaserWithMotor.html#a905e6d482500b8b8c92c7806663bdeb4",
"classFakeMicrophone__ParamsParser.html#aeb1312ce0c52cf0095cbfd892f9d7e1e",
"classFakeMotionControl.html#aaa38d3ee71ad8433943c0f6f6b19cad8",
"classFakeMotionControl__ParamsParser.html#a43f1b79359d4c725edde4b935ef0ee04",
"classFakeSerialPort__ParamsParser.html#a286b3ef26b74885653f23bf78bad782d",
"classFfmpegMonitorObject.html#ab69d168b2258b596385103546aad58bb",
"classFrameGrabber__nws__ros2.html#a81e11bcc36219c94778a0e00823a1e34",
"classFrameTransformSetMultiplexer.html",
"classFrameTransformStorageSetRPC__setTransformRPC__helper_1_1Command.html#a7f5cb915dd0f8de3d08098653835ea4d",
"classGoogleDialogFlowCxChatBot__ParamsParser.html",
"classIAudioGrabberMsgs.html#ac8441cdcbfe35527ec633b0f654669d8",
"classIAudioGrabberMsgs__startRecording__RPC__helper.html#a0732af48b27cd7c4e1dc2abdcc53e5d5",
"classIChatBotMsgs__interactRPC__helper_1_1Reply.html#a46ff43a23e9003c0445044f99f96cb89",
"classILocalization2DMsgs__get__estimated__poses__RPC__helper_1_1Reply.html#afb001b5a88af6961f483591233d1b6d8",
"classIMap2DMsgs__clear__all__areas__RPC__helper_1_1Command.html#a68cda73df450abcf9b0820e1e7226ab9",
"classIMap2DMsgs__delete__location__RPC__helper_1_1Reply.html#a6620039935c78ece8b8dad4a4e96a6a5",
"classIMap2DMsgs__get__areas__list__RPC__helper_1_1Reply.html#adf3640641e873f1e98d2402304678cd4",
"classIMap2DMsgs__load__map__from__disk__RPC__helper.html#a68ada3699a03ec040ddc69b211653b6c",
"classIMap2DMsgs__save__map__to__disk__RPC__helper.html#a096b1fa6a6edb1a14f445ec3c68e8a92",
"classIMap2DRPCd.html#afbd514c02490ed74a9fe503a7df6ffd7",
"classINavigation2DMsgs__get__last__velocity__command__RPC__helper.html#a00d74225f7431ac75ac8a71e447456e4",
"classINavigation2DMsgs__goto__target__by__relative__location2__RPC__helper.html#a951b1aad168370cf8d615e2bd6bc6d7b",
"classIRangefinder2DMsgs.html#ad15b88eea5643ca87f457919748cf5b7",
"classIRangefinder2DMsgs__setHorizontalResolution__RPC__helper.html#a9e1e4bb21e376e8ed280d7c36ab3f831",
"classIRobotDescriptionMsgs__unregisterAllRPC__helper_1_1Command.html",
"classISpeechSynthesizerMsgs__get__speed__helper.html#abb7dbfb42509218619b5c77ae965019e",
"classISpeechTranscriptionMsgs.html#a11809b855a662fc511ce2af3f316cb31",
"classItemSignalHandler.html#a77bb5fcde2bfcba63d7c941d58251809",
"classLLM__nwc__yarp__ParamsParser.html#a51cc5d4576903b4cfc774bc1eeac5bda",
"classLocalization2D__nws__ros2__ParamsParser.html#aa4c05acf401e9c7a756a2d25fcc3fa9c",
"classMainWindow.html#abfba2453472cc88fa3d5201c4594abe0",
"classMap2D__nws__ros2__ParamsParser.html#afe35498b8afb374e5eb69221509b20dc",
"classMobileBaseVelocityControl__nwc__yarp__ParamsParser.html#a8cc9e6f109ac5a2f169ada73a0c53f90",
"classMpiComm.html#afd95c093aeb063ee31de39a1a9104b5c",
"classMultipleAnalogSensorsRemapper.html#ac5180fa4094bc08692fd796c9091f91a",
"classNavigation2D__nws__yarp__ParamsParser.html#a19256eed0fd0fb83797550e253f26237",
"classOdometry2D__nws__yarp__ParamsParser.html#a746770be773373725678edaa86ccdd4e",
"classPcmWavHeader.html#ab58f408ae07555f27b5a0621a3089fd6",
"classPortItem.html#ac7894abd4ac8527fc91b1c4b02c6271e",
"classQtYARPView.html#aa6ae777cfd3bec10823aef117f3a7061",
"classRangefinder2DTransformer.html#ac561dcec306450faec6e3c1c770d5a1b",
"classRangefinder2D__nws__ros2__ParamsParser.html#a17e1288dba8e1063e13238f8d4968544",
"classRemoteControlBoard.html#a99a79acba83b461f0775c899ea60dbad",
"classRgbdSensor__nwc__ros2.html#a95f2312612f5d7ec7a6019112fa8358e",
"classRos2InitMobVel.html#ac51548de856382817089252c02f08bd3",
"classSegmentationImageConverter.html#ac35c391942de9ea716852ea27fbad02a",
"classShmemHybridStream.html#a1aaf8bef90afc2f2a1805abe51a69c7a",
"classSpeechTranscription__nwc__yarp__ParamsParser.html#a348671da6fcabf7531c61748e21d7315",
"classTtsDevice.html#a8ef44cc91e9802b78a07c8ee572cd29e",
"classV4L__camera.html#aa0f156f0aae85706c1f3cf8c1d168039",
"classZfpMonitorObject.html",
"classpylonCameraDriver.html#a9ed6bcffc4204175806648b604505eba",
"classreturn__getDistanceRange.html#a2a7a5c42021542d4e7810b27cff0f079",
"classreturn__get__estimated__odometry.html#a79ef447a717f1e31aadd018e645c14d8",
"classreturn__set__speed.html#aa6fe6f5041f1d18b9b243b21e4bc87bc",
"classyarpActionsPlayer__IDL__play__action__helper.html#afafdaf6a23291d20b1377f2c42868c1c",
"classyarpActionsPlayer__IDL__speed__factor__helper_1_1Command.html#a5d1f878b11663349268b433a8eb6aaac",
"classyarp_1_1dev_1_1CanMessage.html#a2e849b0295cbb9709ec2cf7ad75a965a",
"classyarp_1_1dev_1_1ControlBoardHelper_1_1PrivateUnitsHandler.html#a03ec3a5d57c39cd4980b5439d3035e9c",
"classyarp_1_1dev_1_1IAxisInfo.html#a1350180d6aaaba2dd8f22c42655f207e",
"classyarp_1_1dev_1_1IEncodersRaw.html#ae4db59c7602d6005816cedd465aed325",
"classyarp_1_1dev_1_1IJoypadController.html#a04f8d5b316be112bb6f5c797bc35ad72",
"classyarp_1_1dev_1_1IPidControl.html#aee24a0ddb3da668ad6e4d11ac064b80f",
"classyarp_1_1dev_1_1ISpeechSynthesizer.html#aa422344d001ef57cf0891c6c52bf0f2f",
"classyarp_1_1dev_1_1ImplementControlCalibration.html#a00b93c2e7110e5d7cc13325b8f23b99a",
"classyarp_1_1dev_1_1ImplementJointFault.html",
"classyarp_1_1dev_1_1ImplementPositionControl.html#ae07731d8be9f16a9a3b81318106ee57b",
"classyarp_1_1dev_1_1Lidar2DDeviceBase.html#a6f80faaddaf987a20d97f890a9374b19",
"classyarp_1_1dev_1_1Nav2D_1_1INavigation2DTargetActions.html#a55d4585751490bc85f0c67a55e462974",
"classyarp_1_1dev_1_1OVRHeadset.html#a12f4e98dc11cde9f24ddf5f22f050e2f",
"classyarp_1_1dev_1_1ReturnValue.html#aec60cd4e870bdc98732a25270dd6671b",
"classyarp_1_1dev_1_1StubImplVelocityControlRaw.html#a18f519e1313366bd188a1c04eb77961b",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__deleteConversation__helper.html#a2d18ff5cac38451f7eea8c9a8022e9b3",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__refreshConversation__helper_1_1Reply.html",
"classyarp_1_1manager_1_1Application.html#a6cb7a82bbf2217aa6cbbda5a23ec9d12",
"classyarp_1_1manager_1_1Broker.html#ab4e813f7da2bb39e899b6426262997e2",
"classyarp_1_1manager_1_1EventFactory.html",
"classyarp_1_1manager_1_1Graph.html#a4ffeb2df471e01a8a293663602be69cd",
"classyarp_1_1manager_1_1LocalBroker.html#a1027855904cd73034d97e104493f2420a05ff11b2d035f283bea53d86fdebbadc",
"classyarp_1_1manager_1_1Module.html#a0b46166cb5398acd3fd5268c770aa8d3",
"classyarp_1_1manager_1_1Network.html",
"classyarp_1_1manager_1_1ScriptLocalBroker.html#a69270d4263351dac2ba09fb7d4e37022",
"classyarp_1_1manager_1_1YarpBroker.html#af1c9005eea2177df349ec6257592d990",
"classyarp_1_1math_1_1Vec2D.html#ade92d3ad6e8dcb3e9bf46b907d41d832",
"classyarp_1_1os_1_1AbstractContactable.html#add5acdb62da4beccf87d097964f5ae78",
"classyarp_1_1os_1_1Carrier.html#af97ef0bf594a93906dbb451b2835e172",
"classyarp_1_1os_1_1ConnectionWriter.html#a5e98514238fc5a78e2525bd288eff103",
"classyarp_1_1os_1_1Header.html#a955a442f4aadf3a0e365827c241767bf",
"classyarp_1_1os_1_1LogStream.html#afbd40bcbd12a23d786bdca38652e5532",
"classyarp_1_1os_1_1NestedContact.html#a174b68e452ce5d5160364d034ebe24fd",
"classyarp_1_1os_1_1Nodes_1_1Private.html#a43c32c335f5cb3d3c3c91146e67a3ca8",
"classyarp_1_1os_1_1OutputStream.html#a6df7cbb8c986babad88660e69fc76e44",
"classyarp_1_1os_1_1PortReaderBufferBase.html#a8854ae519d67760d552c1e63cb4f7f9d",
"classyarp_1_1os_1_1RFModule.html#a58ce26fc6fdcb6eb4af8e8dc678e095e",
"classyarp_1_1os_1_1RosNameSpace.html#a9a97d5babb7d39b8e114b8f8d63bee85",
"classyarp_1_1os_1_1SizedWriter.html#aa866209a439171ead52b2d94cb844d03",
"classyarp_1_1os_1_1Thread_1_1Private.html",
"classyarp_1_1os_1_1Value.html#a4feee58a12dee0e66512e4caa4197c39",
"classyarp_1_1os_1_1idl_1_1BareStyle.html#a4d7e64a9d0ee2291b5644bea2124c852",
"classyarp_1_1os_1_1impl_1_1AuthHMAC.html#a49d1ac8a300225ce3d820eb1512652c0",
"classyarp_1_1os_1_1impl_1_1ConnectionRecorder.html#a5e0a95dfd780d99aff68ee6ab55cd40d",
"classyarp_1_1os_1_1impl_1_1HttpTwoWayStream.html#a463a5c999ae36099a3151026b55e910d",
"classyarp_1_1os_1_1impl_1_1McastCarrier.html#ac98d73c56da77e2da3cd25967df8611b",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a1500b1ab36452e9c0c518eff8cace19f",
"classyarp_1_1os_1_1impl_1_1PortCorePacket.html#a1365e5a78d5dfcc488d70046c0e521ed",
"classyarp_1_1os_1_1impl_1_1Storable.html",
"classyarp_1_1os_1_1impl_1_1StoreInt16.html#a4f751d69d4505824ecd97444b6a5d5b5",
"classyarp_1_1os_1_1impl_1_1StoreVocab32.html#a31a2a5cd576e5b7930c9f247fd8d4d57",
"classyarp_1_1os_1_1impl_1_1UdpCarrier.html",
"classyarp_1_1profiler_1_1graph_1_1ProcessVertex.html#a9fed8e1f64d6a5747cb8d52182ee0d46",
"classyarp_1_1robotinterface_1_1Action.html#a67dbb7407dd0f16f9fb44204b10edad6",
"classyarp_1_1robotinterface_1_1RobotInterfaceDTD.html#aa9a657be5b0b42626a90cc246123620ca18b0b1f2231aa34e41ad60ae19813ed5",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV1_1_1Private.html#afc807970ee07a2111d90399dabeb2323",
"classyarp_1_1serversql_1_1impl_1_1ConnectThread.html",
"classyarp_1_1serversql_1_1impl_1_1Triple.html#ad9b9a75f22e35a6af9bedf6d56256765",
"classyarp_1_1sig_1_1ImageOf.html#ab78e092c6fca5ac188df0d0dcd1e3469",
"classyarp_1_1sig_1_1Sound.html#aa6895266691c997e56745922b9979177",
"classyarp_1_1yarpLogger_1_1LoggerEngine.html#a93121e613e4cc2310ca5077a4bf95dbb",
"classyarpdataplayer__IDL__play__helper_1_1Reply.html#a7b24781bd94e67ee5fe7597d8464c815",
"classyarpdataplayer__console__IDL__enable__helper.html#ad783fc847cc8175fe36165dfdc93a446",
"classyarpdataplayer__console__IDL__getStatus__helper.html#ad2c511fd11647e4d1bedb6dce3c18f8b",
"classyarpdataplayer__console__IDL__setFrame__helper_1_1Command.html#ab686baef4e7930ca87a39d13f77d43c9",
"classyarprobotinterfaceRpc__exit__helper_1_1Command.html#aa4a37e31c9d98e4b59acc05a5752e279",
"commands_2yarpDeviceParamParserGenerator_2main_8cpp.html#a0ddf1224851353fc92bfbff6f499fa97",
"data_rep.html#data_rep_code_cmd",
"dir_6223738026a7a39a8fd6b981315ee96f.html",
"dir_d164a21465e6716b7f571b419137cffe.html",
"environment_8h.html#a3c9fe7beee4e4cf2001047fa0784e66a",
"functions_eval_v.html",
"graph_8h.html",
"img-crosshairs_8h_source.html",
"libYARP__os_2src_2yarp_2os_2LogComponent_8h.html#a677a97e364857e0eafefacd5cff5dc7e",
"modestreemanager_8h_source.html",
"namespaceyarp_1_1dev_1_1Nav2D.html#af9dcd4110f9ab7ea2bc43fc9472d9629a8100397dfe9b3a8a71fd99160a5b2b8c",
"namespaceyarp_1_1math.html#af8196499621c49f1ac6efadadf79badf",
"namespaceyarp_1_1sig_1_1draw.html#af98a76051eb85a70741fb313b89b49fc",
"piddlg_8cpp.html#af310886725a2477b54ffe7ac87761860",
"return__getLanguage_8cpp_source.html",
"ros2PixelCode_8h.html#aa3f0af309c40a97951c6c602a03b5a73",
"structFakeLocalizer__ParamsParser_1_1parser__version__type.html#a98c40e93ae247a1cf1b5d5ef06048239",
"structPidUnits.html#ac6392a1841f06b1736176418fb9c45e8",
"structdrmp3dec__frame__info.html#ac8b0b572f5d049f8520abdd0ca0f9c49",
"structyarp_1_1dev_1_1CalibrationParameters.html#abb3db0163c4e3c4a28514243d2a03242",
"structyarp_1_1os_1_1YarpTimerEvent.html#a083775ef6ba3540bc80ee2cdff097df0",
"structyarp_1_1sig_1_1DataXYZNormal.html#a4f9336145f21624ce89e5ffbc0028d5a",
"swigluarun_8h.html#a593be2e6ac7fcc89ad16bb91651b7f65",
"utility_8h.html#af83da65ca75ac0335c1b36313023709f",
"v2_3_70_1.html#autotoc_md278",
"v3_1_1.html#autotoc_md527",
"v3_5_0.html#autotoc_md877",
"version_8h.html#a968dac4bd8be3a51efb19fc502608e5f",
"yarp_3_12.html#autotoc_md475",
"yarpcontextutils_8cpp.html#a1c471357e9dde32dbd30b68254fc41d1"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';