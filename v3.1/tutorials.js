var tutorials =
[
    [ "Compiling a YARP hello world program", "yarp_cmake_hello.html", null ],
    [ "Port Power, Going Further with Ports", "port_expert.html", [
      [ "Streaming messages", "port_expert.html#port_expert_basic", null ],
      [ "Decoupling sender/receiver timing", "port_expert.html#port_expert_timing", null ],
      [ "Polling ports", "port_expert.html#port_expert_polling", null ],
      [ "Getting a callback", "port_expert.html#port_expert_callbacks", null ],
      [ "Getting replies", "port_expert.html#port_expert_reply", null ],
      [ "Datatypes", "port_expert.html#port_expert_data", null ],
      [ "Carriers", "port_expert.html#port_expert_carriers", null ]
    ] ],
    [ "Configuring YARP Connections", "carrier_config.html", [
      [ "tcp carrier", "carrier_config.html#carrier_config_tcp", null ],
      [ "udp carrier", "carrier_config.html#carrier_config_udp", null ],
      [ "mcast (multicast) carrier", "carrier_config.html#carrier_config_mcast", null ],
      [ "shmem (shared memory) carrier", "carrier_config.html#carrier_config_shmem", null ],
      [ "local (within-process) carrier", "carrier_config.html#carrier_config_local", null ],
      [ "text (text-mode across tcp) carrier", "carrier_config.html#carrier_config_text", null ],
      [ "text_ack (text-mode across tcp with acknowledgement) carrier", "carrier_config.html#carrier_config_text_ack", null ],
      [ "fast_tcp (tcp without acknowledgement) carrier", "carrier_config.html#carrier_config_fast_tcp", null ],
      [ "http carrier", "carrier_config.html#carrier_config_http", null ],
      [ "mjpeg (mjpeg-over-http) carrier", "carrier_config.html#carrier_config_mjpeg", null ],
      [ "xmlrpc carrier", "carrier_config.html#carrier_config_xmlrpc", null ],
      [ "tcpros carrier", "carrier_config.html#carrier_config_tcpros", null ],
      [ "bayer carrier", "carrier_config.html#carrier_config_bayer", null ]
    ] ],
    [ "Creating carriers for new kinds of connections", "carrier_expert.html", [
      [ "The steps", "carrier_expert.html#carrier_expert_strategy", null ],
      [ "Coding preliminaries", "carrier_expert.html#carrier_expert_preliminaries", null ],
      [ "Important classes", "carrier_expert.html#carrier_expert_classes", null ],
      [ "The basics", "carrier_expert.html#carrier_expert_basics", null ],
      [ "A first example", "carrier_expert.html#carrier_expert_example", null ],
      [ "Customizing behavior", "carrier_expert.html#carrier_expert_custom", null ],
      [ "The header and header reply phase", "carrier_expert.html#carrier_expert_header_phase", null ],
      [ "The index, payload, and ack stage", "carrier_expert.html#carrier_expert_payload_phase", null ],
      [ "An important detail: packets", "carrier_expert.html#carrier_expert_packets", null ],
      [ "A complete example", "carrier_expert.html#carrier_export_complete", null ]
    ] ],
    [ "Specialized RPC ports", "rpc_ports.html", [
      [ "RPC using regular YARP ports", "rpc_ports.html#rpc_ports_basics", null ],
      [ "RPC using specialized YARP ports", "rpc_ports.html#rpc_ports_special", null ],
      [ "Monitoring RPC communication", "rpc_ports.html#rpc_ports_sniffing", null ]
    ] ],
    [ "YARP without YARP", "yarp_without_yarp.html", [
      [ "Test scenario", "yarp_without_yarp.html#yarp_without_yarp_test", null ],
      [ "Talking to a Port", "yarp_without_yarp.html#yarp_without_yarp_begin", null ],
      [ "Talking to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_owner", null ],
      [ "Writing commands from code", "yarp_without_yarp.html#yarp_without_yarp_python_rpc", null ],
      [ "Listening to a Port's owner", "yarp_without_yarp.html#yarp_without_yarp_listening", null ],
      [ "Talking to the name server", "yarp_without_yarp.html#yarp_without_yarp_name", null ],
      [ "Binary messages", "yarp_without_yarp.html#yarp_without_yarp_binary", null ]
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
    [ "Using YARP without a name server", "yarp_without_nameserver.html", null ],
    [ "Using YARP with ROS", "yarp_with_ros.html", "yarp_with_ros" ],
    [ "YARP ports from your browser", "yarp_http.html", [
      [ "Index page", "yarp_http.html#yarp_http_index", null ],
      [ "Sending data", "yarp_http.html#yarp_http_data", null ],
      [ "Receiving (low-bandwidth) data", "yarp_http.html#yarp_http_recv", null ],
      [ "Viewing images in a browser", "yarp_http.html#yarp_http_recv_images", null ],
      [ "Custom content", "yarp_http.html#yarp_http_custom", null ]
    ] ],
    [ "Using IDLs", "idls.html", "idls" ],
    [ "Buffering Policies in YARP", "yarp_buffering.html", "yarp_buffering" ],
    [ "ResourceFinder Tutorials and Specification", "yarp_resource_finder_tutorials.html", "yarp_resource_finder_tutorials" ],
    [ "The RFModule Class", "yarp_rfmodule_tutorial.html", null ],
    [ "yarpdev: the standard YARP device utility", "yarpdev.html", [
      [ "yarpdev", "yarpdev.html#yarpdev_base", null ],
      [ "yarpdev –list", "yarpdev.html#yarpdev_list", null ],
      [ "yarpdev –device DEVICENAME –OPTION1 VALUE1 ...", "yarpdev.html#yarpdev_normal", null ],
      [ "yarpdev –verbose –device DEVICENAME  ...", "yarpdev.html#yarpdev_verbose", null ],
      [ "Detailed parameters description", "yarpdev.html#devices_parameters", null ]
    ] ],
    [ "The YARP motor control interfaces", "yarp_motor_control.html", [
      [ "Motor control.", "yarp_motor_control.html#yarp_motorcontrol_base", null ]
    ] ],
    [ "Add a plugin to YARP", "add_a_plugin.html", [
      [ "Making a single plugin", "add_a_plugin.html#add_a_plugin_single", null ],
      [ "Making a plugin library", "add_a_plugin.html#add_a_plugin_userlib", null ],
      [ "Adding a plugin into YARP", "add_a_plugin.html#add_a_plugin_in_yarp", null ]
    ] ],
    [ "YARP config files", "yarp_config_files.html", [
      [ "A minimal config file", "yarp_config_files.html#yarp_config_file_basics", null ],
      [ "Accessing the minimal config file from code", "yarp_config_files.html#yarp_config_file_reading", null ],
      [ "A config file with sections", "yarp_config_files.html#yarp_config_file_add_section", null ],
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
      [ "Command line configuration switches", "yarp_config_files.html#yarp_config_command", null ]
    ] ],
    [ "YARP PointCloud", "yarp_pointcloud.html", [
      [ "What is a PointCloud?", "yarp_pointcloud.html#what_is_a_pointcloud", null ],
      [ "Write and read PointCloud to/from ports", "yarp_pointcloud.html#read_and_write_point_cloud", null ],
      [ "PointCloud initialization", "yarp_pointcloud.html#general_usage_point_cloud", null ],
      [ "PCL compatibility", "yarp_pointcloud.html#pcl_compatibility", null ],
      [ "Saving/Loading PCDs", "yarp_pointcloud.html#yarp_pcd", null ]
    ] ],
    [ "Some examples", "yarp_code_examples.html", [
      [ "Buffered port example", "yarp_code_examples.html#yarp_code_example_buffer", null ]
    ] ],
    [ "Handling NVIDIA GPUs with YARP", "gpu_tutorial.html", [
      [ "Introduction", "gpu_tutorial.html#gpu_tutorial_introduction", null ],
      [ "Example: YARP application", "gpu_tutorial.html#gpu_tutorial_yarpcode", null ],
      [ "Example: GPU program", "gpu_tutorial.html#gpu_tutorial_cubin", null ]
    ] ],
    [ "Using CMake", "using_cmake.html", [
      [ "Hello World Example", "using_cmake.html#using_cmake_basic", null ],
      [ "Out-of-source Builds", "using_cmake.html#using_cmake_outofsource", null ],
      [ "Building a library", "using_cmake.html#using_cmake_library", null ],
      [ "Building a library and program separately", "using_cmake.html#using_cmake_split", null ]
    ] ],
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
    [ "The name server protocol", "name_server.html", [
      [ "The name server is just another Port", "name_server.html#name_server_port", null ],
      [ "What the name server stores", "name_server.html#name_server_content", null ],
      [ "query", "name_server.html#protocol_name_query", null ],
      [ "register", "name_server.html#protocol_name_register", null ],
      [ "unregister", "name_server.html#protocol_name_unregister", null ],
      [ "list", "name_server.html#protocol_name_list", null ],
      [ "set", "name_server.html#protocol_name_set", null ],
      [ "get", "name_server.html#protocol_name_get", null ],
      [ "check", "name_server.html#protocol_name_check", null ],
      [ "route", "name_server.html#protocol_name_route", null ],
      [ "bot query", "name_server.html#protocol_name_bot_query", null ],
      [ "bot list", "name_server.html#protocol_name_bot_list", null ],
      [ "Finding the name server", "name_server.html#name_server_discovery", null ],
      [ "Name server namespaces", "name_server.html#name_server_namespaces", null ],
      [ "An older name server protocol", "name_server.html#name_server_history", null ]
    ] ],
    [ "A trip through the guts of YARP", "yarp_guts.html", [
      [ "Behind the facade", "yarp_guts.html#yarp_guts_facade", null ],
      [ "Summary of important implementation classes", "yarp_guts.html#yarp_guts_summary", null ],
      [ "Port creation", "yarp_guts.html#yarp_guts_create", null ],
      [ "Connection creation", "yarp_guts.html#yarp_guts_connect", null ],
      [ "Multicast elections", "yarp_guts.html#yarp_guts_mcast", null ]
    ] ],
    [ "Ways to compile YARP plugins", "yarp_plugins.html", [
      [ "Warning to YARP users", "yarp_plugins.html#yarp_plugins_warning", null ],
      [ "The basics", "yarp_plugins.html#yarp_plugins_basics", null ],
      [ "Listing plugins available at runtime", "yarp_plugins.html#yarp_plugins_listing", null ],
      [ "Plugin configuration files", "yarp_plugins.html#yarp_plugins_config", null ],
      [ "Finding library files", "yarp_plugins.html#yarp_plugins_library", null ]
    ] ]
];