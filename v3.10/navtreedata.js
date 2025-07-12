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
      [ "OpenCVGrabber", "md_src_2devices_2opencvGrabber_2OpenCVGrabber.html", null ],
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
        [ "YARP 3.10.0 Release Notes", "v3_10_0.html#autotoc_md405", [
          [ "Major Behaviour Changes", "v3_10_0.html#autotoc_md406", null ],
          [ "Deprecations and removals", "v3_10_0.html#autotoc_md407", null ],
          [ "Fixes", "v3_10_0.html#autotoc_md408", null ],
          [ "New Features", "v3_10_0.html#autotoc_md409", [
            [ "Carriers", "v3_10_0.html#autotoc_md411", null ],
            [ "Devices", "v3_10_0.html#autotoc_md412", [
              [ "Docker", "v3_10_0.html#autotoc_md410", null ],
              [ "controlboardremapper", "v3_10_0.html#autotoc_md413", null ],
              [ "deviceBundler", "v3_10_0.html#autotoc_md414", null ],
              [ "llmDevice", "v3_10_0.html#autotoc_md415", null ],
              [ "Navigation2D", "v3_10_0.html#autotoc_md416", null ],
              [ "Rangefinder2DTransformer", "v3_10_0.html#autotoc_md417", null ],
              [ "Rangefinder2D_nwc_yarp, Rangefinder2D_nws_yarp", "v3_10_0.html#autotoc_md418", null ],
              [ "ffmpeg_grabber", "v3_10_0.html#autotoc_md419", null ],
              [ "ffmpeg_writer", "v3_10_0.html#autotoc_md420", null ],
              [ "portaudio", "v3_10_0.html#autotoc_md421", null ],
              [ "FakePythonSpeechTranscription", "v3_10_0.html#autotoc_md422", null ],
              [ "multipleanalogsensorsclient", "v3_10_0.html#autotoc_md423", null ]
            ] ],
            [ "GUIs", "v3_10_0.html#autotoc_md424", [
              [ "yarpopencvdisplay", "v3_10_0.html#autotoc_md425", null ]
            ] ],
            [ "Libraries", "v3_10_0.html#autotoc_md426", [
              [ "<tt>lib_yarp_dev</tt>", "v3_10_0.html#autotoc_md427", null ],
              [ "<tt>lib_yarp_sig</tt>", "v3_10_0.html#autotoc_md428", null ]
            ] ],
            [ "Bindings", "v3_10_0.html#autotoc_md429", [
              [ "Python", "v3_10_0.html#autotoc_md430", null ]
            ] ]
          ] ],
          [ "Contributors", "v3_10_0.html#autotoc_md431", null ]
        ] ]
      ] ],
      [ "YARP 3.10.1 (2024-11-26)", "v3_10_1.html", [
        [ "YARP 3.10.1 Release Notes", "v3_10_1.html#autotoc_md432", [
          [ "Fixes", "v3_10_1.html#autotoc_md433", [
            [ "<tt>bindings</tt>", "v3_10_1.html#autotoc_md434", null ]
          ] ],
          [ "Contributors", "v3_10_1.html#autotoc_md435", null ]
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
        [ "YARP 3.9.1 (2024-11-12)", "v3_9_1.html", [
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1052", [
            [ "Fixes", "v3_9_1.html#autotoc_md1053", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1054", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1055", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1056", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1057", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1058", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1059", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1060", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1061", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1033", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1034", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1035", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1036", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1037", [
              [ "Docker", "v3_9_0.html#autotoc_md1038", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1039", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1040", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1041", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1042", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1043", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1044", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1045", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1046", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1047", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1048", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1049", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1050", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1051", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1024", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1025", [
              [ "tools", "v3_8_1.html#autotoc_md1026", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1027", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1028", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1029", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1030", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1031", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1032", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md983", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md984", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md985", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md986", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md987", [
              [ "Libraries", "v3_8_0.html#autotoc_md988", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md989", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md990", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md991", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md992", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md993", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md994", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md995", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md996", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md997", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md998", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md999", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1000", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1001", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1002", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1003", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1004", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1005", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1006", null ],
              [ "Other", "v3_8_0.html#autotoc_md1007", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1008", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1009", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1010", [
              [ "bindings", "v3_8_0.html#autotoc_md1011", null ],
              [ "devices", "v3_8_0.html#autotoc_md1012", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1013", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1014", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1015", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1016", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1017", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1018", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1019", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1020", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1021", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1022", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1023", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md975", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md976", [
              [ "Documentation", "v3_7_2.html#autotoc_md977", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md978", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md979", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md980", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md981", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md982", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md966", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md967", [
              [ "CMake", "v3_7_1.html#autotoc_md968", null ],
              [ "Devices", "v3_7_1.html#autotoc_md969", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md970", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md971", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md972", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md973", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md974", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md941", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md942", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md943", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md944", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md945", [
              [ "Libraries", "v3_7_0.html#autotoc_md946", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md947", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md950", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md951", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md952", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md953", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md954", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md955", null ],
              [ "Tools", "v3_7_0.html#autotoc_md956", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md957", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md958", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md959", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md960", [
              [ "Catch2", "v3_7_0.html#autotoc_md961", null ],
              [ "CMake", "v3_7_0.html#autotoc_md962", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md963", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md964", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md965", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md884", [
            [ "Important Changes", "v3_6_0.html#autotoc_md885", [
              [ "Dependencies", "v3_6_0.html#autotoc_md886", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md887", [
              [ "Devices", "v3_6_0.html#autotoc_md888", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md889", [
              [ "Libraries", "v3_6_0.html#autotoc_md890", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md891", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md892", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md898", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md899", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md909", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md910", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md911", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md912", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md913", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md914", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md915", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md916", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md917", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md918", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md919", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md920", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md921", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md922", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md923", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md924", null ],
              [ "Tools", "v3_6_0.html#autotoc_md925", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md926", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md927", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md928", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md929", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md930", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md931", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md932", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md933", [
              [ "Build System", "v3_6_0.html#autotoc_md934", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md935", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md936", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md937", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md938", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md939", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md940", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md838", [
            [ "New Features", "v3_5_1.html#autotoc_md839", [
              [ "Libraries", "v3_5_1.html#autotoc_md840", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md841", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md842", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md843", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md844", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md848", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md849", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md850", null ],
              [ "Devices", "v3_5_1.html#autotoc_md851", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md852", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md853", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md854", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md855", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md856", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md857", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md858", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md859", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md860", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md861", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md862", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md863", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md864", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md865", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md866", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md867", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md868", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md869", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md870", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md871", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md872", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md873", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md874", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md875", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md876", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md877", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md878", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md879", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md880", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md881", [
                [ "Python", "v3_5_1.html#autotoc_md882", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md883", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md736", [
            [ "Important Changes", "v3_5_0.html#autotoc_md737", [
              [ "Dependencies", "v3_5_0.html#autotoc_md738", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md739", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md740", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md742", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md743", [
              [ "Libraries", "v3_5_0.html#autotoc_md744", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md745", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md746", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md758", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md760", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md763", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md764", null ],
              [ "Devices", "v3_5_0.html#autotoc_md765", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md766", [
              [ "Libraries", "v3_5_0.html#autotoc_md767", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md768", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md769", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md770", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md780", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md786", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md795", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md797", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md798", null ],
              [ "Devices", "v3_5_0.html#autotoc_md799", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md800", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md801", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md802", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md803", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md804", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md805", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md806", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md807", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md808", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md809", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md810", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md811", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md812", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md813", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md814", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md815", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md816", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md817", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md818", [
              [ "Carriers", "v3_5_0.html#autotoc_md819", null ],
              [ "Devices", "v3_5_0.html#autotoc_md820", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md821", [
                [ "Python", "v3_5_0.html#autotoc_md822", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md823", [
              [ "Libraries", "v3_5_0.html#autotoc_md824", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md825", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md828", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md829", null ],
              [ "Devices", "v3_5_0.html#autotoc_md830", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md831", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md832", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md833", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md834", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md835", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md836", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md837", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md721", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md722", null ],
            [ "Build System", "v3_4_6.html#autotoc_md723", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md724", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md725", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md726", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md727", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md728", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md729", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md730", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md731", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md732", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md733", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md734", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md735", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md713", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md714", [
              [ "Libraries", "v3_4_5.html#autotoc_md715", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md716", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md718", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md719", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md720", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md702", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md703", [
              [ "Build System", "v3_4_4.html#autotoc_md704", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md705", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md706", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md707", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md708", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md709", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md710", [
                [ "Python", "v3_4_4.html#autotoc_md711", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md712", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md691", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md692", [
              [ "Libraries", "v3_4_3.html#autotoc_md693", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md694", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md695", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md696", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md697", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md698", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md699", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md700", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md701", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md670", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md671", [
              [ "Build System", "v3_4_2.html#autotoc_md672", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md673", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md674", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md676", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md677", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md680", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md681", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md682", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md683", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md684", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md685", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md686", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md687", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md688", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md689", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md690", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md652", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md653", [
              [ "Build System", "v3_4_1.html#autotoc_md654", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md655", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md656", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md658", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md660", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md661", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md662", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md663", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md664", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md665", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md666", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md667", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md668", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md669", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md577", [
            [ "Important Changes", "v3_4_0.html#autotoc_md578", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md579", [
              [ "Build System", "v3_4_0.html#autotoc_md580", [
                [ "os", "v3_4_0.html#autotoc_md582", null ],
                [ "dev", "v3_4_0.html#autotoc_md589", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md590", null ],
              [ "Tools", "v3_4_0.html#autotoc_md591", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md593", [
              [ "Build System", "v3_4_0.html#autotoc_md594", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md597", [
                [ "conf", "v3_4_0.html#autotoc_md598", null ],
                [ "os", "v3_4_0.html#autotoc_md599", null ],
                [ "sig", "v3_4_0.html#autotoc_md607", null ],
                [ "math", "v3_4_0.html#autotoc_md610", null ],
                [ "dev", "v3_4_0.html#autotoc_md611", null ],
                [ "logger", "v3_4_0.html#autotoc_md612", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md613", null ],
              [ "Devices", "v3_4_0.html#autotoc_md614", null ],
              [ "Tools", "v3_4_0.html#autotoc_md629", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md632", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md638", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md639", [
              [ "Libraries", "v3_4_0.html#autotoc_md640", [
                [ "os", "v3_4_0.html#autotoc_md641", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md642", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md643", null ],
              [ "Devices", "v3_4_0.html#autotoc_md644", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md645", [
              [ "Libraries", "v3_4_0.html#autotoc_md646", [
                [ "os", "v3_4_0.html#autotoc_md647", null ],
                [ "sig", "v3_4_0.html#autotoc_md649", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md651", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md558", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md559", [
              [ "Build System", "v3_3_3.html#autotoc_md560", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md561", [
                [ "os", "v3_3_3.html#autotoc_md562", null ],
                [ "dev", "v3_3_3.html#autotoc_md566", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md567", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md574", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md576", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md551", [
            [ "Contributors", "v3_3_2.html#autotoc_md557", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md538", [
            [ "Important Changes", "v3_3_1.html#autotoc_md539", [
              [ "Dependencies", "v3_3_1.html#autotoc_md540", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md541", [
              [ "Libraries", "v3_3_1.html#autotoc_md542", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md543", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md544", [
                [ "grabberDual", "v3_3_1.html#autotoc_md545", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md546", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md547", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md548", [
                [ "Perl", "v3_3_1.html#autotoc_md549", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md550", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md513", [
            [ "Important Changes", "v3_3_0.html#autotoc_md514", [
              [ "Dependencies", "v3_3_0.html#autotoc_md515", null ],
              [ "Build System", "v3_3_0.html#autotoc_md516", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md517", [
                [ "YARP_os", "v3_3_0.html#autotoc_md518", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md519", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md520", [
              [ "Build System", "v3_3_0.html#autotoc_md521", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md522", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md523", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md524", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md525", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md526", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md527", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md530", null ],
              [ "devices", "v3_3_0.html#autotoc_md532", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md533", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md537", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md504", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md505", [
              [ "Build System", "v3_2_2.html#autotoc_md506", null ],
              [ "Devices", "v3_2_2.html#autotoc_md507", null ],
              [ "Tools", "v3_2_2.html#autotoc_md510", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md512", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md491", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md492", [
              [ "Carriers", "v3_2_1.html#autotoc_md493", null ],
              [ "Devices", "v3_2_1.html#autotoc_md495", null ],
              [ "Tools", "v3_2_1.html#autotoc_md497", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md500", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md503", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md481", [
            [ "Important Changes", "v3_2_0.html#autotoc_md482", [
              [ "Dependencies", "v3_2_0.html#autotoc_md483", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md484", null ],
              [ "Devices", "v3_2_0.html#autotoc_md485", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md486", [
              [ "Build System", "v3_2_0.html#autotoc_md487", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md488", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md489", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md490", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md473", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md474", [
              [ "CMake", "v3_1_2.html#autotoc_md475", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md476", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md477", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md478", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md479", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md480", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md451", [
            [ "New Features", "v3_1_1.html#autotoc_md452", [
              [ "Build System", "v3_1_1.html#autotoc_md453", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md454", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md455", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md456", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md457", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md458", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md459", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md460", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md461", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md462", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md463", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md464", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md465", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md466", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md467", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md468", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md469", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md470", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md471", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md472", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md436", [
            [ "New Features", "v3_1_0.html#autotoc_md437", [
              [ "Libraries", "v3_1_0.html#autotoc_md438", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md439", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md440", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md441", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md442", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md443", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md444", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md445", [
                [ "yarp", "v3_1_0.html#autotoc_md446", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md447", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md448", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md449", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md450", null ]
          ] ]
        ] ],
        [ "YARP 3.0.1 (2018-07-25)", "v3_0_1.html", [
          [ "YARP 3.0.1 Release Notes", "v3_0_1.html#autotoc_md377", [
            [ "Important Changes", "v3_0_1.html#autotoc_md378", null ],
            [ "New Features", "v3_0_1.html#autotoc_md380", [
              [ "Libraries", "v3_0_1.html#autotoc_md381", [
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md382", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md383", [
                [ "<tt>yarprobotinterface</tt>", "v3_0_1.html#autotoc_md384", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_1.html#autotoc_md385", [
              [ "Build System", "v3_0_1.html#autotoc_md386", null ],
              [ "Libraries", "v3_0_1.html#autotoc_md387", [
                [ "YARP_OS", "v3_0_1.html#autotoc_md388", null ],
                [ "YARP_dev", "v3_0_1.html#autotoc_md389", null ],
                [ "YARP_math", "v3_0_1.html#autotoc_md390", null ],
                [ "YARP_pcl", "v3_0_1.html#autotoc_md391", null ],
                [ "YARP_sig", "v3_0_1.html#autotoc_md392", null ],
                [ "YARP_rosmsg", "v3_0_1.html#autotoc_md393", null ]
              ] ],
              [ "Tools", "v3_0_1.html#autotoc_md394", [
                [ "yarpidl_rosmsg", "v3_0_1.html#autotoc_md395", null ]
              ] ],
              [ "GUIs", "v3_0_1.html#autotoc_md396", [
                [ "yarpscope", "v3_0_1.html#autotoc_md397", null ]
              ] ],
              [ "Devices", "v3_0_1.html#autotoc_md398", [
                [ "rplidar2", "v3_0_1.html#autotoc_md399", null ],
                [ "realsense2", "v3_0_1.html#autotoc_md400", null ],
                [ "multipleanalogsensorsremapper", "v3_0_1.html#autotoc_md401", null ],
                [ "batteryClient", "v3_0_1.html#autotoc_md402", null ],
                [ "batteryWrapper", "v3_0_1.html#autotoc_md403", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_1.html#autotoc_md404", null ]
          ] ]
        ] ],
        [ "YARP 3.0.0 (2018-06-11)", "v3_0_0.html", [
          [ "YARP 3.0.0 Release Notes", "v3_0_0.html#autotoc_md341", [
            [ "Important Changes", "v3_0_0.html#autotoc_md342", [
              [ "Build System", "v3_0_0.html#autotoc_md343", null ],
              [ "Libraries", "v3_0_0.html#autotoc_md344", [
                [ "<tt>YARP_conf</tt>", "v3_0_0.html#autotoc_md345", null ],
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md346", null ],
                [ "<tt>YARP_dev</tt>", "v3_0_0.html#autotoc_md347", null ],
                [ "<tt>YARP_sig</tt>", "v3_0_0.html#autotoc_md348", null ],
                [ "<tt>YARP_manager</tt>", "v3_0_0.html#autotoc_md349", null ],
                [ "<tt>libyarpcxx</tt>", "v3_0_0.html#autotoc_md350", null ],
                [ "<tt>YARP_math</tt>", "v3_0_0.html#autotoc_md351", null ],
                [ "<tt>YARP_companion</tt>", "v3_0_0.html#autotoc_md352", null ]
              ] ],
              [ "Tools", "v3_0_0.html#autotoc_md353", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md354", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md355", null ]
            ] ],
            [ "New Features", "v3_0_0.html#autotoc_md356", [
              [ "Build System", "v3_0_0.html#autotoc_md357", null ],
              [ "CMake Modules", "v3_0_0.html#autotoc_md358", [
                [ "<tt>YarpPlugin</tt>", "v3_0_0.html#autotoc_md359", null ]
              ] ],
              [ "Libraries", "v3_0_0.html#autotoc_md360", [
                [ "YARP_OS", "v3_0_0.html#autotoc_md361", null ],
                [ "YARP_sig", "v3_0_0.html#autotoc_md362", null ]
              ] ],
              [ "Carriers", "v3_0_0.html#autotoc_md363", null ],
              [ "Tools", "v3_0_0.html#autotoc_md364", [
                [ "<tt>yarpidl_thrift</tt>", "v3_0_0.html#autotoc_md365", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_0_0.html#autotoc_md366", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v3_0_0.html#autotoc_md367", null ]
              ] ],
              [ "Devices", "v3_0_0.html#autotoc_md368", [
                [ "<tt>ControlBoardWrapper</tt>", "v3_0_0.html#autotoc_md369", null ]
              ] ],
              [ "Bindings", "v3_0_0.html#autotoc_md370", [
                [ "IMotorEncoders interface bindings", "v3_0_0.html#autotoc_md371", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_0_0.html#autotoc_md372", [
              [ "Libraries", "v3_0_0.html#autotoc_md373", [
                [ "<tt>YARP_OS</tt>", "v3_0_0.html#autotoc_md374", null ],
                [ "<tt>GUIs</tt>", "v3_0_0.html#autotoc_md375", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_0_0.html#autotoc_md376", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72.1 (2018-06-11)", "v2_3_72_1.html", [
          [ "YARP 2.3.72.1 Release Notes", "v2_3_72_1.html#autotoc_md319", [
            [ "Bug Fixes", "v2_3_72_1.html#autotoc_md320", [
              [ "Build System", "v2_3_72_1.html#autotoc_md321", null ],
              [ "CMake Modules", "v2_3_72_1.html#autotoc_md322", null ],
              [ "Libraries", "v2_3_72_1.html#autotoc_md323", [
                [ "<tt>YARP_sig</tt>", "v2_3_72_1.html#autotoc_md324", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72_1.html#autotoc_md325", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72_1.html#autotoc_md326", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_72_1.html#autotoc_md327", null ]
              ] ],
              [ "GUIs", "v2_3_72_1.html#autotoc_md328", [
                [ "yarpscope", "v2_3_72_1.html#autotoc_md329", null ],
                [ "yarpmanager", "v2_3_72_1.html#autotoc_md330", null ],
                [ "yarpmotorgui", "v2_3_72_1.html#autotoc_md331", null ],
                [ "yarplogger", "v2_3_72_1.html#autotoc_md332", null ]
              ] ],
              [ "Devices", "v2_3_72_1.html#autotoc_md333", [
                [ "<tt>ControlBoardRemapper</tt>", "v2_3_72_1.html#autotoc_md334", null ],
                [ "<tt>depthCamera</tt>", "v2_3_72_1.html#autotoc_md335", null ],
                [ "<tt>AnalogWrapper</tt>", "v2_3_72_1.html#autotoc_md336", null ]
              ] ],
              [ "Bindings", "v2_3_72_1.html#autotoc_md337", null ]
            ] ],
            [ "Contributors", "v2_3_72_1.html#autotoc_md338", null ]
          ] ]
        ] ],
        [ "YARP 2.3.72 (2018-02-12)", "v2_3_72.html", [
          [ "YARP 2.3.72 Release Notes", "v2_3_72.html#autotoc_md292", [
            [ "Important Changes", "v2_3_72.html#autotoc_md293", [
              [ "Libraries", "v2_3_72.html#autotoc_md294", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md295", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_72.html#autotoc_md296", [
              [ "Libraries", "v2_3_72.html#autotoc_md297", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md298", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_72.html#autotoc_md299", null ],
                [ "<tt>YARP_serversql</tt>", "v2_3_72.html#autotoc_md300", null ]
              ] ],
              [ "Carriers", "v2_3_72.html#autotoc_md301", null ],
              [ "Devices", "v2_3_72.html#autotoc_md302", [
                [ "<tt>ovrheadset</tt>", "v2_3_72.html#autotoc_md303", null ],
                [ "<tt>Map2DServer</tt>", "v2_3_72.html#autotoc_md304", null ],
                [ "<tt>laserHokuyo</tt>", "v2_3_72.html#autotoc_md305", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md306", [
                [ "<tt>yarpmanager</tt>", "v2_3_72.html#autotoc_md307", null ]
              ] ],
              [ "RTF Plugins", "v2_3_72.html#autotoc_md308", null ],
              [ "Bindings", "v2_3_72.html#autotoc_md309", [
                [ "Java", "v2_3_72.html#autotoc_md310", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v2_3_72.html#autotoc_md311", [
              [ "Libraries", "v2_3_72.html#autotoc_md312", [
                [ "<tt>YARP_OS</tt>", "v2_3_72.html#autotoc_md313", null ],
                [ "<tt>YARP_sig</tt>", "v2_3_72.html#autotoc_md314", null ]
              ] ],
              [ "GUIs", "v2_3_72.html#autotoc_md315", [
                [ "yarpmanager", "v2_3_72.html#autotoc_md316", null ],
                [ "yarpdataplayer", "v2_3_72.html#autotoc_md317", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_72.html#autotoc_md318", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.2 (2017-12-11)", "v2_3_70_2.html", [
          [ "YARP 2.3.70.2 Release Notes", "v2_3_70_2.html#autotoc_md279", [
            [ "Important Changes", "v2_3_70_2.html#autotoc_md280", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md281", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md282", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70_2.html#autotoc_md283", null ]
              ] ],
              [ "Carriers", "v2_3_70_2.html#autotoc_md284", null ],
              [ "Build System", "v2_3_70_2.html#autotoc_md285", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70_2.html#autotoc_md286", [
              [ "Libraries", "v2_3_70_2.html#autotoc_md287", [
                [ "<tt>YARP_OS</tt>", "v2_3_70_2.html#autotoc_md288", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70_2.html#autotoc_md289", null ]
              ] ],
              [ "Tools", "v2_3_70_2.html#autotoc_md290", null ]
            ] ],
            [ "Contributors", "v2_3_70_2.html#autotoc_md291", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70.1 (2017-09-21)", "v2_3_70_1.html", [
          [ "YARP 2.3.70.1 Release Notes", "v2_3_70_1.html#autotoc_md267", [
            [ "Bug Fixes", "v2_3_70_1.html#autotoc_md268", [
              [ "CMake Modules", "v2_3_70_1.html#autotoc_md269", null ],
              [ "Libraries", "v2_3_70_1.html#autotoc_md270", [
                [ "YARP_OS", "v2_3_70_1.html#autotoc_md271", null ]
              ] ],
              [ "YARP_dev", "v2_3_70_1.html#autotoc_md272", [
                [ "YARP_manager", "v2_3_70_1.html#autotoc_md273", null ]
              ] ],
              [ "Devices", "v2_3_70_1.html#autotoc_md274", [
                [ "rplidar2", "v2_3_70_1.html#autotoc_md275", null ]
              ] ],
              [ "GUIs", "v2_3_70_1.html#autotoc_md276", [
                [ "yarpview", "v2_3_70_1.html#autotoc_md277", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70_1.html#autotoc_md278", null ]
          ] ]
        ] ],
        [ "YARP 2.3.70 (2017-06-15)", "v2_3_70.html", [
          [ "YARP 2.3.70 Release Notes", "v2_3_70.html#autotoc_md218", [
            [ "Important Changes", "v2_3_70.html#autotoc_md219", [
              [ "System Configuration", "v2_3_70.html#autotoc_md220", null ],
              [ "Build System", "v2_3_70.html#autotoc_md221", null ],
              [ "CMake Modules", "v2_3_70.html#autotoc_md222", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md223", [
                [ "<tt>YARP_conf</tt>", "v2_3_70.html#autotoc_md224", null ],
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md225", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md226", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md227", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_70.html#autotoc_md228", [
              [ "CMake Modules", "v2_3_70.html#autotoc_md229", null ],
              [ "Libraries", "v2_3_70.html#autotoc_md230", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md231", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md232", null ],
                [ "<tt>YARP_math</tt>", "v2_3_70.html#autotoc_md233", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md234", [
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md235", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md236", [
                [ "<tt>yarplaserscannergui</tt>", "v2_3_70.html#autotoc_md237", null ],
                [ "<tt>yarpview</tt>", "v2_3_70.html#autotoc_md238", null ],
                [ "<tt>yarpmotorgui</tt>:", "v2_3_70.html#autotoc_md239", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md240", null ]
              ] ],
              [ "Carriers", "v2_3_70.html#autotoc_md241", null ],
              [ "Devices", "v2_3_70.html#autotoc_md242", [
                [ "<tt>AnalogWrapper</tt>", "v2_3_70.html#autotoc_md243", null ],
                [ "<tt>controlboardwrapper</tt>", "v2_3_70.html#autotoc_md244", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md245", null ],
                [ "<tt>ovrheadset</tt>", "v2_3_70.html#autotoc_md246", null ],
                [ "<tt>RemoteControlBoard</tt>", "v2_3_70.html#autotoc_md247", null ],
                [ "<tt>ServerFrameGrabber</tt>", "v2_3_70.html#autotoc_md248", null ],
                [ "<tt>TestFrameGrabber</tt>", "v2_3_70.html#autotoc_md249", null ]
              ] ],
              [ "RTF Plugins", "v2_3_70.html#autotoc_md250", null ],
              [ "Bindings", "v2_3_70.html#autotoc_md251", null ]
            ] ],
            [ "Bug Fixes", "v2_3_70.html#autotoc_md252", [
              [ "Libraries", "v2_3_70.html#autotoc_md253", [
                [ "<tt>YARP_OS</tt>", "v2_3_70.html#autotoc_md254", null ],
                [ "<tt>YARP_dev</tt>", "v2_3_70.html#autotoc_md255", null ]
              ] ],
              [ "Tools", "v2_3_70.html#autotoc_md256", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_70.html#autotoc_md257", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_70.html#autotoc_md258", null ]
              ] ],
              [ "GUIs", "v2_3_70.html#autotoc_md259", [
                [ "<tt>yarpmotorgui</tt>", "v2_3_70.html#autotoc_md260", null ],
                [ "<tt>yarpmanager</tt>", "v2_3_70.html#autotoc_md261", null ]
              ] ],
              [ "Devices", "v2_3_70.html#autotoc_md262", [
                [ "<tt>laserFromDepth</tt>", "v2_3_70.html#autotoc_md263", null ],
                [ "<tt>RGBDSensorWrapper</tt>", "v2_3_70.html#autotoc_md264", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v2_3_70.html#autotoc_md265", null ]
              ] ]
            ] ],
            [ "Contributors", "v2_3_70.html#autotoc_md266", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68.1 (2017-06-15)", "v2_3_68_1.html", [
          [ "YARP 2.3.68.1 Release Notes", "v2_3_68_1.html#autotoc_md180", [
            [ "Important Changes", "v2_3_68_1.html#autotoc_md181", [
              [ "Build System", "v2_3_68_1.html#autotoc_md182", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md183", [
                [ "depthCamera", "v2_3_68_1.html#autotoc_md184", null ]
              ] ]
            ] ],
            [ "New Features", "v2_3_68_1.html#autotoc_md185", [
              [ "Build System", "v2_3_68_1.html#autotoc_md186", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md187", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68_1.html#autotoc_md188", [
              [ "Build System", "v2_3_68_1.html#autotoc_md189", null ],
              [ "CMake Modules", "v2_3_68_1.html#autotoc_md190", null ],
              [ "Libraries", "v2_3_68_1.html#autotoc_md191", [
                [ "YARP_OS", "v2_3_68_1.html#autotoc_md192", null ],
                [ "YARP_sig", "v2_3_68_1.html#autotoc_md193", null ],
                [ "YARP_dev", "v2_3_68_1.html#autotoc_md194", null ],
                [ "YARP_math", "v2_3_68_1.html#autotoc_md195", null ]
              ] ],
              [ "Private libraries", "v2_3_68_1.html#autotoc_md196", [
                [ "YARP_manager", "v2_3_68_1.html#autotoc_md197", null ]
              ] ],
              [ "Tools", "v2_3_68_1.html#autotoc_md198", [
                [ "<tt>yarprobotinterface</tt>", "v2_3_68_1.html#autotoc_md199", null ],
                [ "<tt>yarpidl_rosmsg</tt>", "v2_3_68_1.html#autotoc_md200", null ],
                [ "<tt>yarpdataplayer</tt>", "v2_3_68_1.html#autotoc_md201", null ]
              ] ],
              [ "GUIs", "v2_3_68_1.html#autotoc_md202", [
                [ "yarpview", "v2_3_68_1.html#autotoc_md203", null ],
                [ "yarpscope", "v2_3_68_1.html#autotoc_md204", null ],
                [ "yarpmanager", "v2_3_68_1.html#autotoc_md205", null ],
                [ "yarplaserscannergui", "v2_3_68_1.html#autotoc_md206", null ],
                [ "yarpbatterygui", "v2_3_68_1.html#autotoc_md207", null ]
              ] ],
              [ "Carriers", "v2_3_68_1.html#autotoc_md208", null ],
              [ "Devices", "v2_3_68_1.html#autotoc_md209", [
                [ "fakeMotionControl", "v2_3_68_1.html#autotoc_md210", null ],
                [ "depthCamera", "v2_3_68_1.html#autotoc_md211", null ],
                [ "fakeLaser", "v2_3_68_1.html#autotoc_md212", null ],
                [ "rangeFinder2DWrapper", "v2_3_68_1.html#autotoc_md213", null ],
                [ "rpLidar", "v2_3_68_1.html#autotoc_md214", null ]
              ] ],
              [ "Bindings", "v2_3_68_1.html#autotoc_md215", null ]
            ] ],
            [ "Contributors", "v2_3_68_1.html#autotoc_md216", null ]
          ] ]
        ] ],
        [ "YARP 2.3.68 (2016-11-28)", "v2_3_68.html", [
          [ "YARP 2.3.68 Release Notes", "v2_3_68.html#autotoc_md155", [
            [ "Important Changes", "v2_3_68.html#autotoc_md156", [
              [ "Dependencies", "v2_3_68.html#autotoc_md157", null ],
              [ "YARP_OS", "v2_3_68.html#autotoc_md158", null ],
              [ "YARP_sig", "v2_3_68.html#autotoc_md159", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md160", null ],
              [ "YARP_gsl", "v2_3_68.html#autotoc_md161", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md162", null ],
              [ "CMake Modules", "v2_3_68.html#autotoc_md163", null ],
              [ "Tools", "v2_3_68.html#autotoc_md164", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md165", null ],
              [ "Devices", "v2_3_68.html#autotoc_md166", null ]
            ] ],
            [ "Bug Fixes", "v2_3_68.html#autotoc_md167", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md168", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md169", null ],
              [ "Devices", "v2_3_68.html#autotoc_md170", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md171", null ]
            ] ],
            [ "New Features", "v2_3_68.html#autotoc_md172", [
              [ "YARP_OS", "v2_3_68.html#autotoc_md173", null ],
              [ "YARP_math", "v2_3_68.html#autotoc_md174", null ],
              [ "YARP_dev", "v2_3_68.html#autotoc_md175", null ],
              [ "Carriers", "v2_3_68.html#autotoc_md176", null ],
              [ "Devices", "v2_3_68.html#autotoc_md177", null ],
              [ "GUIs", "v2_3_68.html#autotoc_md178", null ]
            ] ],
            [ "Contributors", "v2_3_68.html#autotoc_md179", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.2 (2016-11-28)", "v2_3_66_2.html", [
          [ "YARP 2.3.66.2 Release Notes", "v2_3_66_2.html#autotoc_md147", [
            [ "Important Changes", "v2_3_66_2.html#autotoc_md148", null ],
            [ "Bug Fixes", "v2_3_66_2.html#autotoc_md149", [
              [ "YARP_OS", "v2_3_66_2.html#autotoc_md150", null ],
              [ "YARP_dev", "v2_3_66_2.html#autotoc_md151", null ],
              [ "GUIs", "v2_3_66_2.html#autotoc_md152", null ],
              [ "Devices", "v2_3_66_2.html#autotoc_md153", null ]
            ] ],
            [ "Contributors", "v2_3_66_2.html#autotoc_md154", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66.1 (2016-10-20)", "v2_3_66_1.html", [
          [ "YARP 2.3.66.1 Release Notes", "v2_3_66_1.html#autotoc_md134", [
            [ "Important Changes", "v2_3_66_1.html#autotoc_md135", [
              [ "YARP_dev", "v2_3_66_1.html#autotoc_md136", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66_1.html#autotoc_md137", [
              [ "YARP_OS", "v2_3_66_1.html#autotoc_md138", null ],
              [ "YARP_DEV", "v2_3_66_1.html#autotoc_md139", null ],
              [ "Modules", "v2_3_66_1.html#autotoc_md140", null ],
              [ "Tools", "v2_3_66_1.html#autotoc_md141", null ],
              [ "GUIs", "v2_3_66_1.html#autotoc_md142", null ],
              [ "IDLs", "v2_3_66_1.html#autotoc_md143", null ],
              [ "Bindings", "v2_3_66_1.html#autotoc_md144", null ],
              [ "Build System", "v2_3_66_1.html#autotoc_md145", null ]
            ] ],
            [ "Contributors", "v2_3_66_1.html#autotoc_md146", null ]
          ] ]
        ] ],
        [ "YARP 2.3.66 (2016-06-01)", "v2_3_66.html", [
          [ "YARP 2.3.66 Release Notes", "v2_3_66.html#autotoc_md125", [
            [ "Important Changes", "v2_3_66.html#autotoc_md126", [
              [ "YARP_dev", "v2_3_66.html#autotoc_md127", null ]
            ] ],
            [ "Bug Fixes", "v2_3_66.html#autotoc_md128", [
              [ "CMake Modules", "v2_3_66.html#autotoc_md129", null ],
              [ "YARP_dev", "v2_3_66.html#autotoc_md130", null ],
              [ "Modules", "v2_3_66.html#autotoc_md131", null ],
              [ "GUIs", "v2_3_66.html#autotoc_md132", null ]
            ] ],
            [ "Contributors", "v2_3_66.html#autotoc_md133", null ]
          ] ]
        ] ],
        [ "YARP 2.3.65 (2016-05-13)", "v2_3_65.html", [
          [ "YARP 2.3.65 Release Notes", "v2_3_65.html#autotoc_md110", [
            [ "Important Changes", "v2_3_65.html#autotoc_md111", null ],
            [ "Bug Fixes", "v2_3_65.html#autotoc_md112", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md113", null ]
            ] ],
            [ "New Features", "v2_3_65.html#autotoc_md114", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md115", null ],
              [ "yarprobotinterface", "v2_3_65.html#autotoc_md116", null ],
              [ "yarpmanager++", "v2_3_65.html#autotoc_md117", null ]
            ] ],
            [ "Deprecated Features", "v2_3_65.html#autotoc_md118", [
              [ "YARP_OS", "v2_3_65.html#autotoc_md119", null ],
              [ "YARP_dev", "v2_3_65.html#autotoc_md120", null ],
              [ "Devices", "v2_3_65.html#autotoc_md121", null ],
              [ "Tools", "v2_3_65.html#autotoc_md122", null ],
              [ "GUIs", "v2_3_65.html#autotoc_md123", null ]
            ] ],
            [ "Contributors", "v2_3_65.html#autotoc_md124", null ]
          ] ]
        ] ],
        [ "YARP 2.3.64 (2015-06-15)", "v2_3_64.html", [
          [ "Contributors", "v2_3_64.html#autotoc_md109", null ]
        ] ],
        [ "YARP 2.3.63 (2014-07-14)", "v2_3_63.html", [
          [ "Contributors", "v2_3_63.html#autotoc_md108", null ]
        ] ],
        [ "YARP 2.3.62 (2014-02-19)", "v2_3_62.html", [
          [ "Contributors", "v2_3_62.html#autotoc_md107", null ]
        ] ],
        [ "YARP 2.3.61 (2014-01-31)", "v2_3_61.html", [
          [ "Contributors", "v2_3_61.html#autotoc_md106", null ]
        ] ],
        [ "YARP 2.3.60 (2014-01-29)", "v2_3_60.html", [
          [ "Contributors", "v2_3_60.html#autotoc_md105", null ]
        ] ],
        [ "YARP 2.3.22 (2013-07-26)", "v2_3_22.html", [
          [ "Contributors", "v2_3_22.html#autotoc_md100", null ]
        ] ],
        [ "YARP 2.3.21 (2013-07-08)", "v2_3_21.html", [
          [ "Contributors", "v2_3_21.html#autotoc_md99", null ]
        ] ],
        [ "YARP 2.3.20.1 (2012-12-19)", "v2_3_20_1.html", [
          [ "Contributors", "v2_3_20_1.html#autotoc_md98", null ]
        ] ],
        [ "YARP 2.3.20 (2012-11-23)", "v2_3_20.html", [
          [ "Contributors", "v2_3_20.html#autotoc_md97", null ]
        ] ],
        [ "YARP 2.3.19 (2012-07-05)", "v2_3_19.html", [
          [ "Contributors", "v2_3_19.html#autotoc_md95", null ]
        ] ],
        [ "YARP 2.3.15 (2012-01-27)", "v2_3_15.html", [
          [ "Contributors", "v2_3_15.html#autotoc_md94", null ]
        ] ],
        [ "YARP 2.3.14 (2011-12-13)", "v2_3_14.html", [
          [ "Contributors", "v2_3_14.html#autotoc_md93", null ]
        ] ],
        [ "YARP 2.3.12 (2011-09-13)", "v2_3_12.html", [
          [ "Contributors", "v2_3_12.html#autotoc_md92", null ]
        ] ],
        [ "YARP 2.3.10 (2011-08-19)", "v2_3_10.html", [
          [ "Contributors", "v2_3_10.html#autotoc_md91", null ]
        ] ],
        [ "YARP 2.3.9 (2011-08-19)", "v2_3_9.html", [
          [ "Contributors", "v2_3_9.html#autotoc_md340", null ]
        ] ],
        [ "YARP 2.3.8 (2011-07-25)", "v2_3_8.html", [
          [ "Contributors", "v2_3_8.html#autotoc_md339", null ]
        ] ],
        [ "YARP 2.3.7 (2011-07-22)", "v2_3_7.html", [
          [ "Contributors", "v2_3_7.html#autotoc_md217", null ]
        ] ],
        [ "YARP 2.3.6 (2011-07-11)", "v2_3_6.html", [
          [ "Contributors", "v2_3_6.html#autotoc_md104", null ]
        ] ],
        [ "YARP 2.3.5 (2011-06-24)", "v2_3_5.html", [
          [ "Contributors", "v2_3_5.html#autotoc_md103", null ]
        ] ],
        [ "YARP 2.3.4 (2011-05-27)", "v2_3_4.html", [
          [ "Contributors", "v2_3_4.html#autotoc_md102", null ]
        ] ],
        [ "YARP 2.3.3 (2010-12-17)", "v2_3_3.html", [
          [ "Contributors", "v2_3_3.html#autotoc_md101", null ]
        ] ],
        [ "YARP 2.3.2 (2010-11-29)", "v2_3_2.html", [
          [ "Contributors", "v2_3_2.html#autotoc_md96", null ]
        ] ],
        [ "YARP 2.3.1 (2010-09-21)", "v2_3_1.html", [
          [ "Contributors", "v2_3_1.html#autotoc_md90", null ]
        ] ],
        [ "YARP 2.3.0 (2010-07-01)", "v2_3_0.html", [
          [ "Contributors", "v2_3_0.html#autotoc_md89", null ]
        ] ],
        [ "YARP 2.2.7 (2010-05-04)", "v2_2_7.html", [
          [ "Contributors", "v2_2_7.html#autotoc_md88", null ]
        ] ],
        [ "YARP 2.2.6 (2010-01-20)", "v2_2_6.html", [
          [ "Contributors", "v2_2_6.html#autotoc_md87", null ]
        ] ],
        [ "YARP 2.2.5 (2009-12-04)", "v2_2_5.html", [
          [ "Contributors", "v2_2_5.html#autotoc_md86", null ]
        ] ],
        [ "YARP 2.2.4 (2009-09-09)", "v2_2_4.html", [
          [ "Contributors", "v2_2_4.html#autotoc_md85", null ]
        ] ],
        [ "YARP 2.2.3 (2009-05-22)", "v2_2_3.html", [
          [ "Contributors", "v2_2_3.html#autotoc_md84", null ]
        ] ],
        [ "YARP 2.2.2 (2008-11-20)", "v2_2_2.html", [
          [ "Contributors", "v2_2_2.html#autotoc_md83", null ]
        ] ],
        [ "YARP 2.2.1 (2008-07-08)", "v2_2_1.html", [
          [ "Contributors", "v2_2_1.html#autotoc_md82", null ]
        ] ],
        [ "YARP 2.2.0 (2008-04-09)", "v2_2_0.html", [
          [ "Contributors", "v2_2_0.html#autotoc_md81", null ]
        ] ],
        [ "YARP 2.1.9 (2008-17-03)", "v2_1_9.html", [
          [ "Contributors", "v2_1_9.html#autotoc_md80", null ]
        ] ],
        [ "YARP 2.1.8 (2007-11-20)", "v2_1_8.html", [
          [ "Contributors", "v2_1_8.html#autotoc_md79", null ]
        ] ],
        [ "YARP 2.1.7 (2007-09-25)", "v2_1_7.html", [
          [ "Contributors", "v2_1_7.html#autotoc_md78", null ]
        ] ],
        [ "YARP 2.1.6 (2007-07-26)", "v2_1_6.html", [
          [ "Contributors", "v2_1_6.html#autotoc_md77", null ]
        ] ],
        [ "YARP 2.1.5 (2007-06-04)", "v2_1_5.html", [
          [ "Contributors", "v2_1_5.html#autotoc_md76", null ]
        ] ],
        [ "YARP 2.1.4 (2007-04-04)", "v2_1_4.html", [
          [ "Contributors", "v2_1_4.html#autotoc_md75", null ]
        ] ],
        [ "YARP 2.1.3 (2007-02-22)", "v2_1_3.html", [
          [ "Contributors", "v2_1_3.html#autotoc_md74", null ]
        ] ],
        [ "YARP 2.1.0 (2006-10-28)", "v2_1_0.html", [
          [ "Contributors", "v2_1_0.html#autotoc_md73", null ]
        ] ],
        [ "YARP 2.0.4 (2006-07-05)", "v2_0_4.html", [
          [ "Contributors", "v2_0_4.html#autotoc_md72", null ]
        ] ]
      ] ],
      [ "Contributing to YARP", "contributing.html", [
        [ "Code Style", "contributing.html#autotoc_md1062", [
          [ "C++", "contributing.html#autotoc_md1063", [
            [ "Header guards", "contributing.html#autotoc_md1064", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1065", null ],
          [ "Git", "contributing.html#autotoc_md1066", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1067", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1068", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1070", null ],
          [ "Example", "contributing.html#autotoc_md1071", null ],
          [ "Terminology", "contributing.html#autotoc_md1072", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1073", [
          [ "Deprecated Features", "contributing.html#autotoc_md1074", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1075", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1076", null ]
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
"CalibratorVocabs_8h.html#ad39b7fed6cfe3f5ed702aa93622b0673",
"ControlBoardVocabs_8h.html#a6d401b41788321315c911af1db30f731",
"FakeChatBotDevice_8cpp_source.html",
"FfmpegWriter_8cpp.html",
"GenericSensor__nwc__ros2__ParamsParser_8cpp.html",
"IControlMode_8h.html#a7d02c8aef4163ef9432ebe4abeec4655",
"IJoypadController_8h.html#a23a90ff010f1d3b71979b8366a853e12",
"IPositionControl_8h.html#aef13f6dce8b1e3b9134d839ace5d064f",
"Image_8copyPixels_8cpp.html#a391b3401f760162a9ae048965b4b72fa",
"ImplementJointCoupling_8cpp.html",
"Localization2D__nws__ros2_8cpp.html",
"Map2D__nws__ros2__test_8cpp.html",
"MpiBcastStream_8cpp_source.html",
"NetworkClock_8h_source.html",
"PointCloudBase_8cpp.html#aaefe49aee8009b1d9097340627b44f1f",
"PortablePair_8cpp.html",
"ResourceFinderOptions_8cpp.html",
"SegmentationImage_8cpp.html",
"StringInputStream_8h_source.html",
"UnixSockTwoWayStream_8h.html",
"audioPlayerWrapper__test_8cpp.html",
"classAudioPlayerWrapper.html#a6da9028ace15c07d7b390af87364b2f0",
"classBattery__nws__ros2__ParamsParser.html#adf1ee25c0fe2d98b00098a00fb214da7",
"classControlBoardArbitraryAxesDecomposition.html#a961294cb21fb0b30b66afcb724b00559",
"classControlBoardSubControlBoardAxesDecomposition.html#a2dcf85f5b6c6ceb291b487790ea02814",
"classDynamixelAX12FtdiDriver.html#aadf7b79d9f808804ff44562307e88971",
"classFakeBatteryService__getBatteryCurrent__helper_1_1Reply.html",
"classFakeBatteryService__setBatteryInfo__helper.html#a96f8120a262045c516d67b6ad9870422",
"classFakeBot.html#ab5c322046eb040956fbb6ca8428842bb",
"classFakeFrameGrabber.html#a84bbf507093f8cc86b7066c5ac6f98c6",
"classFakeLLMDevice__ParamsParser.html#a10ed136459a1f752c8adda59729123a3",
"classFakeLaserWithMotor.html#ad1fac7127ce44e3b81d22a5516a271c3",
"classFakeMotionControl.html#a36a4c274d32023467232a0952cd96a9b",
"classFakeMotionControl.html#ad57ce8ccf8279688313564fe57a2ee86",
"classFakeNavigation__ParamsParser.html#a001108858da54d0db06479a3f0849d53",
"classFakeSpeechSynthesizer.html#a1b0cb590d2bbbf20e2752677a2a74d69",
"classFloatImageBufferedPort.html#abac9ec5e36b0b5f9bfe34d5781e90ace",
"classFrameGrabber__nws__ros2__ParamsParser.html#ae1e9e569751eb78753f3196eacb60523",
"classFrameTransformSet__nwc__ros2.html#afcc9026e3e5f30e86d760756f81a8d0a",
"classFrameTransformStorage__ParamsParser.html#a088d571a9122f3311cb90fc0db11fbf9",
"classGstreamerCarrier.html#a5cf11af012abe77d0aefbc6e0105ff0f",
"classIAudioGrabberMsgs__resetRecordingAudioBuffer__RPC__helper.html#a69369bef5b234ba6856a117430a38d0e",
"classIChatBotMsgs__getStatusRPC__helper_1_1Command.html#aa5fdb8df0e3e339e2de5099006d96024",
"classILocalization2DMsgs__get__estimated__odometry__RPC__helper_1_1Reply.html#ad6552f5e2742fb6f9d336e3626a61f92",
"classIMap2DMsgs.html#a6d514ce1a73a00198de1bf379b703456",
"classIMap2DMsgs__delete__area__RPC__helper_1_1Reply.html#a30d09f833d4c53b35920ac7d8227d216",
"classIMap2DMsgs__get__areas__list__RPC__helper.html#a41fa97665538e7f455eeff01c572735e",
"classIMap2DMsgs__load__locations__and__extras__RPC__helper.html#ad6d699dfc7f8a96eea2e53246f62a4e8",
"classIMap2DMsgs__save__locations__and__extras__RPC__helper.html#a49cafa0338392eede081864f87d022ec",
"classIMap2DRPCd.html#a03d4ff5ed11c20d08b9bd01ae25d3340",
"classINavigation2DMsgs__get__current__navigation__map__RPC__helper_1_1Command.html#a5dfd4627d1fa3b8d381eec05117fb059",
"classINavigation2DMsgs__goto__target__by__relative__location1__RPC__helper_1_1Reply.html",
"classIRangefinder2DMsgs.html#a4cb96f69e9b5a06a0ed6070b0f9722ff",
"classIRangefinder2DMsgs__setHorizontalResolution__RPC__helper.html#a6c080a3b41ca5bf00a4aaa668b0049a7",
"classISpeechSynthesizerMsgs__get__pitch__helper.html#aa6eb83f38ee0bbfa5ed5e889b6f0f430",
"classISpeechSynthesizerMsgs__synthesize__helper_1_1Command.html#a01f02e4d3cba357b7b7d1e0465de59dd",
"classInputPortProcessor.html#addb22585cba58a00ad5158a900f93bf3",
"classLaserFromRosTopic.html#a515dedb3dcb738b0c667e0511bf414f8",
"classMap2DStorage.html#a0b7c222d22d2b2ad6f15192fb0b37984",
"classMap2D__nws__ros2__ParamsParser.html#a72ba7c780360cd6a5ba48080bc4ed056",
"classMobileBaseVelocityControl__nws__ros.html#a0d559a9a5e36031e06a8f67a2036d3e0",
"classMpiStream.html#a75482946f68a9d82444a67505c468254",
"classNavigation2D__nwc__yarp.html#a35ec06dae83b80560a78e4b3285d93c8",
"classNodeArgs.html#aaffd4749af4354261d00bd56c92235d5",
"classPortAudioDeviceDriver.html#a8c90b60582ba33e94e38cc4f6f1894ea",
"classProperty_1_1Private.html#acdb4c4a5301e6318408819e558c1ee43",
"classRPCMessagesParser.html#ace39f119ca2220c96016a67757bcd72b",
"classRangefinder2D__nws__ros2__ParamsParser.html",
"classRemoteControlBoard.html#aa0e7cc3063be324ef545c9d2f5dcfb9b",
"classRgbdSensor__nwc__ros2__ParamsParser.html#a4a324f87cfd76416daffb859a83427aa",
"classRpLidar.html#aab5bfc23479448767577a8979ba35624",
"classSensorStreamingData.html#a6ab71e885c75bc8711e20f7a10552281",
"classSpeechSynthesizer__nwc__yarp.html#aabd3ec9194590a15b5489d90a0d4fa24",
"classTextureLogo.html#adba2261a56f995a13a99daa6a5eb8033",
"classV4L__camera.html#a80da4fca9bbce7a9c0f0485a2e9eeab9",
"classargusCameraDriver__ParamsParser.html#a7a94256ca3c33cb52347b381f79cb673",
"classrealsense2Driver.html#af25e64796c0f3c1c71bbd099d2c025d0",
"classreturn__get__abs__loc__of__curr__target.html#a9499e97f6cd5230ea4471a0b3d254c04",
"classreturn__get__path.html#a691cf0df4cb39757556a8f16dbf602a4",
"classyarp_1_1dev_1_1AudioRecorderDeviceBase.html#a611e844a79fd95a0f0e0afe484ced4c0",
"classyarp_1_1dev_1_1ControlBoardHelper.html#ab72d32ef851a3ec0906683a3f09cb1ff",
"classyarp_1_1dev_1_1IAudioGrabberSound.html#af0bf6e5a27c883b2d49a218b7b86d7c9",
"classyarp_1_1dev_1_1IEncoderArrays.html#a856ec157ea99a42e596d709509c5bf5e",
"classyarp_1_1dev_1_1IImpedanceControl.html#a833882c9ac169f386a08c0a27447a45e",
"classyarp_1_1dev_1_1IPWMControlRaw.html#aa19c1edaf5a5bda188ff78cea49b92f3",
"classyarp_1_1dev_1_1IService.html#adfaa5119fc723510b11743163dcfd0dc",
"classyarp_1_1dev_1_1ImplementCanBufferFactory.html#a1b2748db8440159858514f2e3c1c83b4",
"classyarp_1_1dev_1_1ImplementJointCoupling.html#ad1c6f78b039bdd50b1e09f500c60f0ee",
"classyarp_1_1dev_1_1ImplementPositionControl.html#acecf84bc2c16822cb506e8e7392726c2",
"classyarp_1_1dev_1_1Lidar2DDeviceBase.html#a51aedd146bddd2d46a536c4e434402e9",
"classyarp_1_1dev_1_1Nav2D_1_1INavigation2DExtraActions.html#ad157edf24d02be4be40086738a115a43",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2DOrigin.html#a835d8fe67dfdccdce1fce10b1b492c24",
"classyarp_1_1dev_1_1RGBDRosConversionUtils_1_1commonImageProcessor.html#aeca912abcc1033f46fff17ba0db4bd63",
"classyarp_1_1dev_1_1impl_1_1FixedSizeBuffersManager.html#ae22e96b9d5dcbf6e1270c23774877a63",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__getConversation__helper_1_1Command.html",
"classyarp_1_1dev_1_1llm_1_1return__ask.html#a8b44326dc452d07b33573f6539ea583d",
"classyarp_1_1manager_1_1Arbitrator.html#a6695d72d00cb5f6f26beb11a9ed47299",
"classyarp_1_1manager_1_1Connection.html#a06b531d9936d4280fc3851d5cc9989c6",
"classyarp_1_1manager_1_1Executable.html#a977e1fbd2ac3ac76d03e8b68e9980fa5",
"classyarp_1_1manager_1_1InputData.html#ad1c70a86f514fa747fc04781025932d0",
"classyarp_1_1manager_1_1Manager.html#a38e9d7e4e510eadf60637e5e1ee9f6a7",
"classyarp_1_1manager_1_1Module.html#adda7db68bfcad543abce1f3055e5c789",
"classyarp_1_1manager_1_1Platform.html#a569bd5892ff9c0acb565086bdaa7ca86",
"classyarp_1_1manager_1_1TextParser.html",
"classyarp_1_1math_1_1Quaternion.html#a3fb13e3bac396d46d1a69ee14e7d9156",
"classyarp_1_1os_1_1AbstractCarrier.html#a2113aa74e4ac0e6b84d8b21db4b0a920",
"classyarp_1_1os_1_1BufferedPort.html#ac552a52b47880438793b3e18ead04fef",
"classyarp_1_1os_1_1ConnectionReader.html#a006a3baefb43a1f3928afe3f0cd7e1b9",
"classyarp_1_1os_1_1Contactable.html#ad25e614df5a4c5885a41cf1886dca7e2",
"classyarp_1_1os_1_1Log.html#a90e214f5c0c2d0caa7b9c1b7619f6fda",
"classyarp_1_1os_1_1MultiNameSpace.html#a3612ce8728f58e64f44b457baa5972a9",
"classyarp_1_1os_1_1Node.html#a476462d3fb27971e9f3688d9fc2caa8c",
"classyarp_1_1os_1_1NullConnectionReader.html#abe0ef06987aa607f7ea18e50d964440d",
"classyarp_1_1os_1_1Port.html#a7119c567765ef6bcf814407db7f04dc2",
"classyarp_1_1os_1_1Property.html#ab17f41aa7b9a1592fbf997b91860796a",
"classyarp_1_1os_1_1ResourceFinder.html#ae5a7ff03ed95af338e5b9f7296aba4da",
"classyarp_1_1os_1_1SharedLibrary.html#af13d3670fbbde78171654a4e7ca60a43",
"classyarp_1_1os_1_1Subscriber.html#ac5e97ce8f65b1c62fc5559d851136de6",
"classyarp_1_1os_1_1TypedReader.html#a11ca33e35e966a71f5db8886198b0cad",
"classyarp_1_1os_1_1YarpNameSpace.html#a0856c0c6cb3ac9e02b81a5218303cf28",
"classyarp_1_1os_1_1idl_1_1WireReader.html#ad372aa75b5eee80c81a9e8641d050ba3",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#a149478dfa09cdd667bb0c933bd13312d",
"classyarp_1_1os_1_1impl_1_1Dispatcher.html#af024eec69bc2323e7e25a13122aa2615",
"classyarp_1_1os_1_1impl_1_1LogForwarder.html",
"classyarp_1_1os_1_1impl_1_1NameServer.html#ac621285368c4783481fdcf90aef39435",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#a53d7452fa44cd531ffa5f8e9702ff2e0",
"classyarp_1_1os_1_1impl_1_1Protocol.html#a3c2a1e74f4e5dc9dbe1a14da2a48717f",
"classyarp_1_1os_1_1impl_1_1StoreDict.html#a00f1b18e9c589964531bcec54d27eeb9",
"classyarp_1_1os_1_1impl_1_1StoreInt8.html#ab9c1a8b4bb4268dbc9cb1251b14bb5d7",
"classyarp_1_1os_1_1impl_1_1TcpFace.html#a56d31e026a75b12fc2df7c21f7b0650e",
"classyarp_1_1profiler_1_1NetworkProfilerBasic.html#a93b50c3a7cf247f44dfa2df8a35669d3",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html#a4635fbc3fc39d8f8c3dea84f47de5002",
"classyarp_1_1robotinterface_1_1Param.html#a7f8c7e6f53561b345e1144913fc4e825",
"classyarp_1_1robotinterface_1_1impl_1_1CalibratorThread.html",
"classyarp_1_1robottestingframework_1_1jointsPosMotion_1_1Private.html#a66182c3b4b790b69762afc5fe1c9bf85",
"classyarp_1_1serversql_1_1impl_1_1Subscriber.html#a4d8f7fd61c0391cbf196267f087097cb",
"classyarp_1_1sig_1_1Image.html#a9483f124e7674d92127d5cb241fc7d88",
"classyarp_1_1sig_1_1PointCloudBase.html#a7c8feb033f886ad7a116f4502ad5ee62",
"classyarp_1_1yarpLogger_1_1LogLevel.html#a7b157192ef0c0da75bed9cb58ae53c18",
"data_rep.html#data_rep_bin",
"dir_73e6ab815f8f83151db91e09effd435b.html",
"dir_ef11169068b525641c134c4cf7253ae4.html",
"frameTransformGet__nwc__ros2__test_8cpp_source.html",
"group__dev-how-to.html",
"install_yarp_windows.html#create_project_files_windows",
"localbroker_8cpp.html#a3cac34a65ba79284cf49c3ad602e0cf4",
"namespaceyarp_1_1conf_1_1environment.html#a94f52b365db8ddc731e7f20739e41dc3",
"namespaceyarp_1_1manager.html#aae0ef9913eec639ec0dbb68d6dac02fcab0dfd8e8e84b844561f11091417f374f",
"namespaceyarp_1_1sig.html#a7d63bc4c0fdeb0b0d8f17ca1e5295d8aa769331c5f4ff8dbbf37b48c4015691e8",
"physicresource_8h_source.html",
"return__get__current__nav__waypoint_8h_source.html",
"rpLidar_8h.html#a6b206b98a579408c6ba4d6bc7b1eca4e",
"structJoyData.html#a4033318a5fae0e0f8d23706829a8da5b",
"structVideo__params.html#a1066ad9ebc3894a083d9c97888e79df4",
"structyarp_1_1cv_1_1convert__code__to__cv_3_01yarp_1_1sig_1_1PixelRgba_01_4.html",
"structyarp_1_1os_1_1SystemInfo_1_1PlatformInfo.html",
"structyarp_1_1sig_1_1DataXY.html#a9964d765a3245523cbdfe1277ca6bda0",
"swigluarun_8h.html#a1fb447e623866388865404570465c904",
"thrift_tutorial.html#thrift_tutorial_subs_services",
"v2_3_70.html#autotoc_md235",
"v3_1_2.html#autotoc_md473",
"v3_5_0.html#autotoc_md824",
"xilinx-v4l2-controls_8h.html#a09f47e329cab9e0690bfb846eccc466b",
"yarp_data_dirs.html#datafiles_contextsrobots"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';