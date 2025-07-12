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
      [ "YARP <yarp-3.11> (2025-02-18)", "yarp_3_11.html", [
        [ "YARP <yarp-3.11> Release Notes", "yarp_3_11.html#autotoc_md436", [
          [ "Breaking Changes", "yarp_3_11.html#autotoc_md437", [
            [ "Library", "yarp_3_11.html#autotoc_md438", [
              [ "<tt>libYARP_dev</tt>", "yarp_3_11.html#autotoc_md439", null ]
            ] ],
            [ "Tests", "yarp_3_11.html#autotoc_md440", null ],
            [ "Compiler features", "yarp_3_11.html#autotoc_md441", null ]
          ] ],
          [ "Fixes", "yarp_3_11.html#autotoc_md442", null ],
          [ "New Features", "yarp_3_11.html#autotoc_md443", [
            [ "devices", "yarp_3_11.html#autotoc_md444", [
              [ "multiplenalogsensorremapper", "yarp_3_11.html#autotoc_md445", null ]
            ] ],
            [ "GUIs", "yarp_3_11.html#autotoc_md446", [
              [ "<tt>yarpopencvdisplay</tt>", "yarp_3_11.html#autotoc_md447", null ],
              [ "<tt>yarpmanager</tt>", "yarp_3_11.html#autotoc_md448", null ]
            ] ],
            [ "Libraries", "yarp_3_11.html#autotoc_md449", [
              [ "<tt>libYARP_sig</tt>", "yarp_3_11.html#autotoc_md450", null ],
              [ "<tt>libYARP_dev</tt>", "yarp_3_11.html#autotoc_md451", null ],
              [ "<tt>devices</tt>", "yarp_3_11.html#autotoc_md452", null ]
            ] ],
            [ "Other", "yarp_3_11.html#autotoc_md453", null ]
          ] ],
          [ "Contributors", "yarp_3_11.html#autotoc_md454", null ]
        ] ]
      ] ],
      [ "YARP 3.11.1 (2025-02-23)", "v3_11_1.html", [
        [ "YARP 3.11.1 Release Notes", "v3_11_1.html#autotoc_md455", [
          [ "Changes", "v3_11_1.html#autotoc_md456", [
            [ "Compiler features", "v3_11_1.html#autotoc_md457", null ]
          ] ],
          [ "Contributors", "v3_11_1.html#autotoc_md458", null ]
        ] ]
      ] ],
      [ "YARP 3.11.2 (2025-02-28)", "v3_11_2.html", [
        [ "YARP 3.11.2 Release Notes", "v3_11_2.html#autotoc_md459", [
          [ "Fixes", "v3_11_2.html#autotoc_md460", [
            [ "GUIs", "v3_11_2.html#autotoc_md461", [
              [ "<tt>YarpDataplayer</tt>", "v3_11_2.html#autotoc_md462", null ]
            ] ]
          ] ],
          [ "Contributors", "v3_11_2.html#autotoc_md463", null ]
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
          [ "YARP 3.9.1 Release Notes", "v3_9_1.html#autotoc_md1080", [
            [ "Fixes", "v3_9_1.html#autotoc_md1081", [
              [ "<tt>bindings</tt>", "v3_9_1.html#autotoc_md1082", null ],
              [ "Devices", "v3_9_1.html#autotoc_md1083", null ],
              [ "Libraries", "v3_9_1.html#autotoc_md1084", [
                [ "<tt>libYARP_os</tt>", "v3_9_1.html#autotoc_md1085", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_9_1.html#autotoc_md1086", null ]
              ] ],
              [ "GUIs", "v3_9_1.html#autotoc_md1087", [
                [ "<tt>yarpviz</tt>", "v3_9_1.html#autotoc_md1088", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_1.html#autotoc_md1089", null ]
          ] ]
        ] ],
        [ "YARP 3.9.0 (2023-11-21)", "v3_9_0.html", [
          [ "YARP 3.9.0 Release Notes", "v3_9_0.html#autotoc_md1061", [
            [ "Major Behaviour Changes", "v3_9_0.html#autotoc_md1062", null ],
            [ "Deprecations and removals", "v3_9_0.html#autotoc_md1063", null ],
            [ "Fixes", "v3_9_0.html#autotoc_md1064", null ],
            [ "New Features", "v3_9_0.html#autotoc_md1065", [
              [ "Docker", "v3_9_0.html#autotoc_md1066", null ],
              [ "GUIs", "v3_9_0.html#autotoc_md1067", [
                [ "yarpaudiocontrolgui", "v3_9_0.html#autotoc_md1068", null ],
                [ "yarpllmgui", "v3_9_0.html#autotoc_md1069", null ]
              ] ],
              [ "Libraries", "v3_9_0.html#autotoc_md1070", [
                [ "libYARP_sig", "v3_9_0.html#autotoc_md1071", null ],
                [ "libYARP_companion", "v3_9_0.html#autotoc_md1072", null ],
                [ "libYARP_dev", "v3_9_0.html#autotoc_md1073", null ]
              ] ],
              [ "Devices", "v3_9_0.html#autotoc_md1074", [
                [ "frameTransformStorage + frameTransformClient + frameTransformServer", "v3_9_0.html#autotoc_md1075", null ],
                [ "chatBot", "v3_9_0.html#autotoc_md1076", null ],
                [ "speechSynthesizer", "v3_9_0.html#autotoc_md1077", null ],
                [ "speechTranscription", "v3_9_0.html#autotoc_md1078", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_9_0.html#autotoc_md1079", null ]
          ] ]
        ] ],
        [ "YARP 3.8.1 (2023-06-05)", "v3_8_1.html", [
          [ "YARP 3.8.1 Release Notes", "v3_8_1.html#autotoc_md1052", [
            [ "Bug Fixes", "v3_8_1.html#autotoc_md1053", [
              [ "tools", "v3_8_1.html#autotoc_md1054", [
                [ "<tt>yarpmotorgui</tt>", "v3_8_1.html#autotoc_md1055", null ]
              ] ],
              [ "devices", "v3_8_1.html#autotoc_md1056", [
                [ "multipleanalogsensorsserver", "v3_8_1.html#autotoc_md1057", null ],
                [ "serialPort_nws_yarp serialPort_nwc_yarp", "v3_8_1.html#autotoc_md1058", null ],
                [ "opencv_grabber", "v3_8_1.html#autotoc_md1059", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_8_1.html#autotoc_md1060", null ]
          ] ]
        ] ],
        [ "YARP 3.8.0 (2023-03-02)", "v3_8_0.html", [
          [ "YARP 3.8.0 Release Notes", "v3_8_0.html#autotoc_md1011", [
            [ "Deprecation and Behaviour Changes", "v3_8_0.html#autotoc_md1012", [
              [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1013", null ],
              [ "<tt>Devices</tt>", "v3_8_0.html#autotoc_md1014", null ]
            ] ],
            [ "New Features", "v3_8_0.html#autotoc_md1015", [
              [ "Libraries", "v3_8_0.html#autotoc_md1016", [
                [ "<tt>lib_yarp_companion</tt>", "v3_8_0.html#autotoc_md1017", null ],
                [ "<tt>lib_yarp_os</tt>", "v3_8_0.html#autotoc_md1018", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_8_0.html#autotoc_md1019", null ],
                [ "<tt>bindings</tt>", "v3_8_0.html#autotoc_md1020", null ],
                [ "<tt>libYARP_dev_tests</tt>", "v3_8_0.html#autotoc_md1021", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_8_0.html#autotoc_md1022", null ]
              ] ],
              [ "Devices", "v3_8_0.html#autotoc_md1023", [
                [ "<tt>fakeLaserWithMotor</tt>", "v3_8_0.html#autotoc_md1024", null ],
                [ "<tt>rangefinder2D_nwc_yarp</tt>", "v3_8_0.html#autotoc_md1025", null ],
                [ "<tt>frameTransformServer</tt> + <tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1026", null ]
              ] ],
              [ "<tt>yarpidl_thrift</tt>", "v3_8_0.html#autotoc_md1027", null ],
              [ "Extern", "v3_8_0.html#autotoc_md1028", [
                [ "<tt>Catch</tt>", "v3_8_0.html#autotoc_md1029", null ],
                [ "<tt>sqlite3</tt>", "v3_8_0.html#autotoc_md1030", null ]
              ] ],
              [ "GUIs", "v3_8_0.html#autotoc_md1031", [
                [ "<tt>yarpview</tt>", "v3_8_0.html#autotoc_md1032", null ],
                [ "<tt>yarpmotorgui</tt>", "v3_8_0.html#autotoc_md1033", null ]
              ] ],
              [ "YCM", "v3_8_0.html#autotoc_md1034", null ],
              [ "Other", "v3_8_0.html#autotoc_md1035", null ],
              [ "Portmonitors", "v3_8_0.html#autotoc_md1036", [
                [ "<tt>image_rotation</tt>", "v3_8_0.html#autotoc_md1037", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_8_0.html#autotoc_md1038", [
              [ "bindings", "v3_8_0.html#autotoc_md1039", null ],
              [ "devices", "v3_8_0.html#autotoc_md1040", [
                [ "<tt>ffmpeg_grabber</tt>", "v3_8_0.html#autotoc_md1041", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_8_0.html#autotoc_md1042", null ],
                [ "<tt>AudioPlayerWrapper</tt>", "v3_8_0.html#autotoc_md1043", null ],
                [ "<tt>frameTransformClient</tt>", "v3_8_0.html#autotoc_md1044", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_8_0.html#autotoc_md1045", null ],
                [ "<tt>multipleanalogsensorsremapper</tt>", "v3_8_0.html#autotoc_md1046", null ]
              ] ],
              [ "Tools", "v3_8_0.html#autotoc_md1047", [
                [ "<tt>yarprobotinterface</tt>", "v3_8_0.html#autotoc_md1048", null ],
                [ "Yarp companion", "v3_8_0.html#autotoc_md1049", null ]
              ] ],
              [ "Integration Tests", "v3_8_0.html#autotoc_md1050", null ]
            ] ],
            [ "Contributors", "v3_8_0.html#autotoc_md1051", null ]
          ] ]
        ] ],
        [ "YARP 3.7.2 (2022-06-30)", "v3_7_2.html", [
          [ "YARP 3.7.2 Release Notes", "v3_7_2.html#autotoc_md1003", [
            [ "Bug Fixes", "v3_7_2.html#autotoc_md1004", [
              [ "Documentation", "v3_7_2.html#autotoc_md1005", null ],
              [ "Libraries", "v3_7_2.html#autotoc_md1006", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_2.html#autotoc_md1007", null ]
              ] ],
              [ "Devices", "v3_7_2.html#autotoc_md1008", [
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_7_2.html#autotoc_md1009", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_2.html#autotoc_md1010", null ]
          ] ]
        ] ],
        [ "YARP 3.7.1 (2022-06-21)", "v3_7_1.html", [
          [ "YARP 3.7.1 Release Notes", "v3_7_1.html#autotoc_md994", [
            [ "Bug Fixes", "v3_7_1.html#autotoc_md995", [
              [ "CMake", "v3_7_1.html#autotoc_md996", null ],
              [ "Devices", "v3_7_1.html#autotoc_md997", null ],
              [ "Libraries", "v3_7_1.html#autotoc_md998", [
                [ "<tt>lib_yarp_dev</tt>", "v3_7_1.html#autotoc_md999", null ]
              ] ],
              [ "Tools", "v3_7_1.html#autotoc_md1000", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_1.html#autotoc_md1001", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_1.html#autotoc_md1002", null ]
          ] ]
        ] ],
        [ "YARP 3.7.0 (2022-05-25)", "v3_7_0.html", [
          [ "YARP 3.7.0 Release Notes", "v3_7_0.html#autotoc_md969", [
            [ "Deprecation and Behaviour Changes", "v3_7_0.html#autotoc_md970", [
              [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md971", null ],
              [ "<tt>Devices</tt>", "v3_7_0.html#autotoc_md972", null ]
            ] ],
            [ "New Features", "v3_7_0.html#autotoc_md973", [
              [ "Libraries", "v3_7_0.html#autotoc_md974", [
                [ "<tt>lib_yarp_os</tt>", "v3_7_0.html#autotoc_md975", null ],
                [ "<tt>lib_yarp_dev</tt>", "v3_7_0.html#autotoc_md978", null ],
                [ "<tt>lib_yarp_companion</tt>", "v3_7_0.html#autotoc_md979", null ],
                [ "<tt>libYARP_robotinterface</tt>", "v3_7_0.html#autotoc_md980", null ]
              ] ],
              [ "Devices", "v3_7_0.html#autotoc_md981", [
                [ "<tt>audioToFileDevice</tt>", "v3_7_0.html#autotoc_md982", null ]
              ] ],
              [ "Port Monitors", "v3_7_0.html#autotoc_md983", null ],
              [ "Tools", "v3_7_0.html#autotoc_md984", [
                [ "<tt>yarpidl_thrift</tt>", "v3_7_0.html#autotoc_md985", null ]
              ] ],
              [ "GUIs", "v3_7_0.html#autotoc_md986", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md987", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_7_0.html#autotoc_md988", [
              [ "Catch2", "v3_7_0.html#autotoc_md989", null ],
              [ "CMake", "v3_7_0.html#autotoc_md990", null ],
              [ "GUIs", "v3_7_0.html#autotoc_md991", [
                [ "<tt>yarpmotorgui</tt>", "v3_7_0.html#autotoc_md992", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_7_0.html#autotoc_md993", null ]
          ] ]
        ] ],
        [ "YARP 3.6.0 (2021-12-24)", "v3_6_0.html", [
          [ "YARP 3.6.0 Release Notes", "v3_6_0.html#autotoc_md912", [
            [ "Important Changes", "v3_6_0.html#autotoc_md913", [
              [ "Dependencies", "v3_6_0.html#autotoc_md914", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_6_0.html#autotoc_md915", [
              [ "Devices", "v3_6_0.html#autotoc_md916", null ]
            ] ],
            [ "New Features", "v3_6_0.html#autotoc_md917", [
              [ "Libraries", "v3_6_0.html#autotoc_md918", [
                [ "<tt>conf</tt>", "v3_6_0.html#autotoc_md919", null ],
                [ "<tt>os</tt>", "v3_6_0.html#autotoc_md920", null ],
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md926", null ],
                [ "<tt>dev</tt>", "v3_6_0.html#autotoc_md927", null ]
              ] ],
              [ "Devices", "v3_6_0.html#autotoc_md937", [
                [ "<tt>fakeLaser</tt>", "v3_6_0.html#autotoc_md938", null ],
                [ "<tt>frameTransformServer</tt>", "v3_6_0.html#autotoc_md939", null ],
                [ "<tt>frameTransformClient</tt>", "v3_6_0.html#autotoc_md940", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_6_0.html#autotoc_md941", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_6_0.html#autotoc_md942", null ],
                [ "<tt>map2DStorage</tt>", "v3_6_0.html#autotoc_md943", null ],
                [ "<tt>map2DServer</tt>", "v3_6_0.html#autotoc_md944", null ],
                [ "<tt>remote_controlboard</tt>", "v3_6_0.html#autotoc_md945", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_6_0.html#autotoc_md946", null ],
                [ "<tt>controlboardremapper</tt>", "v3_6_0.html#autotoc_md947", null ],
                [ "<tt>fakeMotionControl</tt>", "v3_6_0.html#autotoc_md948", null ],
                [ "<tt>portaudio</tt>", "v3_6_0.html#autotoc_md949", null ],
                [ "<tt>portaudioPlayer</tt>", "v3_6_0.html#autotoc_md950", null ],
                [ "<tt>portaudioRecorder</tt>", "v3_6_0.html#autotoc_md951", null ]
              ] ],
              [ "Port Monitors", "v3_6_0.html#autotoc_md952", null ],
              [ "Tools", "v3_6_0.html#autotoc_md953", [
                [ "<tt>yarp</tt>", "v3_6_0.html#autotoc_md954", null ],
                [ "<tt>yarprun</tt>", "v3_6_0.html#autotoc_md955", null ]
              ] ],
              [ "<tt>robotinterface</tt>", "v3_6_0.html#autotoc_md956", [
                [ "<tt>yarpidl_thrift</tt>", "v3_6_0.html#autotoc_md957", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md958", [
                [ "<tt>yarpmotorgui</tt>", "v3_6_0.html#autotoc_md959", null ],
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md960", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_6_0.html#autotoc_md961", [
              [ "Build System", "v3_6_0.html#autotoc_md962", null ],
              [ "Libraries", "v3_6_0.html#autotoc_md963", [
                [ "<tt>sig</tt>", "v3_6_0.html#autotoc_md964", null ]
              ] ],
              [ "GUIs", "v3_6_0.html#autotoc_md965", [
                [ "<tt>yarplogger</tt>", "v3_6_0.html#autotoc_md966", null ]
              ] ],
              [ "Bindings", "v3_6_0.html#autotoc_md967", null ]
            ] ],
            [ "Contributors", "v3_6_0.html#autotoc_md968", null ]
          ] ]
        ] ],
        [ "YARP 3.5.1 (2021-11-10)", "v3_5_1.html", [
          [ "YARP 3.5.1 Release Notes", "v3_5_1.html#autotoc_md866", [
            [ "New Features", "v3_5_1.html#autotoc_md867", [
              [ "Libraries", "v3_5_1.html#autotoc_md868", [
                [ "<tt>math</tt>", "v3_5_1.html#autotoc_md869", null ]
              ] ],
              [ "Build System", "v3_5_1.html#autotoc_md870", null ],
              [ "Libraries", "v3_5_1.html#autotoc_md871", [
                [ "<tt>os</tt>", "v3_5_1.html#autotoc_md872", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_5_1.html#autotoc_md876", null ],
              [ "<tt>robotinterface</tt>", "v3_5_1.html#autotoc_md877", null ],
              [ "<tt>run</tt>", "v3_5_1.html#autotoc_md878", null ],
              [ "Devices", "v3_5_1.html#autotoc_md879", [
                [ "<tt>audioFromFileDevice</tt>", "v3_5_1.html#autotoc_md880", null ],
                [ "<tt>controlBoard_nws_yarp</tt>", "v3_5_1.html#autotoc_md881", null ]
              ] ],
              [ "<tt>controlBoard_nws_ros</tt>", "v3_5_1.html#autotoc_md882", [
                [ "<tt>controlboardremapper</tt>", "v3_5_1.html#autotoc_md883", null ],
                [ "<tt>ffmpeg_grabber</tt>", "v3_5_1.html#autotoc_md884", null ],
                [ "<tt>ffmpeg_writer</tt>", "v3_5_1.html#autotoc_md885", null ]
              ] ],
              [ "<tt>frameGrabber_nws_ros</tt>", "v3_5_1.html#autotoc_md886", [
                [ "<tt>frameTransformClient</tt>", "v3_5_1.html#autotoc_md887", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_1.html#autotoc_md888", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md889", null ],
                [ "<tt>frameTransformSetMultiplexer</tt>", "v3_5_1.html#autotoc_md890", null ],
                [ "<tt>frameTransformStorage</tt>", "v3_5_1.html#autotoc_md891", null ],
                [ "<tt>frameTransformContainer</tt>", "v3_5_1.html#autotoc_md892", null ],
                [ "<tt>frameTransformSet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md893", null ],
                [ "<tt>frameTransformSet_nws_yarp</tt>", "v3_5_1.html#autotoc_md894", null ],
                [ "<tt>frameTransformGet_nwc_yarp</tt>", "v3_5_1.html#autotoc_md895", null ],
                [ "<tt>frameTransformGet_nws_yarp</tt>", "v3_5_1.html#autotoc_md896", null ],
                [ "<tt>frameTransformSet_nwc_ros</tt>", "v3_5_1.html#autotoc_md897", null ],
                [ "<tt>frameTransformSet_nws_ros</tt>", "v3_5_1.html#autotoc_md898", null ],
                [ "<tt>frameTransformGet_nwc_ros</tt>", "v3_5_1.html#autotoc_md899", null ],
                [ "<tt>map2D_nws_yarp</tt>", "v3_5_1.html#autotoc_md900", null ],
                [ "<tt>opencv_grabber</tt>", "v3_5_1.html#autotoc_md901", null ],
                [ "<tt>rgbdSensor_nws_ros</tt>", "v3_5_1.html#autotoc_md902", null ],
                [ "<tt>transformClient</tt>", "v3_5_1.html#autotoc_md903", null ]
              ] ],
              [ "Port Monitors", "v3_5_1.html#autotoc_md904", [
                [ "<tt>image_compression_ffmpeg</tt>", "v3_5_1.html#autotoc_md905", null ]
              ] ],
              [ "GUIs", "v3_5_1.html#autotoc_md906", [
                [ "<tt>yarplogger</tt>", "v3_5_1.html#autotoc_md907", null ],
                [ "<tt>yarpmanager</tt>", "v3_5_1.html#autotoc_md908", null ]
              ] ],
              [ "Bindings", "v3_5_1.html#autotoc_md909", [
                [ "Python", "v3_5_1.html#autotoc_md910", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_1.html#autotoc_md911", null ]
          ] ]
        ] ],
        [ "YARP 3.5.0 (2021-07-15)", "v3_5_0.html", [
          [ "YARP 3.5.0 Release Notes", "v3_5_0.html#autotoc_md764", [
            [ "Important Changes", "v3_5_0.html#autotoc_md765", [
              [ "Dependencies", "v3_5_0.html#autotoc_md766", null ],
              [ "Libraries", "v3_5_0.html#autotoc_md767", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md768", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md770", null ]
            ] ],
            [ "Deprecation and Behaviour Changes", "v3_5_0.html#autotoc_md771", [
              [ "Libraries", "v3_5_0.html#autotoc_md772", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md773", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md774", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md786", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md788", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md791", null ]
              ] ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md792", null ],
              [ "Devices", "v3_5_0.html#autotoc_md793", null ]
            ] ],
            [ "New Features", "v3_5_0.html#autotoc_md794", [
              [ "Libraries", "v3_5_0.html#autotoc_md795", [
                [ "<tt>conf</tt>", "v3_5_0.html#autotoc_md796", null ],
                [ "<tt>os</tt>", "v3_5_0.html#autotoc_md797", null ],
                [ "<tt>Bottle</tt>", "v3_5_0.html#autotoc_md798", null ],
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md808", null ],
                [ "<tt>dev</tt>", "v3_5_0.html#autotoc_md814", null ],
                [ "<tt>robotinterface</tt>", "v3_5_0.html#autotoc_md823", null ]
              ] ],
              [ "Carriers", "v3_5_0.html#autotoc_md825", null ],
              [ "Port Monitors", "v3_5_0.html#autotoc_md826", null ],
              [ "Devices", "v3_5_0.html#autotoc_md827", [
                [ "<tt>AudioPlayerWrapper</tt>", "v3_5_0.html#autotoc_md828", null ],
                [ "<tt>AudioRecorderWrapper</tt>", "v3_5_0.html#autotoc_md829", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_5_0.html#autotoc_md830", null ],
                [ "<tt>fakeLaser</tt>", "v3_5_0.html#autotoc_md831", null ],
                [ "<tt>fakeMicrophone</tt>", "v3_5_0.html#autotoc_md832", null ],
                [ "<tt>fakeNavigation</tt>", "v3_5_0.html#autotoc_md833", null ],
                [ "<tt>frameTransformServer</tt>", "v3_5_0.html#autotoc_md834", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md835", null ],
                [ "<tt>navigation2DClient</tt>", "v3_5_0.html#autotoc_md836", null ]
              ] ],
              [ "Tools", "v3_5_0.html#autotoc_md837", [
                [ "<tt>yarp</tt>", "v3_5_0.html#autotoc_md838", null ],
                [ "<tt>yarpdatadumper</tt>", "v3_5_0.html#autotoc_md839", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_5_0.html#autotoc_md840", null ],
                [ "<tt>yarpidl_thrift</tt>", "v3_5_0.html#autotoc_md841", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md842", [
                [ "<tt>yarpview</tt>", "v3_5_0.html#autotoc_md843", null ],
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md844", null ]
              ] ],
              [ "Bindings", "v3_5_0.html#autotoc_md845", null ]
            ] ],
            [ "New Experimental Features", "v3_5_0.html#autotoc_md846", [
              [ "Carriers", "v3_5_0.html#autotoc_md847", null ],
              [ "Devices", "v3_5_0.html#autotoc_md848", null ],
              [ "Bindings", "v3_5_0.html#autotoc_md849", [
                [ "Python", "v3_5_0.html#autotoc_md850", null ]
              ] ]
            ] ],
            [ "Bug Fixes", "v3_5_0.html#autotoc_md851", [
              [ "Libraries", "v3_5_0.html#autotoc_md852", [
                [ "<tt>sig</tt>", "v3_5_0.html#autotoc_md853", null ]
              ] ]
            ] ],
            [ "Carriers", "v3_5_0.html#autotoc_md856", [
              [ "<tt>portmonitor</tt>", "v3_5_0.html#autotoc_md857", null ],
              [ "Devices", "v3_5_0.html#autotoc_md858", [
                [ "<tt>grabberDual</tt>", "v3_5_0.html#autotoc_md859", null ]
              ] ],
              [ "Devices", "v3_5_0.html#autotoc_md860", [
                [ "<tt>RGBDSensorClient</tt>", "v3_5_0.html#autotoc_md861", null ],
                [ "<tt>map2DServer</tt>", "v3_5_0.html#autotoc_md862", null ]
              ] ],
              [ "GUIs", "v3_5_0.html#autotoc_md863", [
                [ "yarpdataplayer", "v3_5_0.html#autotoc_md864", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_5_0.html#autotoc_md865", null ]
          ] ]
        ] ],
        [ "YARP 3.4.6 (2021-07-02)", "v3_4_6.html", [
          [ "YARP 3.4.6 Release Notes", "v3_4_6.html#autotoc_md749", [
            [ "Bug Fixes", "v3_4_6.html#autotoc_md750", null ],
            [ "Build System", "v3_4_6.html#autotoc_md751", null ],
            [ "Libraries", "v3_4_6.html#autotoc_md752", [
              [ "<tt>sig</tt>", "v3_4_6.html#autotoc_md753", [
                [ "<tt>Image</tt>", "v3_4_6.html#autotoc_md754", null ]
              ] ],
              [ "<tt>dev</tt>", "v3_4_6.html#autotoc_md755", [
                [ "<tt>DeviceResponder</tt>", "v3_4_6.html#autotoc_md756", null ]
              ] ]
            ] ],
            [ "GUIs", "v3_4_6.html#autotoc_md757", [
              [ "<tt>yarpview</tt>", "v3_4_6.html#autotoc_md758", null ]
            ] ],
            [ "Devices", "v3_4_6.html#autotoc_md759", [
              [ "<tt>localization2DClient</tt>", "v3_4_6.html#autotoc_md760", null ],
              [ "<tt>navigation2DClient</tt>", "v3_4_6.html#autotoc_md761", null ],
              [ "<tt>localization2DServer</tt>", "v3_4_6.html#autotoc_md762", null ]
            ] ],
            [ "Contributors", "v3_4_6.html#autotoc_md763", null ]
          ] ]
        ] ],
        [ "YARP 3.4.5 (2021-05-24)", "v3_4_5.html", [
          [ "YARP 3.4.5 Release Notes", "v3_4_5.html#autotoc_md741", [
            [ "Bug Fixes", "v3_4_5.html#autotoc_md742", [
              [ "Libraries", "v3_4_5.html#autotoc_md743", [
                [ "<tt>sig</tt>", "v3_4_5.html#autotoc_md744", null ]
              ] ],
              [ "Devices", "v3_4_5.html#autotoc_md746", [
                [ "<tt>BatteryWrapper</tt>", "v3_4_5.html#autotoc_md747", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_5.html#autotoc_md748", null ]
          ] ]
        ] ],
        [ "YARP 3.4.4 (2021-05-19)", "v3_4_4.html", [
          [ "YARP 3.4.4 Release Notes", "v3_4_4.html#autotoc_md730", [
            [ "Bug Fixes", "v3_4_4.html#autotoc_md731", [
              [ "Build System", "v3_4_4.html#autotoc_md732", null ],
              [ "Libraries", "v3_4_4.html#autotoc_md733", null ],
              [ "<tt>conf</tt>", "v3_4_4.html#autotoc_md734", [
                [ "<tt>os</tt>", "v3_4_4.html#autotoc_md735", null ]
              ] ],
              [ "Tools", "v3_4_4.html#autotoc_md736", [
                [ "<tt>yarplogger</tt>", "v3_4_4.html#autotoc_md737", null ]
              ] ],
              [ "Bindings", "v3_4_4.html#autotoc_md738", [
                [ "Python", "v3_4_4.html#autotoc_md739", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_4.html#autotoc_md740", null ]
          ] ]
        ] ],
        [ "YARP 3.4.3 (2021-02-23)", "v3_4_3.html", [
          [ "YARP 3.4.3 Release Notes", "v3_4_3.html#autotoc_md719", [
            [ "Bug Fixes", "v3_4_3.html#autotoc_md720", [
              [ "Libraries", "v3_4_3.html#autotoc_md721", [
                [ "<tt>robotinterface</tt>", "v3_4_3.html#autotoc_md722", null ]
              ] ],
              [ "Devices", "v3_4_3.html#autotoc_md723", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_3.html#autotoc_md724", null ],
                [ "<tt>fakeFrameGrabber</tt>", "v3_4_3.html#autotoc_md725", null ],
                [ "<tt>virtualAnalogWrapper</tt>", "v3_4_3.html#autotoc_md726", null ]
              ] ],
              [ "GUI", "v3_4_3.html#autotoc_md727", [
                [ "yarpmotorgui", "v3_4_3.html#autotoc_md728", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_3.html#autotoc_md729", null ]
          ] ]
        ] ],
        [ "YARP 3.4.2 (2021-01-19)", "v3_4_2.html", [
          [ "YARP 3.4.2 Release Notes", "v3_4_2.html#autotoc_md698", [
            [ "Bug Fixes", "v3_4_2.html#autotoc_md699", [
              [ "Build System", "v3_4_2.html#autotoc_md700", null ],
              [ "Libraries", "v3_4_2.html#autotoc_md701", [
                [ "<tt>os</tt>", "v3_4_2.html#autotoc_md702", null ],
                [ "<tt>NameSpace</tt>", "v3_4_2.html#autotoc_md704", null ],
                [ "<tt>sig</tt>", "v3_4_2.html#autotoc_md705", null ]
              ] ],
              [ "Devices", "v3_4_2.html#autotoc_md708", [
                [ "<tt>controlboardwrapper2</tt>", "v3_4_2.html#autotoc_md709", null ],
                [ "<tt>ffmpeg</tt>", "v3_4_2.html#autotoc_md710", null ],
                [ "<tt>realsense2</tt>", "v3_4_2.html#autotoc_md711", null ]
              ] ],
              [ "Tools", "v3_4_2.html#autotoc_md712", [
                [ "<tt>yarpmotorgui</tt>", "v3_4_2.html#autotoc_md713", null ],
                [ "<tt>yarpmobilebasegui</tt>", "v3_4_2.html#autotoc_md714", null ]
              ] ],
              [ "GUIs", "v3_4_2.html#autotoc_md715", [
                [ "<tt>yarpviz</tt>", "v3_4_2.html#autotoc_md716", null ],
                [ "<tt>yarpbatterygui</tt>", "v3_4_2.html#autotoc_md717", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_2.html#autotoc_md718", null ]
          ] ]
        ] ],
        [ "YARP 3.4.1 (2020-09-28)", "v3_4_1.html", [
          [ "YARP 3.4.1 Release Notes", "v3_4_1.html#autotoc_md680", [
            [ "Bug Fixes", "v3_4_1.html#autotoc_md681", [
              [ "Build System", "v3_4_1.html#autotoc_md682", null ],
              [ "Libraries", "v3_4_1.html#autotoc_md683", [
                [ "<tt>os</tt>", "v3_4_1.html#autotoc_md684", null ],
                [ "<tt>sig</tt>", "v3_4_1.html#autotoc_md686", null ]
              ] ],
              [ "Devices", "v3_4_1.html#autotoc_md688", [
                [ "<tt>FakeFrameGrabber</tt>", "v3_4_1.html#autotoc_md689", null ],
                [ "<tt>multipleanalogsensorsserver</tt>", "v3_4_1.html#autotoc_md690", null ],
                [ "<tt>realsense2Tracking</tt>", "v3_4_1.html#autotoc_md691", null ],
                [ "<tt>ovrheadset</tt>", "v3_4_1.html#autotoc_md692", null ]
              ] ],
              [ "Tools", "v3_4_1.html#autotoc_md693", [
                [ "<tt>yarpdatadumper</tt>", "v3_4_1.html#autotoc_md694", null ],
                [ "<tt>yarpmanager</tt>", "v3_4_1.html#autotoc_md695", null ],
                [ "<tt>yarprobotinterface</tt>", "v3_4_1.html#autotoc_md696", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_1.html#autotoc_md697", null ]
          ] ]
        ] ],
        [ "YARP 3.4.0 (2020-07-31)", "v3_4_0.html", [
          [ "YARP 3.4.0 Release Notes", "v3_4_0.html#autotoc_md605", [
            [ "Important Changes", "v3_4_0.html#autotoc_md606", null ],
            [ "Deprecation and Behaviour Changes", "v3_4_0.html#autotoc_md607", [
              [ "Build System", "v3_4_0.html#autotoc_md608", [
                [ "os", "v3_4_0.html#autotoc_md610", null ],
                [ "dev", "v3_4_0.html#autotoc_md617", null ]
              ] ],
              [ "Devices", "v3_4_0.html#autotoc_md618", null ],
              [ "Tools", "v3_4_0.html#autotoc_md619", null ]
            ] ],
            [ "New Features", "v3_4_0.html#autotoc_md621", [
              [ "Build System", "v3_4_0.html#autotoc_md622", null ],
              [ "Libraries", "v3_4_0.html#autotoc_md625", [
                [ "conf", "v3_4_0.html#autotoc_md626", null ],
                [ "os", "v3_4_0.html#autotoc_md627", null ],
                [ "sig", "v3_4_0.html#autotoc_md635", null ],
                [ "math", "v3_4_0.html#autotoc_md638", null ],
                [ "dev", "v3_4_0.html#autotoc_md639", null ],
                [ "logger", "v3_4_0.html#autotoc_md640", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md641", null ],
              [ "Devices", "v3_4_0.html#autotoc_md642", null ],
              [ "Tools", "v3_4_0.html#autotoc_md657", null ],
              [ "GUIs", "v3_4_0.html#autotoc_md660", null ],
              [ "Bindings", "v3_4_0.html#autotoc_md666", null ]
            ] ],
            [ "New Experimental Features", "v3_4_0.html#autotoc_md667", [
              [ "Libraries", "v3_4_0.html#autotoc_md668", [
                [ "os", "v3_4_0.html#autotoc_md669", null ],
                [ "robotinterface", "v3_4_0.html#autotoc_md670", null ]
              ] ],
              [ "Carriers", "v3_4_0.html#autotoc_md671", null ],
              [ "Devices", "v3_4_0.html#autotoc_md672", null ]
            ] ],
            [ "Bug Fixes", "v3_4_0.html#autotoc_md673", [
              [ "Libraries", "v3_4_0.html#autotoc_md674", [
                [ "os", "v3_4_0.html#autotoc_md675", null ],
                [ "sig", "v3_4_0.html#autotoc_md677", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_4_0.html#autotoc_md679", null ]
          ] ]
        ] ],
        [ "YARP 3.3.3 (2020-07-20)", "v3_3_3.html", [
          [ "YARP 3.3.3 Release Notes", "v3_3_3.html#autotoc_md586", [
            [ "Bug Fixes", "v3_3_3.html#autotoc_md587", [
              [ "Build System", "v3_3_3.html#autotoc_md588", null ],
              [ "Libraries", "v3_3_3.html#autotoc_md589", [
                [ "os", "v3_3_3.html#autotoc_md590", null ],
                [ "dev", "v3_3_3.html#autotoc_md594", null ]
              ] ],
              [ "Devices", "v3_3_3.html#autotoc_md595", null ],
              [ "GUIs", "v3_3_3.html#autotoc_md602", null ]
            ] ],
            [ "Contributors", "v3_3_3.html#autotoc_md604", null ]
          ] ]
        ] ],
        [ "YARP 3.3.2 (2020-02-19)", "v3_3_2.html", [
          [ "YARP 3.3.2 Release Notes", "v3_3_2.html#autotoc_md579", [
            [ "Contributors", "v3_3_2.html#autotoc_md585", null ]
          ] ]
        ] ],
        [ "YARP 3.3.1 (2020-01-17)", "v3_3_1.html", [
          [ "YARP 3.3.1 Release Notes", "v3_3_1.html#autotoc_md566", [
            [ "Important Changes", "v3_3_1.html#autotoc_md567", [
              [ "Dependencies", "v3_3_1.html#autotoc_md568", null ]
            ] ],
            [ "Bug Fixes", "v3_3_1.html#autotoc_md569", [
              [ "Libraries", "v3_3_1.html#autotoc_md570", [
                [ "YARP_dev", "v3_3_1.html#autotoc_md571", null ]
              ] ],
              [ "Devices", "v3_3_1.html#autotoc_md572", [
                [ "grabberDual", "v3_3_1.html#autotoc_md573", null ]
              ] ],
              [ "Tools", "v3_3_1.html#autotoc_md574", [
                [ "yarpdataplayer", "v3_3_1.html#autotoc_md575", null ]
              ] ],
              [ "Bindings", "v3_3_1.html#autotoc_md576", [
                [ "Perl", "v3_3_1.html#autotoc_md577", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_1.html#autotoc_md578", null ]
          ] ]
        ] ],
        [ "YARP 3.3.0 (2019-12-05)", "v3_3_0.html", [
          [ "YARP 3.3.0 Release Notes", "v3_3_0.html#autotoc_md541", [
            [ "Important Changes", "v3_3_0.html#autotoc_md542", [
              [ "Dependencies", "v3_3_0.html#autotoc_md543", null ],
              [ "Build System", "v3_3_0.html#autotoc_md544", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md545", [
                [ "YARP_os", "v3_3_0.html#autotoc_md546", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md547", null ]
              ] ]
            ] ],
            [ "New Features", "v3_3_0.html#autotoc_md548", [
              [ "Build System", "v3_3_0.html#autotoc_md549", null ],
              [ "Libraries", "v3_3_0.html#autotoc_md550", [
                [ "YARP_conf", "v3_3_0.html#autotoc_md551", null ],
                [ "YARP_os", "v3_3_0.html#autotoc_md552", null ],
                [ "YARP_dev", "v3_3_0.html#autotoc_md553", null ],
                [ "YARP_run", "v3_3_0.html#autotoc_md554", null ]
              ] ],
              [ "Tools", "v3_3_0.html#autotoc_md555", null ],
              [ "GUIs", "v3_3_0.html#autotoc_md558", null ],
              [ "devices", "v3_3_0.html#autotoc_md560", [
                [ "multipleanalogsensorsclient", "v3_3_0.html#autotoc_md561", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_3_0.html#autotoc_md565", null ]
          ] ]
        ] ],
        [ "YARP 3.2.2 (2019-11-29)", "v3_2_2.html", [
          [ "YARP 3.2.2 Release Notes", "v3_2_2.html#autotoc_md532", [
            [ "Bug Fixes", "v3_2_2.html#autotoc_md533", [
              [ "Build System", "v3_2_2.html#autotoc_md534", null ],
              [ "Devices", "v3_2_2.html#autotoc_md535", null ],
              [ "Tools", "v3_2_2.html#autotoc_md538", null ]
            ] ],
            [ "Contributors", "v3_2_2.html#autotoc_md540", null ]
          ] ]
        ] ],
        [ "YARP 3.2.1 (2019-09-25)", "v3_2_1.html", [
          [ "YARP 3.2.1 Release Notes", "v3_2_1.html#autotoc_md519", [
            [ "Bug Fixes", "v3_2_1.html#autotoc_md520", [
              [ "Carriers", "v3_2_1.html#autotoc_md521", null ],
              [ "Devices", "v3_2_1.html#autotoc_md523", null ],
              [ "Tools", "v3_2_1.html#autotoc_md525", null ],
              [ "GUIs", "v3_2_1.html#autotoc_md528", null ]
            ] ],
            [ "Contributors", "v3_2_1.html#autotoc_md531", null ]
          ] ]
        ] ],
        [ "YARP 3.2.0 (2019-06-27)", "v3_2_0.html", [
          [ "YARP 3.2.0 Release Notes", "v3_2_0.html#autotoc_md509", [
            [ "Important Changes", "v3_2_0.html#autotoc_md510", [
              [ "Dependencies", "v3_2_0.html#autotoc_md511", null ],
              [ "Bindings", "v3_2_0.html#autotoc_md512", null ],
              [ "Devices", "v3_2_0.html#autotoc_md513", null ]
            ] ],
            [ "New Features", "v3_2_0.html#autotoc_md514", [
              [ "Build System", "v3_2_0.html#autotoc_md515", null ],
              [ "Libraries", "v3_2_0.html#autotoc_md516", [
                [ "YARP_conf", "v3_2_0.html#autotoc_md517", null ],
                [ "YARP_OS", "v3_2_0.html#autotoc_md518", null ]
              ] ]
            ] ]
          ] ]
        ] ],
        [ "YARP 3.1.2 (2019-06-03)", "v3_1_2.html", [
          [ "YARP 3.1.2 Release Notes", "v3_1_2.html#autotoc_md501", [
            [ "Bug Fixes", "v3_1_2.html#autotoc_md502", [
              [ "CMake", "v3_1_2.html#autotoc_md503", null ],
              [ "Libraries", "v3_1_2.html#autotoc_md504", [
                [ "<tt>YARP_dev</tt>", "v3_1_2.html#autotoc_md505", null ]
              ] ],
              [ "Devices", "v3_1_2.html#autotoc_md506", [
                [ "<tt>realsense2</tt>", "v3_1_2.html#autotoc_md507", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_2.html#autotoc_md508", null ]
          ] ]
        ] ],
        [ "YARP 3.1.1 (2019-04-18)", "v3_1_1.html", [
          [ "YARP 3.1.1 Release Notes", "v3_1_1.html#autotoc_md479", [
            [ "New Features", "v3_1_1.html#autotoc_md480", [
              [ "Build System", "v3_1_1.html#autotoc_md481", null ]
            ] ],
            [ "Bug Fixes", "v3_1_1.html#autotoc_md482", [
              [ "CMake Modules", "v3_1_1.html#autotoc_md483", [
                [ "<tt>YarpInstallationHelpers</tt>", "v3_1_1.html#autotoc_md484", null ]
              ] ],
              [ "Libraries", "v3_1_1.html#autotoc_md485", [
                [ "<tt>YARP_OS</tt>", "v3_1_1.html#autotoc_md486", null ],
                [ "<tt>YARP_dev</tt>", "v3_1_1.html#autotoc_md487", null ],
                [ "<tt>YARP_companion</tt>", "v3_1_1.html#autotoc_md488", null ],
                [ "<tt>YARP_sig</tt>", "v3_1_1.html#autotoc_md489", null ]
              ] ],
              [ "Tools", "v3_1_1.html#autotoc_md490", [
                [ "yarpidl_thrift", "v3_1_1.html#autotoc_md491", null ]
              ] ],
              [ "Bindings", "v3_1_1.html#autotoc_md492", null ],
              [ "GUIs", "v3_1_1.html#autotoc_md493", [
                [ "<tt>yarpdataplayer</tt>", "v3_1_1.html#autotoc_md494", null ]
              ] ],
              [ "Devices", "v3_1_1.html#autotoc_md495", [
                [ "<tt>RemoteControlBoard</tt>", "v3_1_1.html#autotoc_md496", null ],
                [ "<tt>realsense2</tt>", "v3_1_1.html#autotoc_md497", null ],
                [ "<tt>ffmpeg</tt>", "v3_1_1.html#autotoc_md498", null ],
                [ "<tt>imuBosch_BNO055</tt>", "v3_1_1.html#autotoc_md499", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_1.html#autotoc_md500", null ]
          ] ]
        ] ],
        [ "YARP 3.1.0 (2018-07-31)", "v3_1_0.html", [
          [ "YARP 3.1.0 Release Notes", "v3_1_0.html#autotoc_md464", [
            [ "New Features", "v3_1_0.html#autotoc_md465", [
              [ "Libraries", "v3_1_0.html#autotoc_md466", [
                [ "YARP_OS", "v3_1_0.html#autotoc_md467", null ],
                [ "YARP_DEV", "v3_1_0.html#autotoc_md468", null ],
                [ "YARP_sig", "v3_1_0.html#autotoc_md469", null ]
              ] ],
              [ "Devices", "v3_1_0.html#autotoc_md470", [
                [ "imuBosch_BNO055", "v3_1_0.html#autotoc_md471", null ],
                [ "yarp_test_grabber", "v3_1_0.html#autotoc_md472", null ]
              ] ],
              [ "Tools", "v3_1_0.html#autotoc_md473", [
                [ "yarp", "v3_1_0.html#autotoc_md474", null ]
              ] ],
              [ "Bindings", "v3_1_0.html#autotoc_md475", [
                [ "IInteractionMode interface bindings", "v3_1_0.html#autotoc_md476", null ],
                [ "Multiple Analog Sensors interfaces bindings", "v3_1_0.html#autotoc_md477", null ]
              ] ]
            ] ],
            [ "Contributors", "v3_1_0.html#autotoc_md478", null ]
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
        [ "Code Style", "contributing.html#autotoc_md1090", [
          [ "C++", "contributing.html#autotoc_md1091", [
            [ "Header guards", "contributing.html#autotoc_md1092", null ]
          ] ],
          [ "CMake", "contributing.html#autotoc_md1093", null ],
          [ "Git", "contributing.html#autotoc_md1094", null ]
        ] ],
        [ "Workflow", "contributing.html#autotoc_md1095", [
          [ "Stable branches: yarp-3.x", "contributing.html#autotoc_md1096", null ],
          [ "Development branch: master", "contributing.html#autotoc_md1098", null ],
          [ "Example", "contributing.html#autotoc_md1099", null ],
          [ "Terminology", "contributing.html#autotoc_md1100", null ]
        ] ],
        [ "Policies", "contributing.html#autotoc_md1101", [
          [ "Deprecated Features", "contributing.html#autotoc_md1102", null ],
          [ "Impl Classes", "contributing.html#autotoc_md1103", null ],
          [ "Supported Systems", "contributing.html#autotoc_md1104", null ]
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
"Image_8copyPixels_8cpp.html#a305cf32116ddef99db707bfe1a6ae541",
"ImplementImpedanceControl_8cpp.html#a795ff6aae566d5a5dd03e5c478f5b11e",
"Lidar2DDeviceBase_8h_source.html",
"Map2D__nwc__yarp_8h.html",
"MonitorLua_8h.html",
"NetType_8h.html",
"PlatformStdlib_8h_source.html",
"PortReaderCreator_8h_source.html",
"Rangefinder2D__nws__yarp__ParamsParser_8cpp.html",
"SDLJoypad_8h_source.html",
"SpeechTranscription__nws__yarp__ParamsParser_8cpp_source.html",
"USBcameraLogComponent_8cpp_source.html",
"application_8h.html#aa8f6e86176500f3d3feda73ae704260c",
"classAudioFromFileDevice.html#a2b42b7239441029fb20e79d60e0f8154",
"classBattery__nwc__yarp__ParamsParser.html#a7628881970f7c5a336fc50d8e7d826fe",
"classChatBot__nwc__yarp__ParamsParser.html#aeb92267b100214138cdde0b835e96602",
"classControlBoardRemapper.html#ae15e2d1c9568a3e662188f3961c41c69",
"classDynamixelAX12FtdiDriver.html#a26ba921ec4b17e915e64469ced6fbaf1",
"classFakeBatteryService__getBatteryCharge__helper_1_1Command.html#ad6533bb7e81985be1520dd4eeedb5210",
"classFakeBatteryService__setBatteryCurrent__helper.html#a80b031078bcc3645921908caf0cea5ed",
"classFakeBot.html#a7500595bbae64ebba706aaaae3e55325",
"classFakeFrameGrabber.html#a2880d33c7671b87bb93408c70e964514",
"classFakeJoypad.html#afbde5295e5dde731bca4ce6fec09b975",
"classFakeLaserWithMotor.html#aa404661cf90121e03f7dd91594410a1e",
"classFakeMotionControl.html#a1b00f0902f6b9e219eb44c39748162d6",
"classFakeMotionControl.html#abb7c5105bb65995088cd31a0d9a397be",
"classFakeNavigation.html#a343664174e45052f625152861f7afaa8",
"classFakeSpeaker.html#a5d6621d809c0eb25f025670f26bff271",
"classFfmpegWriter.html#a15aa0c5ee459c3a49d3bc0ce6d848387",
"classFrameGrabber__nws__ros2.html#a7ca328c9f74f6519fc105b59236bf909",
"classFrameTransformSetMultiplexer.html#a3bb6a4a0b4496384c770672b79ac37d0",
"classFrameTransformStorageSetRPC__setTransformsRPC__helper.html#a098a7800d2da4c1150532e8af0a3f67f",
"classGoogleSpeechTranscription__ParamsParser.html",
"classIAudioGrabberMsgs__isRecording__RPC__helper.html#a1179f024e44f0659cdc6231eddc15a3c",
"classIChatBotMsgs__getLanguageRPC__helper_1_1Command.html#a8bb82441009ba737333b727ddaec7498",
"classILocalization2DMsgs__get__current__position2__RPC__helper_1_1Reply.html#a2894e5c25cc7b08e3c05a85f932b0741",
"classILocalization2DRPCd.html#a5b5d9cdf80aab95fb3d3830f548ca416",
"classIMap2DMsgs__clear__map__temporary__flags__RPC__helper_1_1Reply.html#a55db8b0f2cf7e782ec64574984f17dd1",
"classIMap2DMsgs__get__area__RPC__helper.html#a112ac339f9626da1f2cb301ed8f6c6ba",
"classIMap2DMsgs__get__paths__list__RPC__helper.html#ad62f155143bcefe3456b030c1b69d751",
"classIMap2DMsgs__rename__path__RPC__helper.html#a6602354f8caab5a01bf4043872a39d5f",
"classIMap2DMsgs__store__path__RPC__helper.html#a0cd1449082665299e5acc6824abd48bf",
"classINavigation2DMsgs__get__current__nav__waypoint__RPC__helper.html#aafb4a365cf9d8491f945dc0545c67daa",
"classINavigation2DMsgs__goto__target__by__absolute__location__and__set__name__RPC__helper_1_1Command.html#a6c771eb4c8f1d0c1378c0aaf42bece96",
"classIOdometry2DMsgs__reset__odometry__RPC__helper.html#a308608c42b2f43eb1762048bd4a886e8",
"classIRangefinder2DMsgs__setDistanceRange__RPC__helper.html#a85d88ba5b618299e0805eff91dc8a421",
"classISpeechSynthesizerMsgs__get__language__helper.html#a0db7dd62f8a6c7171491891d22f959b0",
"classISpeechSynthesizerMsgs__set__voice__helper.html#ac0ebf05c31978dfe946235ff87582fd4",
"classImu__nwc__ros2.html#a7e35fed126f9eec4a1e82508d83195fb",
"classLaserFromExternalPort.html#af2a076829278fa23e0681983cbe62814",
"classLocalization2D__nws__yarp.html#a821b911581bc8ee00bb9905da8a8994c",
"classMap2D__nws__ros.html#a83e101d6df3c295eccb97545c4fb385b",
"classMobileBaseVelocityControlRPC__getLastVelocityCommandRPC__helper_1_1Command.html#aef3c1823ff1cc2cf54344343fd950800",
"classMpiCarrier.html#af3f33199826d9861a8e9b5429b79b2bd",
"classMultipleAnalogSensorsRemapper.html#abc3eb9edf96c5cd137353b9c89afd754",
"classNavigation2D__nws__yarp__ParamsParser.html#a374968e33cbf7fa1a10d354b22019be9",
"classOpenCVGrabber__ParamsParser.html#ae27ef5aca0ff1effb6a1e8b5eca18521",
"classPriorityCarrier.html#a78ba11dbfd0e9212c87ae49c43527eac",
"classRGBDSensorFromRosTopic.html#ac6815b6545238ea28f904017c8c41841",
"classRangefinder2D__nwc__yarp.html#afa3ba4de1c183dc43a3f41d6f496fac5",
"classRemoteControlBoard.html#a584fcdd439ee7dd717b0ebeb631f6c73",
"classResourceFinder_1_1Private.html#ae253b2b311e128fe866610ae59d691d7",
"classRobotDescriptionServer__ParamsParser.html#ac24cf88cd8cf1489087d217c0028ce51",
"classSensorMeasurements.html#a668d2d1c4e804ef589bc626d451bd4e0",
"classShmemInputStreamImpl.html#afa8049a7e613730dab7267e8b9bde6ca",
"classTextureBattery.html#a6324394e227867f717f5e8f62169b605aded951e4886e83ec2acbdfea1fb0d3d5",
"classUnixSockTwoWayStream.html#adebbaf64f763c68c63a9a30a25f18437",
"classZfpMonitorObject.html#a64530c832ea772c51fe0062204a22f89",
"classrealsense2Driver.html#a42bac92e82fb1601785f1e382ab98527",
"classreturn__getRecordingAudioBufferMaxSize.html#a5e399d5d32441ce321ad4dfe7b583d06",
"classreturn__get__locations__list.html",
"classstreamFrameListener.html#abd9ed8e33de9f9d902791c3001a36d60",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a3c165d19bc76f28e5115fdd13dd0b6d7",
"classyarp_1_1dev_1_1DriverCreator.html#ac0f5f3095430f8af9d720a246d34116c",
"classyarp_1_1dev_1_1IContactLoadCellArrays.html",
"classyarp_1_1dev_1_1IGPUDevice.html#a0cf6224ad755260c10d5b519f07117f3",
"classyarp_1_1dev_1_1IJoypadEventDriven.html#ad318b12d47d0297835052b94447e97d4",
"classyarp_1_1dev_1_1IPositionSensors.html#a4bf3e82262a5ecf01ff4869a30068da7",
"classyarp_1_1dev_1_1IVelocityControlRaw.html#a8b7c4ae399373c7d8475237b5be5b465",
"classyarp_1_1dev_1_1ImplementEncoders.html#a80afbb3b74493cad6559535a31ce4c35",
"classyarp_1_1dev_1_1ImplementPWMControl.html#aa4260858672a4761f1b9740240c8493c",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#a0e01f44f2afb0ef0956b096310d3ed7e",
"classyarp_1_1dev_1_1Map2DPathData.html#ac75661a14663eee0bfc0c31055c67c00",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#a212bfa50b26abffb595071034ccd77c8",
"classyarp_1_1dev_1_1OdometryData6D.html#aeee899b99d183664616ae6042b2b4073",
"classyarp_1_1dev_1_1StubImplEncodersRaw.html#ac83602ac9d3609012b8c777466fc269f",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs.html#a771a780b2503a901135c0ec47c8937c6",
"classyarp_1_1dev_1_1llm_1_1ILLMMsgs__readPrompt__helper_1_1Command.html#a295f020f7a65bf5051a3df062770b7be",
"classyarp_1_1gsl_1_1GslVector.html",
"classyarp_1_1manager_1_1BinaryExpParser.html#aad9cb7fb2c4877d12ae442fafd382ad9",
"classyarp_1_1manager_1_1Connection.html#ae063b99c0818f895e0a8815526f59911",
"classyarp_1_1manager_1_1GPU.html#a7e4d96b4d1df594abde0594514275db2",
"classyarp_1_1manager_1_1KnowledgeBase.html#a9379b3d27dd4bba5c38da34a33049a8f",
"classyarp_1_1manager_1_1Manager.html#aa0b27c6b71c2b98d6b44eb13d2d3b30d",
"classyarp_1_1manager_1_1ModuleInterface.html#a688975541101372af52bb6eb4db9ae16",
"classyarp_1_1manager_1_1Ready.html",
"classyarp_1_1manager_1_1XmlResLoader.html#a4ebc840ae790dd7a2a68a34dfed18271",
"classyarp_1_1math_1_1RandScalar.html#a99de7b983a41ee3fda70259c18704768",
"classyarp_1_1os_1_1AbstractCarrier.html#adfc96a98ef5c382c84937dc6cbf49b54",
"classyarp_1_1os_1_1Carrier.html#a53cf1b392dbc454b9a5aa53d887d7757",
"classyarp_1_1os_1_1ConnectionState.html",
"classyarp_1_1os_1_1ElectionOf.html#aa9c7b41759112c7ec982192887eb3307",
"classyarp_1_1os_1_1LogComponent.html#a30c565b52185fd1d7a89d8fcb8673e33",
"classyarp_1_1os_1_1NameSpace.html#a1cd8be4810d3499b8702ed0aa6204555",
"classyarp_1_1os_1_1Node_1_1Helper.html#abc3ec61efa33d62f7420eee698ba32c3",
"classyarp_1_1os_1_1NullStream.html#a5279f94cf7fe4fe08bbd78bbabf4d61c",
"classyarp_1_1os_1_1PortReaderBuffer.html#a3df05c6339b3ff0fa494dbd199936bf8",
"classyarp_1_1os_1_1QosStyle.html#a18c75b3e75daf971d0bba7213f8c4250a0737b52c332ac65539ab2292bef3509a",
"classyarp_1_1os_1_1ResourceFinderOptions.html#ac225c58c5c6b01194e9982b426d382eca85172aec4bca4bbba5f9bb359bb0f54f",
"classyarp_1_1os_1_1SharedLibraryFactory.html#aa4231a9ea34908978d20a7003ae39e68",
"classyarp_1_1os_1_1Terminee.html#a38f0080b3ba1321622b3e4c24390ac11",
"classyarp_1_1os_1_1UnbufferedContactable.html#af6e907dc28bcb3de5f8cbfc8796317b5",
"classyarp_1_1os_1_1YarpPlugin.html#ab3ee28d3fe8c4a42897719d4a3244e75",
"classyarp_1_1os_1_1idl_1_1WireWriter.html#a2e8ebbdc8ca8f9bcbb597700c876da04",
"classyarp_1_1os_1_1impl_1_1BufferedConnectionWriter.html#ad6dd689e3f2bc084c9d3bbc6efc10e14",
"classyarp_1_1os_1_1impl_1_1FallbackNameServer.html#a113a08769afa1e8cfbb001a1a6820942",
"classyarp_1_1os_1_1impl_1_1LogPrivate.html#ac33bf292d3443b9c1ad03b842c7a8058",
"classyarp_1_1os_1_1impl_1_1NameserTwoWayStream.html#a2a0d87a8d720699550bdee51e4fe4f82",
"classyarp_1_1os_1_1impl_1_1PortCoreInputUnit.html#a39cb2af83a51d071d03fd07b2b1ca72a",
"classyarp_1_1os_1_1impl_1_1RFModuleFactory.html#ac93ee781720029b9ea3c0c60e81e2516",
"classyarp_1_1os_1_1impl_1_1StoreFloat32.html#ad02f140e91edfa88071fe299428ea4ee",
"classyarp_1_1os_1_1impl_1_1StoreNull.html#a6a406cade5063a2cc7d2cdb9126ec471",
"classyarp_1_1os_1_1impl_1_1ThreadImpl.html#a34b0c266987bb6afe6be1af62729f1d5",
"classyarp_1_1profiler_1_1graph_1_1Graph.html#ad681678f8c4211d36b3308317613bbc1",
"classyarp_1_1proto_1_1framegrabber_1_1RgbVisualParams__Forwarder.html#a2129a77871cc9c70f904aa53848e317a",
"classyarp_1_1robotinterface_1_1Robot.html#a9f030288ef222c3e8e5c1fd84094ceed",
"classyarp_1_1robotinterface_1_1impl_1_1XMLReaderFileV1_1_1Private.html#a56d6888eece9a06d3d48e0305f2d9834",
"classyarp_1_1serversql_1_1impl_1_1AllocatorOnTriples.html#a19d32fed887ca917422db69a22bf5a47",
"classyarp_1_1serversql_1_1impl_1_1SubscriberOnSql.html#aba159c94a92f00cef11f7c871e96fd81",
"classyarp_1_1sig_1_1ImageNetworkHeader.html#abb20c15c3b7e6d615929dd5d9b527e58",
"classyarp_1_1sig_1_1PointCloudNetworkHeader.html",
"classyarp_1_1yarpLogger_1_1LoggerEngine.html#a09df137da91e08d6334c3bbb756fad87",
"dependencies.html#dependencies_qt5_Linux",
"dir_7cb7ab79d6f54d764176e0c008ddbe76.html",
"dir_fbc891b4175aa38b29865153c9ebd674.html",
"functions_c.html",
"group__dev__impl__fake.html",
"joypadControlServer__test_8cpp.html#ab9ea667768ecaf218983ddfd940e5c7c",
"logicresource_8cpp_source.html",
"namespaceyarp_1_1conf_1_1string.html",
"namespaceyarp_1_1manager.html#ae4250028284f5fcacef91b424252e333",
"namespaceyarp_1_1sig.html#a9295f5441020fdd11c4f260b91c234d6a57e8f8bd099f154c12dc1ca0941d3f31",
"port_expert.html#port_expert_callbacks",
"return__get__estimated__odometry_8h_source.html",
"rpLidar_8h.html#a6b206b98a579408c6ba4d6bc7b1eca4e",
"structImpedanceParameters.html#a13e265f7d9be8152ee1700fd90157035",
"structTextureStatic_1_1Image.html#af30bee2b27cf3a14ca8def983e5c624b",
"structyarp_1_1cv_1_1convert__code__to__cv_3_01yarp_1_1sig_1_1PixelRgbInt_01_4.html",
"structyarp_1_1os_1_1SystemInfo_1_1LoadInfo.html#a4b564164a8bc7a8c22fc74d83dfbbe05",
"structyarp_1_1sig_1_1DataXY.html#a294ddc69031362299546096ee5071e06",
"swigluarun_8h.html#a074a06d2b9778b1784b0c03e6898a777",
"thrift_tutorial.html#thrift_tutorial_intro",
"v2_3_70.html#autotoc_md223",
"v3_1_1.html#autotoc_md479",
"v3_5_0.html#autotoc_md829",
"version_8h.html#a2eae18d780996be7f1e16176e0535baf",
"yarp_3_11.html#autotoc_md454",
"zfpPortmonitor_8cpp.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';