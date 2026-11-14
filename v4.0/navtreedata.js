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
        [ "YARP <yarp-4.1.0> Release Notes", "yarp_4_1_0.html#autotoc_md91", null ]
      ] ],
      [ "YARP <yarp-3.12> (2025-06-04)", "yarp_3_12.html", [
        [ "YARP <yarp-3.12> Release Notes", "yarp_3_12.html#autotoc_md484", [
          [ "New Features", "yarp_3_12.html#autotoc_md485", [
            [ "Thrift", "yarp_3_12.html#autotoc_md486", null ],
            [ "Library", "yarp_3_12.html#autotoc_md487", [
              [ "<tt>libYARP_os</tt>", "yarp_3_12.html#autotoc_md488", null ]
            ] ],
            [ "Devices", "yarp_3_12.html#autotoc_md489", null ],
            [ "yarprobotinterface", "yarp_3_12.html#autotoc_md490", null ],
            [ "yarpmotorgui", "yarp_3_12.html#autotoc_md491", null ]
          ] ],
          [ "Breaking Changes", "yarp_3_12.html#autotoc_md492", [
            [ "Devices", "yarp_3_12.html#autotoc_md494", null ]
          ] ],
          [ "Other", "yarp_3_12.html#autotoc_md495", null ],
          [ "Contributors", "yarp_3_12.html#autotoc_md496", null ]
        ] ]
      ] ],
      [ "YARP <v4.0.1.1> (2026-09-07)", "yarp_4_0_1.html", [
        [ "YARP <v4.0.1.1> Release Notes", "yarp_4_0_1.html#autotoc_md1168", [
          [ "CI", "yarp_4_0_1.html#autotoc_md1171", null ],
          [ "Commands", "yarp_4_0_1.html#autotoc_md1172", [
            [ "libYARP_dev", "yarp_4_0_1.html#autotoc_md1169", null ],
            [ "libYARP_os", "yarp_4_0_1.html#autotoc_md1170", null ],
            [ "<tt>yarpidl_thrift</tt>", "yarp_4_0_1.html#autotoc_md1173", null ]
          ] ],
          [ "Contributors", "yarp_4_0_1.html#autotoc_md1174", null ]
        ] ]
      ] ],
      [ "YARP <v4.0.2.2> (2026-11-10)", "v4_0_2.html", [
        [ "YARP <v4.0.2.2> Release Notes", "v4_0_2.html#autotoc_md1175", [
          [ "Build system", "v4_0_2.html#autotoc_md1182", null ],
          [ "CI", "v4_0_2.html#autotoc_md1183", null ],
          [ "Contributors", "v4_0_2.html#autotoc_md1184", null ]
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
        [ "YARP 3.12.3 (2026-07-15)", "v3_12_3.html", [
          [ "YARP 3.12.3 Release Notes", "v3_12_3.html#autotoc_md530", [
            [ "libYARP_sig", "v3_12_3.html#autotoc_md531", null ],
            [ "libYARP_dev", "v3_12_3.html#autotoc_md532", null ],
            [ "libYARP_os", "v3_12_3.html#autotoc_md533", null ],
            [ "devices", "v3_12_3.html#autotoc_md534", null ],
            [ "Bindings", "v3_12_3.html#autotoc_md535", null ],
            [ "Commands", "v3_12_3.html#autotoc_md536", [
              [ "<tt>yarpAudioPlayer</tt>", "v3_12_3.html#autotoc_md537", null ],
              [ "<tt>yarprobotinterface</tt>", "v3_12_3.html#autotoc_md538", null ]
            ] ],
            [ "GUIs", "v3_12_3.html#autotoc_md539", [
              [ "<tt>yarpmanager</tt>", "v3_12_3.html#autotoc_md540", null ]
            ] ],
            [ "Contributors", "v3_12_3.html#autotoc_md541", null ]
          ] ]
        ] ],
        [ "YARP 3.12.2 (2025-12-10)", "v3_12_2.html", [
          [ "YARP 3.12.2 Release Notes", "v3_12_2.html#autotoc_md520", [
            [ "libYARP_dev", "v3_12_2.html#autotoc_md521", null ],
            [ "Devices", "v3_12_2.html#autotoc_md522", [
              [ "MultipleAnalogSensorsRemapper", "v3_12_2.html#autotoc_md523", null ]
            ] ],
            [ "Tests", "v3_12_2.html#autotoc_md524", null ],
            [ "Commands", "v3_12_2.html#autotoc_md525", [
              [ "<tt>yarpActionsPlayer</tt>", "v3_12_2.html#autotoc_md526", null ]
            ] ],
            [ "Bindings", "v3_12_2.html#autotoc_md527", null ],
            [ "Other", "v3_12_2.html#autotoc_md528", null ],
            [ "Contributors", "v3_12_2.html#autotoc_md529", null ]
          ] ]
        ] ],
        [ "YARP 3.12.1 (2025-08-26)", "v3_12_1.html", [
          [ "YARP 3.12.1 Release Notes", "v3_12_1.html#autotoc_md497", [
            [ "New Features", "v3_12_1.html#autotoc_md498", [
              [ "yarpRerun", "v3_12_1.html#autotoc_md499", null ],
              [ "yarpRobotDescriptionInfo", "v3_12_1.html#autotoc_md500", null ],
              [ "Library", "v3_12_1.html#autotoc_md501", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md502", null ]
              ] ],
              [ "Portmonitor", "v3_12_1.html#autotoc_md503", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md504", null ]
              ] ]
            ] ],
            [ "Fixes", "v3_12_1.html#autotoc_md505", [
              [ "Bindings", "v3_12_1.html#autotoc_md506", null ],
              [ "Executables", "v3_12_1.html#autotoc_md507", null ],
              [ "GUIs", "v3_12_1.html#autotoc_md508", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md509", null ]
              ] ],
              [ "Devices", "v3_12_1.html#autotoc_md510", null ],
              [ "Library", "v3_12_1.html#autotoc_md511", [
                [ "<tt>libYARP_os</tt>", "v3_12_1.html#autotoc_md512", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_12_1.html#autotoc_md513", null ]
              ] ]
            ] ],
            [ "Breaking Changes", "v3_12_1.html#autotoc_md514", [
              [ "GUIs", "v3_12_1.html#autotoc_md515", [
                [ "yarpmotorgui", "v3_12_1.html#autotoc_md516", null ]
              ] ],
              [ "Library", "v3_12_1.html#autotoc_md517", [
                [ "<tt>libYARP_dev</tt>", "v3_12_1.html#autotoc_md518", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_12_1.html#autotoc_md519", null ]
          ] ]
        ] ],
        [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
          [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md479", [
            [ "Fixes", "v3_11_2.html#autotoc_md480", [
              [ "GUIs", "v3_11_2.html#autotoc_md481", [
                [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md482", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_11_2.html#autotoc_md483", null ]
          ] ]
        ] ],
        [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
          [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md475", [
            [ "Changes", "v3_11_1.html#autotoc_md476", [
              [ "Compiler features", "v3_11_1.html#autotoc_md477", null ]
            ] ],
            [ "Contributors", "v3_11_1.html#autotoc_md478", null ]
          ] ]
        ] ],
        [ "YARP 3.11.0 (2025-02-18)", "v3_11_0.html", [
          [ "YARP 3.11.0 Release Notes", "v3_11_0.html#autotoc_md456", [
            [ "Breaking Changes", "v3_11_0.html#autotoc_md457", [
              [ "Library", "v3_11_0.html#autotoc_md458", [
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md459", null ]
              ] ],
              [ "Tests", "v3_11_0.html#autotoc_md460", null ],
              [ "Compiler features", "v3_11_0.html#autotoc_md461", null ]
            ] ],
            [ "Fixes", "v3_11_0.html#autotoc_md462", null ],
            [ "New Features", "v3_11_0.html#autotoc_md463", [
              [ "devices", "v3_11_0.html#autotoc_md464", [
                [ "multiplenalogsensorremapper", "v3_11_0.html#autotoc_md465", null ]
              ] ],
              [ "GUIs", "v3_11_0.html#autotoc_md466", [
                [ "<tt>yarpopencvdisplay</tt>", "v3_11_0.html#autotoc_md467", null ],
                [ "<tt>yarpmanager</tt>", "v3_11_0.html#autotoc_md468", null ]
              ] ],
              [ "Libraries", "v3_11_0.html#autotoc_md469", [
                [ "<tt>libYARP_sig</tt>", "v3_11_0.html#autotoc_md470", null ],
                [ "<tt>libYARP_dev</tt>", "v3_11_0.html#autotoc_md471", null ],
                [ "<tt>devices</tt>", "v3_11_0.html#autotoc_md472", null ]
              ] ],
              [ "Other", "v3_11_0.html#autotoc_md473", null ]
            ] ],
            [ "Contributors", "v3_11_0.html#autotoc_md474", null ]
          ] ]
        ] ],
        [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
          [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md452", [
            [ "Fixes", "v3_10_1.html#autotoc_md453", [
              [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md454", null ]
            ] ],
            [ "Contributors", "v3_10_1.html#autotoc_md455", null ]
          ] ]
        ] ],
        [ "YARP 3.10.0 (XXXX-XX-XX)", "v3_10_0.html", [
          [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md425", [
            [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md426", null ],
            [ "Deprecations and removals", "v3_10_0.html#autotoc_md427", null ],
            [ "Fixes", "v3_10_0.html#autotoc_md428", null ],
            [ "New Features", "v3_10_0.html#autotoc_md429", [
              [ "Carriers", "v3_10_0.html#autotoc_md431", null ],
              [ "Devices", "v3_10_0.html#autotoc_md432", [
                [ "Docker", "v3_10_0.html#autotoc_md430", null ],
                [ "controlboardremapper", "v3_10_0.html#autotoc_md433", null ],
                [ "deviceBundler", "v3_10_0.html#autotoc_md434", null ],
                [ "llmDevice", "v3_10_0.html#autotoc_md435", null ],
                [ "Navigation2D", "v3_10_0.html#autotoc_md436", null ],
                [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md437", null ],
                [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md438", null ],
                [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md439", null ],
                [ "ffmpeg_writer", "v3_10_0.html#autotoc_md440", null ],
                [ "portaudio", "v3_10_0.html#autotoc_md441", null ],
                [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md442", null ],
                [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md443", null ]
              ] ],
              [ "GUIs", "v3_10_0.html#autotoc_md444", [
                [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md445", null ]
              ] ],
              [ "Libraries", "v3_10_0.html#autotoc_md446", [
                [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md447", null ],
                [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md448", null ]
              ] ],
              [ "Bindings", "v3_10_0.html#autotoc_md449", [
                [ "Python", "v3_10_0.html#autotoc_md450", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_10_0.html#autotoc_md451", null ]
          ] ]
        ] ],
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1158", [
            [ "Fixes", "v3_9_1.html#autotoc_md1159", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1160", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1161", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1162", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1163", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1164", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1165", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1166", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1167", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1139", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1140", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1141", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1142", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1143", [
              [ "Docker", "v3_9_0.html#autotoc_md1144", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1145", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1146", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1147", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1148", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1149", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1150", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1151", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1152", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1153", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1154", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1155", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1156", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1157", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1130", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1131", [
              [ "tools", "v3_8_1.html#autotoc_md1132", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1133", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1134", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1135", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1136", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1137", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1138", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1089", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1090", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1091", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1092", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1093", [
              [ "Libraries", "v3_8_0.html#autotoc_md1094", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1095", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1096", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1097", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1098", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1099", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1100", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1101", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1102", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1103", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1104", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1105", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1106", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1107", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1108", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1109", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1110", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1111", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1112", null ],
              [ "Other", "v3_8_0.html#autotoc_md1113", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1114", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1115", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1116", [
              [ "bindings", "v3_8_0.html#autotoc_md1117", null ],
              [ "devices", "v3_8_0.html#autotoc_md1118", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1119", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1120", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1121", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1122", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1123", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1124", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1125", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1126", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1127", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1128", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1129", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1081", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1082", [
              [ "Documentation", "v3_7_2.html#autotoc_md1083", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1084", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1085", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1086", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1087", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1088", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md1072", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md1073", [
              [ "CMake", "v3_7_1.html#autotoc_md1074", null ],
              [ "Devices", "v3_7_1.html#autotoc_md1075", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md1076", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md1077", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1078", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1079", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1080", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md1047", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md1048", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1049", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md1050", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md1051", [
              [ "Libraries", "v3_7_0.html#autotoc_md1052", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md1053", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md1056", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md1057", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md1058", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md1059", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md1060", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md1061", null ],
              [ "Tools", "v3_7_0.html#autotoc_md1062", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md1063", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md1064", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1065", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md1066", [
              [ "Catch2", "v3_7_0.html#autotoc_md1067", null ],
              [ "CMake", "v3_7_0.html#autotoc_md1068", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md1069", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md1070", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md1071", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md990", [
            [ "Important Changes", "v3_6_0.html#autotoc_md991", [
              [ "Dependencies", "v3_6_0.html#autotoc_md992", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md993", [
              [ "Devices", "v3_6_0.html#autotoc_md994", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md995", [
              [ "Libraries", "v3_6_0.html#autotoc_md996", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md997", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md998", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1004", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md1005", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md1015", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md1016", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md1017", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md1018", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md1019", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md1020", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md1021", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md1022", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md1023", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md1024", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md1025", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md1026", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md1027", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md1028", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md1029", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md1030", null ],
              [ "Tools", "v3_6_0.html#autotoc_md1031", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md1032", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md1033", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md1034", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md1035", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1036", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md1037", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1038", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md1039", [
              [ "Build System", "v3_6_0.html#autotoc_md1040", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md1041", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md1042", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md1043", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md1044", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md1045", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md1046", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md944", [
            [ "New Features", "v3_5_1.html#autotoc_md945", [
              [ "Libraries", "v3_5_1.html#autotoc_md946", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md947", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md948", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md949", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md950", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md954", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md955", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md956", null ],
              [ "Devices", "v3_5_1.html#autotoc_md957", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md958", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md959", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md960", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md961", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md962", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md963", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md964", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md965", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md966", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md967", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md968", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md969", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md970", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md971", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md972", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md973", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md974", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md975", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md976", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md977", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md978", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md979", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md980", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md981", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md982", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md983", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md984", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md985", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md986", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md987", [
                [ "Python", "v3_5_1.html#autotoc_md988", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md989", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md842", [
            [ "Important Changes", "v3_5_0.html#autotoc_md843", [
              [ "Dependencies", "v3_5_0.html#autotoc_md844", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md845", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md846", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md848", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md849", [
              [ "Libraries", "v3_5_0.html#autotoc_md850", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md851", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md852", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md864", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md866", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md869", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md870", null ],
              [ "Devices", "v3_5_0.html#autotoc_md871", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md872", [
              [ "Libraries", "v3_5_0.html#autotoc_md873", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md874", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md875", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md876", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md886", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md892", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md901", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md903", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md904", null ],
              [ "Devices", "v3_5_0.html#autotoc_md905", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md906", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md907", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md908", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md909", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md910", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md911", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md912", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md913", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md914", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md915", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md916", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md917", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md918", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md919", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md920", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md921", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md922", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md923", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md924", [
              [ "Carriers", "v3_5_0.html#autotoc_md925", null ],
              [ "Devices", "v3_5_0.html#autotoc_md926", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md927", [
                [ "Python", "v3_5_0.html#autotoc_md928", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md929", [
              [ "Libraries", "v3_5_0.html#autotoc_md930", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md931", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md934", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md935", null ],
              [ "Devices", "v3_5_0.html#autotoc_md936", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md937", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md938", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md939", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md940", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md941", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md942", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md943", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md827", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md828", null ],
            [ "Build System", "v3_4_6.html#autotoc_md829", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md830", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md831", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md832", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md833", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md834", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md835", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md836", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md837", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md838", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md839", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md840", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md841", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md819", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md820", [
              [ "Libraries", "v3_4_5.html#autotoc_md821", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md822", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md824", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md825", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md826", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md808", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md809", [
              [ "Build System", "v3_4_4.html#autotoc_md810", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md811", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md812", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md813", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md814", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md815", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md816", [
                [ "Python", "v3_4_4.html#autotoc_md817", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md818", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md797", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md798", [
              [ "Libraries", "v3_4_3.html#autotoc_md799", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md800", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md801", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md802", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md803", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md804", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md805", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md806", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md807", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md776", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md777", [
              [ "Build System", "v3_4_2.html#autotoc_md778", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md779", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md780", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md782", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md783", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md786", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md787", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md788", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md789", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md790", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md791", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md792", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md793", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md794", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md795", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md796", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md758", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md759", [
              [ "Build System", "v3_4_1.html#autotoc_md760", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md761", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md762", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md764", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md766", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md767", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md768", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md769", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md770", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md771", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md772", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md773", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md774", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md775", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md683", [
            [ "Important Changes", "v3_4_0.html#autotoc_md684", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md685", [
              [ "Build System", "v3_4_0.html#autotoc_md686", [
                [ "os", "v3_4_0.html#autotoc_md688", null ],
                [ "dev", "v3_4_0.html#autotoc_md695", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md696", null ],
              [ "Tools", "v3_4_0.html#autotoc_md697", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md699", [
              [ "Build System", "v3_4_0.html#autotoc_md700", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md703", [
                [ "conf", "v3_4_0.html#autotoc_md704", null ],
                [ "os", "v3_4_0.html#autotoc_md705", null ],
                [ "sig", "v3_4_0.html#autotoc_md713", null ],
                [ "math", "v3_4_0.html#autotoc_md716", null ],
                [ "dev", "v3_4_0.html#autotoc_md717", null ],
                [ "logger", "v3_4_0.html#autotoc_md718", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md719", null ],
              [ "Devices", "v3_4_0.html#autotoc_md720", null ],
              [ "Tools", "v3_4_0.html#autotoc_md735", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md738", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md744", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md745", [
              [ "Libraries", "v3_4_0.html#autotoc_md746", [
                [ "os", "v3_4_0.html#autotoc_md747", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md748", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md749", null ],
              [ "Devices", "v3_4_0.html#autotoc_md750", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md751", [
              [ "Libraries", "v3_4_0.html#autotoc_md752", [
                [ "os", "v3_4_0.html#autotoc_md753", null ],
                [ "sig", "v3_4_0.html#autotoc_md755", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md757", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md664", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md665", [
              [ "Build System", "v3_3_3.html#autotoc_md666", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md667", [
                [ "os", "v3_3_3.html#autotoc_md668", null ],
                [ "dev", "v3_3_3.html#autotoc_md672", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md673", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md680", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md682", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md657", [
            [ "Contributors", "v3_3_2.html#autotoc_md663", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md644", [
            [ "Important Changes", "v3_3_1.html#autotoc_md645", [
              [ "Dependencies", "v3_3_1.html#autotoc_md646", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md647", [
              [ "Libraries", "v3_3_1.html#autotoc_md648", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md649", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md650", [
                [ "grabberDual", "v3_3_1.html#autotoc_md651", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md652", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md653", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md654", [
                [ "Perl", "v3_3_1.html#autotoc_md655", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md656", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md619", [
            [ "Important Changes", "v3_3_0.html#autotoc_md620", [
              [ "Dependencies", "v3_3_0.html#autotoc_md621", null ],
              [ "Build System", "v3_3_0.html#autotoc_md622", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md623", [
                [ "YARP_os", "v3_3_0.html#autotoc_md624", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md625", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md626", [
              [ "Build System", "v3_3_0.html#autotoc_md627", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md628", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md629", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md630", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md631", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md632", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md633", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md636", null ],
              [ "devices", "v3_3_0.html#autotoc_md638", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md639", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md643", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md610", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md611", [
              [ "Build System", "v3_2_2.html#autotoc_md612", null ],
              [ "Devices", "v3_2_2.html#autotoc_md613", null ],
              [ "Tools", "v3_2_2.html#autotoc_md616", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md618", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md597", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md598", [
              [ "Carriers", "v3_2_1.html#autotoc_md599", null ],
              [ "Devices", "v3_2_1.html#autotoc_md601", null ],
              [ "Tools", "v3_2_1.html#autotoc_md603", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md606", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md609", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md587", [
            [ "Important Changes", "v3_2_0.html#autotoc_md588", [
              [ "Dependencies", "v3_2_0.html#autotoc_md589", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md590", null ],
              [ "Devices", "v3_2_0.html#autotoc_md591", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md592", [
              [ "Build System", "v3_2_0.html#autotoc_md593", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md594", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md595", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md596", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md579", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md580", [
              [ "CMake", "v3_1_2.html#autotoc_md581", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md582", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md583", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md584", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md585", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md586", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md557", [
            [ "New Features", "v3_1_1.html#autotoc_md558", [
              [ "Build System", "v3_1_1.html#autotoc_md559", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md560", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md561", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md562", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md563", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md564", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md565", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md566", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md567", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md568", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md569", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md570", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md571", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md572", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md573", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md574", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md575", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md576", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md577", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md578", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md542", [
            [ "New Features", "v3_1_0.html#autotoc_md543", [
              [ "Libraries", "v3_1_0.html#autotoc_md544", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md545", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md546", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md547", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md548", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md549", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md550", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md551", [
                [ "yarp", "v3_1_0.html#autotoc_md552", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md553", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md554", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md555", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md556", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md397", [
            [ "Important Changes", "v3_0_1.html#autotoc_md398", null ],
            [ "New Features", "v3_0_1.html#autotoc_md400", [
              [ "Libraries", "v3_0_1.html#autotoc_md401", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md402", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md403", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md404", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md405", [
              [ "Build System", "v3_0_1.html#autotoc_md406", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md407", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md408", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md409", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md410", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md411", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md412", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md413", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md414", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md415", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md416", [
                [ "yarpscope", "v3_0_1.html#autotoc_md417", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md418", [
                [ "rplidar2", "v3_0_1.html#autotoc_md419", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md420", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md421", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md422", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md423", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md424", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md361", [
            [ "Important Changes", "v3_0_0.html#autotoc_md362", [
              [ "Build System", "v3_0_0.html#autotoc_md363", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md364", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md365", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md366", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md367", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md368", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md369", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md370", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md371", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md372", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md373", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md374", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md375", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md376", [
              [ "Build System", "v3_0_0.html#autotoc_md377", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md378", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md379", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md380", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md381", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md382", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md383", null ],
              [ "Tools", "v3_0_0.html#autotoc_md384", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md385", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md386", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md387", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md388", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md389", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md390", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md391", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md392", [
              [ "Libraries", "v3_0_0.html#autotoc_md393", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md394", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md395", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md396", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md339", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md340", [
              [ "Build System", "v2_3_72_1.html#autotoc_md341", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md342", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md343", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md344", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md345", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md346", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md347", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md348", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md349", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md350", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md351", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md352", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md353", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md354", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md355", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md356", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md357", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md358", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md312", [
            [ "Important Changes", "v2_3_72.html#autotoc_md313", [
              [ "Libraries", "v2_3_72.html#autotoc_md314", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md315", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md316", [
              [ "Libraries", "v2_3_72.html#autotoc_md317", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md318", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md319", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md320", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md321", null ],
              [ "Devices", "v2_3_72.html#autotoc_md322", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md323", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md324", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md325", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md326", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md327", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md328", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md329", [
                [ "Java", "v2_3_72.html#autotoc_md330", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md331", [
              [ "Libraries", "v2_3_72.html#autotoc_md332", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md333", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md334", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md335", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md336", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md337", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md338", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md299", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md300", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md301", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md302", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md303", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md304", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md305", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md306", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md307", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md308", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md309", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md310", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md311", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md287", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md288", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md289", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md290", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md291", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md292", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md293", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md294", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md295", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md296", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md297", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md298", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md238", [
            [ "Important Changes", "v2_3_70.html#autotoc_md239", [
              [ "System Configuration", "v2_3_70.html#autotoc_md240", null ],
              [ "Build System", "v2_3_70.html#autotoc_md241", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md242", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md243", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md244", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md247", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md248", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md249", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md250", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md251", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md252", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md253", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md254", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md255", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md256", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md257", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md258", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md259", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md260", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md261", null ],
              [ "Devices", "v2_3_70.html#autotoc_md262", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md263", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md265", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md266", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md267", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md268", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md269", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md270", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md271", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md272", [
              [ "Libraries", "v2_3_70.html#autotoc_md273", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md274", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md275", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md276", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md277", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md278", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md279", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md280", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md281", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md282", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md283", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md284", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md285", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md286", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md200", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md201", [
              [ "Build System", "v2_3_68_1.html#autotoc_md202", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md203", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md204", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md205", [
              [ "Build System", "v2_3_68_1.html#autotoc_md206", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md207", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md208", [
              [ "Build System", "v2_3_68_1.html#autotoc_md209", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md210", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md211", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md212", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md213", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md214", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md215", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md216", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md217", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md218", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md219", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md220", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md221", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md222", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md223", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md224", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md225", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md226", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md227", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md228", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md229", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md230", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md231", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md232", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md233", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md234", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md235", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md236", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md175", [
            [ "Important Changes", "v2_3_68.html#autotoc_md176", [
              [ "Dependencies", "v2_3_68.html#autotoc_md177", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md178", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md179", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md180", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md181", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md182", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md183", null ],
              [ "Tools", "v2_3_68.html#autotoc_md184", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md185", null ],
              [ "Devices", "v2_3_68.html#autotoc_md186", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md187", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md188", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md189", null ],
              [ "Devices", "v2_3_68.html#autotoc_md190", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md191", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md192", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md193", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md194", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md195", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md196", null ],
              [ "Devices", "v2_3_68.html#autotoc_md197", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md198", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md199", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md167", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md168", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md169", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md170", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md171", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md172", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md173", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md174", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md154", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md155", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md156", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md157", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md158", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md159", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md160", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md161", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md162", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md163", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md164", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md165", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md166", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md145", [
            [ "Important Changes", "v2_3_66.html#autotoc_md146", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md147", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md148", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md149", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md150", null ],
              [ "Modules", "v2_3_66.html#autotoc_md151", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md152", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md153", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md130", [
            [ "Important Changes", "v2_3_65.html#autotoc_md131", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md132", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md133", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md134", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md135", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md136", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md137", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md138", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md139", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md140", null ],
              [ "Devices", "v2_3_65.html#autotoc_md141", null ],
              [ "Tools", "v2_3_65.html#autotoc_md142", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md143", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md144", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md129", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md128", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md127", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md126", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md125", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md120", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md119", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md118", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md117", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md115", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md114", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md113", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md112", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md111", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md360", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md359", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md237", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md124", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md123", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md122", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md121", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md116", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md110", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md92", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1185", [
          [ "C++", "contributing.html#autotoc_md1186", [
            [ "Header guards", "contributing.html#autotoc_md1187", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1188", null ],
          [ "Git", "contributing.html#autotoc_md1189", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1190", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1191", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1193", null ],
          [ "Example", "contributing.html#autotoc_md1194", null ],
          [ "Terminology", "contributing.html#autotoc_md1195", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1196", [
          [ "Deprecated Features", "contributing.html#autotoc_md1197", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1198", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1199", null ]
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
"CanBusInterface_8h.html",
"Cv_8h.html#aa454ab2126d3290565110a8ee6fcc967",
"FakeFrameGrabber__ControlsDC1394_8cpp.html#a0256d25b86a9f6d108e63e630fd20cf2",
"FrameGrabberCropper_8h_source.html",
"GoogleSpeechSynthesizer__ParamsParser_8h_source.html",
"IControlMode_8h.html#af94b0c7a5f7509ba58b4aedf8a79ebabaa0ab0427f152a8b4a364a4cca4c1ae50",
"IFrameTransformStorageTest_8cpp_source.html",
"INavigation2DVelocityActionsMsgs_8h.html",
"ITorqueControl_8h.html",
"Image_8copyPixels_8cpp.html#aa2990ace212f9a4f289d1f47f6ae2cdd",
"IplImage_8h.html",
"Log_8cpp.html#ad0535b2c6f99fe1ab71437d7e5a59b44",
"Math_8h.html#a378045a0a2b0cc5e7d9c6e54709ba127",
"MultipleAnalogSensorsInterfaces_8cpp.html",
"Nop__ParamsParser_8h_source.html",
"PlatformSysStat_8h.html#a7ef0c58a6b05b91d27b85047300e9878",
"PortReader_8cpp.html",
"Rangefinder2D__controlBoard__nws__ros2__test_8cpp.html",
"Run_8cpp_source.html",
"SoundUtils_8cpp.html#ae71449b1cc6e6250b91f539153a7a0d3",
"Time_8h.html#a3a56c290268340b0a239a71d982a772a",
"Vocab64_8cpp_source.html",
"audioToFileDevice__test_8cpp.html#a9e52bb41ce224e267709f6644b9aba9d",
"classAudioFromFileDevice.html#afde91338e9216222228fa130d287063b",
"classBattery__InputPortProcessor.html#af31ef547cb15cf7b68a09819afa4b2cb",
"classBoschIMU__ParamsParser.html#acf9cbe2dfedced514fb8f56c0c1f1e35",
"classControlBoardArbitraryAxesDecomposition.html#ab57c703bc7249a00c0889cc5f188d3fb",
"classControlBoardMsgs.html#afdff3143dbe3048f8f393a457f8379ee",
"classControlBoardMsgs__checkMotionDoneAllRPC__helper.html#a6788ffd028ea20e3761d3f3796fcd33e",
"classControlBoardMsgs__getAmpStatusAllRPC__helper.html#a4a9dc3f53c56e877b3cb89e76c3af690",
"classControlBoardMsgs__getCurrentAllRPC__helper.html#a7180778a8243a7cad741d43091f3a1da",
"classControlBoardMsgs__getDutyCycleOneRPC__helper_1_1Command.html#a379c2ce66b202f12ee97c2287f42909d",
"classControlBoardMsgs__getEncoderTimedAllRPC__helper_1_1Reply.html",
"classControlBoardMsgs__getInteractionModesGroupRPC__helper_1_1Reply.html#a7c4f538ab63309d69c84480859f8a40a",
"classControlBoardMsgs__getMotorEncoderCountsPerRevolutionRPC__helper_1_1Reply.html#ac2e500403c4bda6ea5bb44817e5aff3b",
"classControlBoardMsgs__getNumberOfMotorEncodersRPC__helper.html#a0705988943a764b851e79c6a0a176ade",
"classControlBoardMsgs__getPidErrorRPC__helper.html#a3451c8d7c880657d7d0cae922f0134d3",
"classControlBoardMsgs__getPidOutputRPC__helper_1_1Reply.html#a99f8186ec0b757c0175bfdd0ba14259e",
"classControlBoardMsgs__getPowerSupplyVoltageRPC__helper_1_1Reply.html#a0e218c59a87ec1b3a3a8d689186b431e",
"classControlBoardMsgs__getRefTorqueAllRPC__helper.html",
"classControlBoardMsgs__getRemoteVariableRPC__helper_1_1Reply.html#aed4e4d506ec9ec2fafe0dc91cc379e88",
"classControlBoardMsgs__getTemperatureAllRPC__helper.html#a7e7afa46617f9577040faa40eb18077b",
"classControlBoardMsgs__getTrajAccelerationOneRPC__helper.html#ae79881b3ff93f9233342c85b849ef935",
"classControlBoardMsgs__isCalibratorDevicePresentRPC__helper_1_1Command.html#a4b845c560cb5e77525187485d8c31114",
"classControlBoardMsgs__positionMoveGroupRPC__helper_1_1Command.html#a62cd8b6342dfe1648489aaa1febeb4d4",
"classControlBoardMsgs__resetEncoderAllRPC__helper_1_1Command.html#a7262a63f3c83edeb0365b08b73a42bb8",
"classControlBoardMsgs__setControlModeAllRPC__helper_1_1Command.html#a599a8c751e8eee9cfe44d7216866a34e",
"classControlBoardMsgs__setImpedanceRPC__helper.html#ac616927ff61a9a2d31a61b0f9d44278d",
"classControlBoardMsgs__setMotorEncoderRPC__helper.html#a43168c12a06ce1bd774bc04288a97937",
"classControlBoardMsgs__setPidErrorLimitRPC__helper_1_1Reply.html#a5b185c9f4cee33edcb36ed446d22bb92",
"classControlBoardMsgs__setPidsRPC__helper_1_1Command.html#a2363d61de38bc430538eca62906c4aaa",
"classControlBoardMsgs__setRefDutyCycleOneRPC__helper.html#aacc293742703d2a82da6f7d91b7821a2",
"classControlBoardMsgs__setRefVelocityAllRPC__helper.html#a59025d07fef53b01ec6c8e345c002932",
"classControlBoardMsgs__setTrajAccelerationsAllRPC__helper_1_1Reply.html#a796d3949203bdfc0de91c7077abc4541",
"classControlBoardMsgs__stopGroupRPC__helper_1_1Reply.html#a26d03af5b4f07893a0e175607d7c6058",
"classControlBoardRPCd.html#a778bfbe8af279080d59af017b6397f5c",
"classControlBoardRemapper.html#ab417bd4595292ba9b6aa03c762cc1d96",
"classControlBoard__nwc__yarp.html#ac93226cec37f4288f362e136b65556e4",
"classCustomView.html#ab228c2946456338d7c08fe3168ba813c",
"classDumpModule.html#a0dcce290c626724e08097f14b9b28c35",
"classFakeAnalogSensor__ParamsParser.html#a0ac7798e2e5fd0d160b21e793cf7e879",
"classFakeBatteryService__getBatteryTemperature__helper.html#adc1a053a459132e7ecd649388300fc8a",
"classFakeBatteryService__setBatteryVoltage__helper.html#af5504e81fc18cfe0f11b0991692fba6c",
"classFakeDeviceWrapper.html#a2015f5fcd7fe775dcf740e7ca307051a",
"classFakeFrameWriter__ParamsParser.html#a049d676764c97300bb258c845f5341b1",
"classFakeLaser.html#ad6c77e521738f193107bf74855286f65",
"classFakeLaser__ParamsParser.html#a1589d8884f90e7de644e37fd46f2fd2c",
"classFakeMotionControl.html#a65a8b1a394bd6537519c1f89de286ada",
"classFakeMotionControl.html#af01eece7247f72aad2170dcccd08297d",
"classFakeNavigation__ParamsParser.html#aef6bc11427349f601624b5599d60b975",
"classFakeSimulatedWorld__ParamsParser.html#aececdd2b82774ff7ea912bd40cfa54d4",
"classFfmpegMonitorObject.html#afd78a489441afb7369064ea5781d66a1",
"classFrameGrabberMsgsImpl.html#a06a515f881ba599b074dc0bdc54a98aa",
"classFrameGrabberMsgs__getFPSDC1394RPC__helper_1_1Command.html#af32d7dc4934a6f714185905a60f6ac58",
"classFrameGrabberMsgs__getImageCropRPC__helper.html#a66af80059898fe066633d6c81b3debbf",
"classFrameGrabberMsgs__getRgbMirroringRPC__helper.html#ae63dd53a276e538a4e262e69725cd8c8",
"classFrameGrabberMsgs__getWidthRPC__helper_1_1Reply.html#ada4f1e748b038b75ed77ac8a0fb831cd",
"classFrameGrabberMsgs__setBroadcastDC1394RPC__helper_1_1Reply.html#a1fbcf82b1564d290af6793cbb5418452",
"classFrameGrabberMsgs__setFeature2RPC__helper_1_1Command.html#af4fb569f24a4051ef1d4008c75281c8c",
"classFrameGrabberMsgs__setResetDC1394RPC__helper_1_1Command.html#a9e5caebfc3c3f9fc3794084cc4e7119d",
"classFrameGrabber__nwc__yarp.html#aa314976d35adfbef0e29d7bc869d423c",
"classFrameTransformGet__nws__yarp.html#a2639a669b6992dffd236a73d494aeb4b",
"classFrameTransformStorageSetRPC__deleteTransformRPC__helper_1_1Command.html",
"classGenericSensor__nwc__ros2__ParamsParser.html#a09e4efe8b991925c99fc447b68240349",
"classGstreamerCarrier.html",
"classIAudioGrabberMsgs__getSound__RPC__helper_1_1Command.html#a5301f91a6529439b2560def384ea0f75",
"classIBatteryMsgs__getBatteryInfoRPC__helper.html#a6f7cd5888f3accd9786187d24d2ce45a",
"classIDepthVisualParamsMsgs__return__getDepthClipPlanes.html#ad3e2db7c078cad251d0eb57c9d10ef07",
"classIFrameGrabberControlMsgs__return__getFeature1.html#a179cc6fc21e814504e8d64650b22b85e",
"classILocalization2DMsgs.html#ac57539e1ae215b3ee9d588a40cce5e9a",
"classILocalization2DMsgs__start__localization__service__RPC__helper.html#a3f14817e700d2eac0d1356b4fd6e8770",
"classIMap2DMsgs__clear__all__maps__temporary__flags__RPC__helper_1_1Command.html#aa79d7df91bc1268f91633f76fb09dd22",
"classIMap2DMsgs__delete__path__RPC__helper_1_1Reply.html",
"classIMap2DMsgs__get__location__RPC__helper.html",
"classIMap2DMsgs__get__paths__list__RPC__helper.html#ac21703f1481c220c11da1085376fe05b",
"classIMap2DMsgs__rename__area__RPC__helper.html#af931be0034e0dcf2ecb201d08dc53acf",
"classIMap2DMsgs__store__area__RPC__helper.html#a938906fcd4fb30861c1d1fed0684e705",
"classINavigation2DMsgs.html#ac3c61a2b11f481acaed279c5b41ff55f",
"classINavigation2DMsgs__get__last__velocity__command__RPC__helper_1_1Reply.html#a2f28379978afc67967f4e98b3f0bd11e",
"classINavigation2DMsgs__goto__target__by__relative__location2__RPC__helper_1_1Reply.html#a9dada3d3111d9ca14554b3334dbe6420",
"classIOdometry2DMsgs.html#aca2300ef46c430163604e7d6c635e6c3",
"classIRGBVisualParamsMsgs__return__getRgbWidth.html#aefa6b97d0395fb247cc312a5efb7bb11",
"classIRangefinder2DMsgs__setDistanceRange__RPC__helper_1_1Reply.html",
"classIRobotDescriptionMsgs__registerDeviceRPC__helper_1_1Reply.html#add25b52a6ae19bc2ea026fcab1ce20ac",
"classISimulatedWorldMsgs__changeColor__helper.html",
"classISimulatedWorldMsgs__getPose__helper.html#a0947d4e8613f50ce7b8152803fc14cff",
"classISimulatedWorldMsgs__makeSphere__helper.html",
"classISpeechSynthesizerMsgs__get__voice__helper.html#af7ca60f9d9a4b7cb8a46efdd1932730d",
"classISpeechTranscriptionMsgs__get__language__helper_1_1Command.html#aac47649b4f3cc78adcdb22b751950552",
"classJointItem.html#a4ab25cffced8b3afd30d6211f0f9073a",
"classKokoroSpeechSynthesizer__ParamsParser.html#a6ead0b9caa9b8cb3aeab43181949ea2f",
"classLocalization2D__nwc__yarp.html#a0ab73293cac49dd93bd1f05aa0b5fd9c",
"classLogTab.html#ae6c52ff2f9bc65d40e45dce5afc0b616",
"classMap2D__nwc__yarp.html#a76d4e5cd449c86dc69c94140eda994c8",
"classMjpegDecompressionHelper.html#a74fb872b6cb628d0e995cda407953c9d",
"classMp3SoundConverter.html#a4d18ae3bddf550ff41b0eefb8843040e",
"classMultipleAnalogSensorsMetadata__getMetadata__helper_1_1Command.html#ab8552326cde8aaf66daf069bd1135c81",
"classNavigation2D__nwc__yarp.html#abec00872f2111872fae502a58db38a91",
"classOdometry2D__nws__ros2.html#a191d22271e02d2f664ee561903f2a03d",
"classPartItem.html#a6ff98b77cb9ae5f07b270141c5848c0a",
"classPortAudioPlayerDeviceDriver.html#a0f6f18bb00c8b2ea55a882ad2818fd08",
"classProperty_1_1Private.html#a86fcce48cfac39f47269737da632f294",
"classRGBDSensorMsgsImpl.html#a61efb0207c01d2b765e4b66eb253a6b3",
"classRGBDSensorMsgs__getDepthImageRPC__helper_1_1Command.html#a6c081cce5dfe35fa3df3d29790aaef2a",
"classRGBDSensorMsgs__getImagesRPC__helper.html",
"classRGBDSensorMsgs__getRgbMirroringRPC__helper.html#a96ba9c015d791fcfbd4128bf0590b840",
"classRGBDSensorMsgs__hasManualRPC__helper_1_1Command.html#aa3b903b1642cafa633f9e15521b80770",
"classRGBDSensorMsgs__setDepthMirroringRPC__helper_1_1Command.html#a3ac91d2334499def0c7813cd265842ef",
"classRGBDSensorMsgs__setRgbMirroringRPC__helper.html#ae7c0c8560eae2887c26e37e50d6d2f5f",
"classRangefinder2DTransformer__ParamsParser.html#a318c2e78139b390ddfc6056d1e6348aa",
"classRangefinder2D__nws__ros2__ParamsParser.html#a89ee83fa6955a969b0d259f123db6e21",
"classRgbdSensor__nwc__ros2__ParamsParser.html#abb1d6a3e057a8eeed0504469159c5e39",
"classRpLidar2.html#aa73ba9c3390dcf1044e98841ab2356d1",
"classSequenceItem.html#ab8d06adde47e0b2a02086166ad9b0307",
"classShmemOutputStreamImpl.html#a1b709fd35acba07c8881dd6cf8e2a42a",
"classSourcePortItem.html#a91000305d3e87fc44b459d331dec4fd4",
"classTableIntDelegate.html#a813e8795fcf7c9b02c0823288459323b",
"classTest__numbers2.html#a722d4799d5af3ad8fa4ec555820e781b",
"classUSBCameraDriver.html#ac3e6607212fc238011c664a7d7fafc60",
"classVoiceBoxSynthesizer__ParamsParser.html#ad7992236854038400930705c7eb376df",
"classWorldInterfaceServer__deleteAll__helper.html#ac73695869e2e3e3d15b662a37fed45cb",
"classWorldInterfaceServer__loadModelFromFileWithPose__helper.html#a5093b370874cde39b87ff355d0675fa8",
"classWorldInterfaceServer__rename__helper.html#a49ad5017fa1a72595bbe399854c53429",
"classargusCameraDriver__ParamsParser.html#aa0c42c1b2ce2eb55e449dcc0779ad37b",
"classrealsense2Driver.html#a9ded7034833f6a8c7593b0db0d864b45",
"classreturn__getAxes.html",
"classreturn__getHorizontalResolution.html",
"classreturn__getNumberOfMotorEncoders.html#a3d0c08f21aabcbab4ac1ee335eb22de6",
"classreturn__getRecordingAudioBufferMaxSize.html#abbbe0257efa0fa8dab3ed2de40e67900",
"classreturn__getTargetPositionOne.html#a6cf258a03321b81580fe7d25d01268a1",
"classreturn__get__all__paths.html#aedc5138c9f75b732fc05282ac341e630",
"classreturn__get__pitch.html#a97140a751a88954c0058d9434d6bff1e",
"classstreamFrameListener.html#a4f7510187b3bce7948774b63ef2a6c63",
"classyarpActionsPlayer__IDL__play__action__helper_1_1Command.html#ad1d837ddc5a5a5bd5972fbe71f6d29e4",
"classyarpActionsPlayer__IDL__speed__factor__helper_1_1Reply.html#abf82c3abfefbddcef817dac4e7412afc",
"classyarp_1_1dev_1_1AudioRecorderDeviceBase.html",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a14d65b5930bd7683fa11ce5f6ce649ed",
"classyarp_1_1dev_1_1DeviceDescription.html",
"classyarp_1_1dev_1_1ICanBus.html#a1ac83cc9bfc38b6e0ab5f9797d75a765",
"classyarp_1_1dev_1_1IFrameGrabberControlsDC1394.html#a4bb61c340156b5ca230a921c608ad4ea",
"classyarp_1_1dev_1_1IJoypadControlMsgs.html#ac036ed484f4cfce6db4a95e13d6e4de7",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getButtonCount__helper_1_1Command.html#a1f9a88b28a35886e477f9e1c97011a3c",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getStickCount__helper.html",
"classyarp_1_1dev_1_1IJoypadControlMsgs__getTouch__helper_1_1Command.html#ac5d08e25f88353b0dc8149875d3590b1",
"classyarp_1_1dev_1_1ILLMMsgs__ask__helper.html#a59b8d79b1f536e621d498c70b262951c",
"classyarp_1_1dev_1_1ILLMMsgs__readPrompt__helper_1_1Reply.html",
"classyarp_1_1dev_1_1IPWMControlRaw.html#ac988aaa0f3de0c114516ca056c64e669",
"classyarp_1_1dev_1_1ISimulatedWorld.html#a20f8f4b623d2e8771692eb794a45ef79",
"classyarp_1_1dev_1_1ImplementAmplifierControl.html#a2564771f0668b538ad6a012b75ca1e78",
"classyarp_1_1dev_1_1ImplementEncodersTimed.html#a5c6975f27b0876970e68531be968de3a",
"classyarp_1_1dev_1_1ImplementMotorEncoders.html#ae7063cc3cbf31ab43acace7fe97dc304",
"classyarp_1_1dev_1_1ImplementTorqueControl.html#a3b237972440a9b8bf6daeedfc0623606",
"classyarp_1_1dev_1_1KeyboardJoypad.html#ad982abaa0e69b767e17c35e39e9b3a91",
"classyarp_1_1dev_1_1Map2DObjectData.html#ab2b7bb558519ab11aaa76184e65f8eeb",
"classyarp_1_1dev_1_1Nav2D_1_1Map2DArea.html#a90ac6a816c2acda269c94b7a07a6151c",
"classyarp_1_1dev_1_1OdometryData.html#a56d0566e0984a2439a334ec25991966b",
"classyarp_1_1dev_1_1PolyDriver.html#aac78b64dac2aa1022b3d6601e82b4f74",
"classyarp_1_1dev_1_1StubDriverCreator.html#ab0ccb4e1cdbc890a124de59b67dfc25d",
"classyarp_1_1dev_1_1TrackballData.html#ae3df0019d25dab71601ad1747205fefc",
"classyarp_1_1dev_1_1return__getConversation.html#ad10869645f40bc442a54f83bc29b58e3",
"classyarp_1_1dev_1_1vertex__t.html#a906d909cdbbffc594e9806b2f6cb6fca",
"classyarp_1_1dev_1_1xHandControlBoard.html#a9552698ac9be3af1ad4e41ee9ca0f5ef",
"classyarp_1_1manager_1_1Application.html#abfee0a222d28ffb4335f280e93bc204d",
"classyarp_1_1manager_1_1Computer.html",
"classyarp_1_1manager_1_1ExecMachine.html#a00de7b8fa02b2f93b71abc8bf5c457f0",
"classyarp_1_1manager_1_1GraphIterator.html#a2ba7d0be96111e98e31d87322cb8b9dc",
"classyarp_1_1manager_1_1LocalBroker.html#ac62bb1ee17d08f8ceda770f4e2e3d30a",
"classyarp_1_1manager_1_1Module.html#a56825f7351f68b3580d8e436450d5810",
"classyarp_1_1manager_1_1Node.html#a4adda8a25e3fb3ba6b99396ec0c0eb13",
"classyarp_1_1manager_1_1Storage.html",
"classyarp_1_1manager_1_1sortResources.html#a7f1c8c13a1440873267756469dce3e4d",
"classyarp_1_1math_1_1impl_1_1RandnVector.html#a6c6c4c8bcfc591b77212d568fb783809",
"classyarp_1_1os_1_1ApplicationNetworkProtocolVersion.html#ae01382635e10f066ec9f3f0c0a4737e2",
"classyarp_1_1os_1_1Clock.html",
"classyarp_1_1os_1_1ConnectionWriter.html#ae828e87f0da6ba48ac7bf1e7d7e8599b",
"classyarp_1_1os_1_1InputProtocol.html#a6dd8bbb1feaee978a3fe95e9b6d6f2a3",
"classyarp_1_1os_1_1ManagedBytes.html#a61146f82c1660bd59fc815a3e0067a98",
"classyarp_1_1os_1_1NestedContact.html#ad986c64ad85350ed44f7a18ba5ae3daa",
"classyarp_1_1os_1_1NullStream.html#a62f6ec4c72624a7eecbcb883fc77fb58",
"classyarp_1_1os_1_1PortReaderBuffer.html",
"classyarp_1_1os_1_1RFModule.html",
"classyarp_1_1os_1_1RpcClient.html#a4a4e8a149219e6f77802216fd97b5c6b",
"classyarp_1_1os_1_1Stat.html#aad1c9f166ac9744f298e5fd1f5e6191f",
"classyarp_1_1os_1_1TwoWayStream.html#ab1cffc5fb95ff3a97e3063ae10f550f6",
"classyarp_1_1os_1_1Value.html#af3a3e569cdc8412ee13a8da21f468a6c",
"classyarp_1_1os_1_1idl_1_1WireReader.html#a5013bd9b35fd06ef048b2904b1379ea9",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a780d1ad02c42f052a77afd70598ceecc",
"classyarp_1_1os_1_1impl_1_1DgramTwoWayStream.html#a0ff2b10caf0c9a51a1691d374201da54",
"classyarp_1_1os_1_1impl_1_1LocalCarrier.html#ac9b84fce1eb12de84c1580b496ff1fa9",
"classyarp_1_1os_1_1impl_1_1NameClient.html#aff869308261e030a85ff4b726fdf4f8c",
"classyarp_1_1os_1_1impl_1_1PortCore.html#aa9e1eaff58c4a4968e230230fb8c5e4a",
"classyarp_1_1os_1_1impl_1_1PortCoreUnit.html#ac084584834ff6258e9ca0e68dcdfcfc0",
"classyarp_1_1os_1_1impl_1_1Storable.html#aba90fcca141a56f8ebc0c0aa6d10b4fd",
"classyarp_1_1os_1_1impl_1_1StoreInt64.html#a155bfd7b8da0549bf8d77aad5f532f58",
"classyarp_1_1os_1_1impl_1_1StoreVocab64.html#af1c5de0bc3b0a94059b177d5211ac2bb",
"classyarp_1_1os_1_1impl_1_1posix_1_1TcpAcceptor.html#a7556577f73861d3bc361d355f0562343",
"classyarp_1_1robotinterface_1_1Action.html#a26a44c94516940b0544f1b08304c38fa",
"classyarp_1_1robotinterface_1_1RobotInterfaceDTD.html#a8b35b5470af9c7d23f7bdec7b301feee",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV1_1_1Private.html#ac6b6fe6359d41ef0508030533c34338d",
"classyarp_1_1serversql_1_1impl_1_1ComposedNameService.html#a5939da17d159f58b4014ae00b6d7906d",
"classyarp_1_1serversql_1_1impl_1_1Triple.html#a48310577a45d9a17b3f21711e669e512",
"classyarp_1_1sig_1_1ImageNetworkHeader.html#a71ed396ca6d5a1dff91dc8eafbaa9cf7",
"classyarp_1_1sig_1_1PointCloudBase.html#ad39d6ced8bdccba45f1624185e9811c5",
"classyarp_1_1yarpLogger_1_1LogLevel.html#a1c995e1e22fca87f51ea2fd763c0011e",
"classyarpdataplayer__IDL__load__helper_1_1Reply.html#ace64c85618ca58acfcc79f6df2da75cb",
"classyarpdataplayer__console__IDL__backward__helper_1_1Command.html#a44b0fff535b7b6e056a4ebbf2a49594c",
"classyarpdataplayer__console__IDL__getProgress__helper_1_1Command.html#a4c9f3547d93df1ee118fd054702346f2",
"classyarpdataplayer__console__IDL__repeat__helper_1_1Reply.html#a370c87dad91d83d5280cae3420360d84",
"classyarprobotinterfaceRpc.html",
"classyarprobotinterface_1_1Module.html",
"constants_8h.html#ac67388330dfad7a8af6b34419371203d",
"dir_11b4fcf3e66ce7e4170a536d9abd4068.html",
"dir_770a37ce6653f304aa13fb689b3782ca.html",
"dir_d811a60a3b8671440064dc1b5b212b8e.html",
"dr__wav_8h.html#a0d6b4071cf04dc3fb0d37bbd030c3993a8c95935e145a78312d9bc65b5842b4c2",
"execstate_8h_source.html",
"frameGrabber__nwc__yarp__test_8cpp_source.html",
"globals_func_i.html",
"guis_2yarpmotorgui_2main_8cpp_source.html",
"laserFromExternalPort_8cpp_source.html",
"logwidget_8cpp_source.html",
"namespaceyarp_1_1conf_1_1filesystem.html#a409652d3ed2602dce9e470465793879a",
"namespaceyarp_1_1dev_1_1tests.html#a77cc7540241f46cf1ed5b80163baf2cf",
"namespaceyarp_1_1os_1_1Time.html#ad8fb5728fe8a15844b56da09267fd6eb",
"namespaceyarp_1_1sig_1_1utils.html#aa0959a89db29480d499cf59bbe24364aa1806c4c42d4fc36596c816cb4146d158",
"piddlg_8cpp.html#aee1ceb41313abc8deca241c73aadd9d9",
"return__getAmpStatusAll_8cpp_source.html",
"return__getPidErrorLimits_8h_source.html",
"return__get__abs__loc__of__curr__target_8cpp_source.html",
"ros2PixelCode_8h.html#ae0a3623a86cec3ee4679e74c69143a5a",
"structButtonValue.html#a1f578a2d97fee3f5c364dd5bc4df597f",
"structMobileBaseVelocityControl__nws__ros2__ParamsParser_1_1parser__version__type.html",
"structWhisperSpeechTranscription__ParamsParser_1_1parser__version__type.html#a5a47a65a57bc8215cb292f3bcc33b80c",
"structdrwav__smpl.html#a984cf30eedef739a3eec02c5e5506096",
"structyarp_1_1cv_1_1type__code_3_01yarp_1_1sig_1_1PixelFloat_01_4.html",
"structyarp_1_1os_1_1SharedLibraryClassApi.html#a081d6c0b3c1e62b230f835255eb28450",
"structyarp_1_1sig_1_1DataRGBA.html#a9ec89d8172e37c4985c7a6d70f4de852",
"structyarp_1_1yarpLogger_1_1MessageEntry.html",
"swigpythonrun_8h.html#a390fa28fbc92fbd82a91dcb7cf326c7d",
"testUltraPythonGeneral_8cpp.html#a9b7253b9a949295b98b06561ec78cff7",
"v2_3_68_1.html#autotoc_md217",
"v3_11_0.html",
"v3_4_1.html#autotoc_md775",
"v3_7_1.html#autotoc_md1078",
"yCalibrationParameters_8h.html",
"yarp_http.html#yarp_http_custom",
"yarplogger_2mainwindow_8cpp.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';