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
    [ "Other Pages", "usergroup0.html", [
      [ "zfp_portmonitor plugin", "md_src_carriers_zfp_portmonitor_README.html", [
        [ "Usage:", "md_src_carriers_zfp_portmonitor_README.html#autotoc_md6", null ]
      ] ],
      [ "How to add a device to YARP", "add_a_device.html", [
        [ "What is a device driver in YARP?", "add_a_device.html#dev2-howto-intro", null ],
        [ "Step by step instructions", "add_a_device.html#dev2-howto-steps", null ]
      ] ],
      [ "mpi carriers", "carrier_config_mpi.html", [
        [ "Using the MPI carriers", "carrier_config_mpi.html#carrier_config_mpi_usage", null ],
        [ "What is MPI?", "carrier_config_mpi.html#carrier_config_mpi_intro", null ],
        [ "Benefits of using MPI", "carrier_config_mpi.html#carrier_config_mpi_benefits", null ],
        [ "Sideeffects of using MPI", "carrier_config_mpi.html#carrier_config_mpi_sideeffects", null ],
        [ "Compiling YARP with MPI support", "carrier_config_mpi.html#carrier_config_mpi_compliation", null ],
        [ "Open source MPI implementations", "carrier_config_mpi.html#carrier_config_mpi_implementations", null ]
      ] ],
      [ "Using the YARP companion utility", "companion_use.html", [
        [ "YARP companion basics", "companion_use.html#companion_basics", null ],
        [ "YARP companion advanced", "companion_use.html#companion_advanced", null ]
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
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to YARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
      ] ],
      [ "User Manual", "manual.html", [
        [ "YARP User Manual", "manual.html#manual_intro", null ]
      ] ],
      [ "User Manual Title", "manual_title.html", null ],
      [ "Software for Humanoid Robots: The YARP Approach", "note_yarp_philosophy.html", [
        [ "One processor is never enough.", "note_yarp_philosophy.html#philosophy_many", null ],
        [ "Modularity.", "note_yarp_philosophy.html#philosophy_module", null ],
        [ "Minimal interference.", "note_yarp_philosophy.html#philosophy_interfere", null ],
        [ "Stopping hurts.", "note_yarp_philosophy.html#philosophy_stopping", null ],
        [ "Humility helps.", "note_yarp_philosophy.html#philosophy_humility", null ],
        [ "Exploit diversity.", "note_yarp_philosophy.html#philosophy_diversity", null ]
      ] ],
      [ "Using port monitors for arbitrating multiple connections", "arbitration.html", [
        [ "Description", "arbitration.html#arbitration_desc", null ],
        [ "Requirements", "arbitration.html#arbitration_req", null ],
        [ "Running the example", "arbitration.html#arbitration_running", null ],
        [ "Scripts", "arbitration.html#arbitration_scripts", [
          [ "ball_monitor.lua", "arbitration.html#arbitration_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration.html#arbitration_line_monitor", null ],
          [ "sel_monitor.lua", "arbitration.html#arbitration_sel_monitor", null ]
        ] ]
      ] ],
      [ "An example of using port arbitrator with time events", "arbitration_tevent.html", [
        [ "Description", "arbitration_tevent.html#arbitration_tevent_desc", null ],
        [ "Requirements", "arbitration_tevent.html#arbitration_tevent_req", null ],
        [ "Running the example", "arbitration_tevent.html#arbitration_tevent_running", null ],
        [ "Scripts", "arbitration_tevent.html#arbitration_tevent_scripts", [
          [ "ball_monitor.lua", "arbitration_tevent.html#arbitration_tevent_ball_monitor", null ],
          [ "line_monitor.lua", "arbitration_tevent.html#arbitration_tevent_line_monitor", null ]
        ] ]
      ] ],
      [ "An example of using the portmonitor object at the both sides of a connection to encode and decode data", "coder_decoder.html", [
        [ "Description", "coder_decoder.html#coder_decoder_desc", null ],
        [ "Requirements", "coder_decoder.html#coder_decoder_req", null ],
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ],
        [ "Scripts", "coder_decoder.html#coder_decoder_scripts", [
          [ "codec.lua", "coder_decoder.html#coder_decoder_codec", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ],
        [ "Scripts", "image_modification.html#image_modification_scripts", [
          [ "img_modifier.lua", "image_modification.html#image_modification_img_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", [
          [ "SimpleMonitorObject.h", "simple_dll.html#simple_dll_sample_h", null ],
          [ "SimpleMonitorObject.cpp", "simple_dll.html#simple_dll_sample_cpp", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ],
        [ "Scripts", "simple_modification.html#simple_modification_scripts", [
          [ "bot_modifier.lua", "simple_modification.html#simple_modification_bot_modifier", null ]
        ] ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ],
        [ "Scripts", "type_modification.html#type_modification_scripts", [
          [ "type_modifier.lua", "type_modification.html#type_modification_type_modifier", null ]
        ] ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP OS library", "yarp_os.html", "yarp_os" ],
      [ "LICENSE", "md__8github_git-workflow_LICENSE_8gitgraph.html", null ],
      [ "Deprecated List", "deprecated.html", null ],
      [ "Todo List", "todo.html", null ],
      [ "Modules", "modules.html", "modules" ]
    ] ],
    [ "API Documentation", "usergroup1.html", [
      [ "Namespace List", "namespaces.html", [
        [ "Namespace List", "namespaces.html", "namespaces_dup" ],
        [ "Namespace Members", "namespacemembers.html", [
          [ "All", "namespacemembers.html", "namespacemembers_dup" ],
          [ "Functions", "namespacemembers_func.html", null ],
          [ "Variables", "namespacemembers_vars.html", null ],
          [ "Typedefs", "namespacemembers_type.html", "namespacemembers_type" ],
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
          [ "Related Functions", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", "globals_vars" ],
          [ "Typedefs", "globals_type.html", "globals_type" ],
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
"ControlBoardVocabs_8h.html#acad51bd6c2e1e31df83e45be47ea3cd1",
"FrameGrabberInterfaces_8h.html#a5e19c75c2809d2f27eb33a29d1971b46a83bdbc9ece9ddf27be30880444dcaa09",
"IControlCalibration_8h.html#ae29530438bec45aef3b77b45d1ebcaec",
"IPreciselyTimed_8h.html",
"Image_8copyPixels_8cpp.html#a5fa54867bb4aaabbf1f8a4deefb6ef2e",
"InputStream_8h.html",
"Math_8h.html#ad013e179e9407489cece8e2dbb725fea",
"NetInt32_8cpp_source.html",
"PointCloudTypes_8h.html#ac143e7160c4dfde2e47ecf07f59e9716",
"RGBDSensorClient_8h_source.html",
"SerialDeviceDriver_8cpp_source.html",
"TestFrameGrabber_8h.html#acf3fbca3efe9d4371864d2f72ee9d062",
"actionlib__msgs_2GoalID_8h.html",
"classAnalogSensorClient.html#aa50b9040c03298b7d24528a4c05ffea7",
"classControlBoardArbitraryAxesDecomposition.html#a41f46e1b6a7e51dcf3c8eb671df7021a",
"classControlBoardWrapper.html#a3284d6af0633edb99df61735bf263263",
"classDrivers_1_1Private.html#aa9d5b0dfead70a96c3e26aec4b2daa21",
"classFakeLaser.html#ae20295460219a5b9f70004bc22167386ae42188c894fa36489492d8f0c652553b",
"classForwardingCarrier.html#a01d5ed11690e3a5932dc1deae259cfde",
"classImageStorage.html#a8e5bef300d93253bb2de9913cc93f7a0",
"classMjpegCarrier.html#a8eeb77babe24b65d8b7aaaa3f7beb287",
"classMultiNameSpaceHelper.html#abfe6ecb9780309d6f523f80f4a17c7bd",
"classPcmWavHeader.html#a58df4d73b35e62cd14507e2cf743a180",
"classProperty_1_1Private.html#ab2c68113f1708c5b0ce7cca5d0fa80f9",
"classRemappedSubControlBoard.html#aab316fdb4befe3c60060d58d259356d8",
"classRemoteControlBoard.html#afb112d094c471b877f70ab843514d4bb",
"classRunTerminator.html#af55f181a0c90b7416a0cf950f3b00d11",
"classSensorStreamingDataInputPort.html",
"classShmemInputStreamImpl.html#a846332ce7674d15bc4b8672c5249549f",
"classTestMotor.html#ac31cc00fb541809805c572c7e47004a2",
"classV4L__camera.html#afc2ee406af9137b5111848af0f9b7071",
"classfakeDepthCameraDriver.html#ad6d818455b8a4e127bcd010082e855a1",
"classrpLidarCircularBuffer.html#ad29ee4ab9179009934ca2641575c9d77",
"classyarp_1_1dev_1_1Drivers.html#a47b55a7ffec34940656820f1fe5129ab",
"classyarp_1_1dev_1_1IControlModeRaw.html",
"classyarp_1_1dev_1_1IGazeControl.html#a5bf702a30741b6ad5bce0a4ba35e56d3",
"classyarp_1_1dev_1_1INavigation2D.html#aff50eb188daa6fc3c41c4d9acdd2f45d",
"classyarp_1_1dev_1_1IRgbVisualParams.html#a188aeb23ced1349b88eb7d8cd168686d",
"classyarp_1_1dev_1_1ImplementControlMode.html#a4948372bd6c4aeb572e5f228ef80e0fe",
"classyarp_1_1dev_1_1ImplementTorqueControl.html#a5b84ad9dab869a3203497c015561fd2a",
"classyarp_1_1dev_1_1RGBDSensorParamParser.html",
"classyarp_1_1dev_1_1impl_1_1jointData_1_1Editor.html#a7b09d65a8be2bec6f37f099c5a1d54be",
"classyarp_1_1manager_1_1ConcurentRateWrapper.html",
"classyarp_1_1manager_1_1ITransition.html#afb9b423939e2704bd862a8d82abc45ad",
"classyarp_1_1manager_1_1Module.html#a9be446a52105b35763d7294571a724f9",
"classyarp_1_1manager_1_1StrStream.html#af4ff613a006d17ce58b1bc7603a62773",
"classyarp_1_1os_1_1AbstractCarrier.html#a2113aa74e4ac0e6b84d8b21db4b0a920",
"classyarp_1_1os_1_1Carrier.html#af97ef0bf594a93906dbb451b2835e172",
"classyarp_1_1os_1_1Event_1_1Private.html#af52f8c98e25bc6236b313bc46905f2a1",
"classyarp_1_1os_1_1NetType.html#a9d17e510a82fc094b4ae82fda93424e5",
"classyarp_1_1os_1_1NullStream.html#abe958f6df7f16fbfd457bfd9e806a632",
"classyarp_1_1os_1_1Portable.html",
"classyarp_1_1os_1_1ResourceFinder.html#aaecf836b34622bb0e7d2f5ad73025207",
"classyarp_1_1os_1_1Stamped.html#a7a02cf14ad7a2d330c11dbda70c127a0",
"classyarp_1_1os_1_1Value.html#a0d8c0bc18d6f604c4a1ad1ca1c9473e0",
"classyarp_1_1os_1_1idl_1_1WireWriter.html#a88f315d1b75dd3b8c770940b3029b5dd",
"classyarp_1_1os_1_1impl_1_1HttpCarrier.html#a786234107d7c2b70b637dd1a2cdc4d63",
"classyarp_1_1os_1_1impl_1_1NameserTwoWayStream.html#af8166bc4cb6f3a1ea3f0394d0be98854",
"classyarp_1_1os_1_1impl_1_1SocketTwoWayStream.html#a06c8f1761b505613b3cf62d970dff587",
"classyarp_1_1os_1_1impl_1_1StoreNull.html#a6f66ce9424d131827600052c66289d96",
"classyarp_1_1profiler_1_1graph_1_1OwnedVertex.html#ad2d6611ec457f5859de67b4a5bb9815a",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1KeyValue.html#aaca623015db404a6973e16dfb0d680cb",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Pose2D.html",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Vector3Stamped.html#a78d88060ee18f3c1b10e9bcd32160181",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1BatteryState.html#a438a8c38a28c5ba77d7c2ad44f17dfe2",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1JoyFeedbackArray.html#ad8865efcf8539efe217ace7e6915e4e2",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1RegionOfInterest.html#a05eba67e05ef807ac88559a132cf3e60",
"classyarp_1_1rosmsg_1_1std__msgs_1_1ColorRGBA.html#a11ec0b018c7cf2ec0e4e8a8ef9c3a41e",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int8MultiArray.html#a2e9d148aed239cabe0d8994e4fab2103",
"classyarp_1_1rosmsg_1_1tf2__msgs_1_1FrameGraph.html#af3f09d8dd379415193a1f29e8c0f219d",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerControl.html#a6bf3d7c5a4d506dc63239455d1c494db",
"classyarp_1_1serversql_1_1impl_1_1NameServerContainer.html#a5864cd721f67b81b10b3034e85972a30",
"classyarp_1_1sig_1_1Matrix.html#aba5eb9835ab2dbc6068a304c2a8f7570",
"classyarp_1_1wire__rep__utils_1_1WireTwiddlerWriter.html",
"data_rep.html#data_rep_text",
"dir_c5abf2512980c06be8f9be38a0c032e7.html",
"functions_vars_v.html",
"globals_vars_a.html",
"imuBosch__BNO055_8h.html#a20e5069a1f068b1282c287511d72ad37",
"localbroker_8cpp.html#a0041680469140758be68a3f08cc738e8",
"name_server.html#protocol_name_query",
"note_devices.html#note_devices_yarp",
"resource_finder_spec.html#autotoc_md307",
"sensor__msgs__LaserScan_8h_source.html",
"structCameraDescriptor.html",
"structgsl__vector.html#a49e03865a550ed1c577ff068b385292b",
"structyarp_1_1os_1_1SystemInfo_1_1LoadInfo.html#af45e045717298e12e29cb2f121884c12",
"structyarp_1_1sig_1_1PixelRgbFloat.html#ae1cbf42e6457df857812d455ad0a4680",
"v2_3_61.html",
"v3_2_1.html#autotoc_md257",
"yarp_2rosmsg_2geometry__msgs_2AccelWithCovarianceStamped_8h.html",
"yarp_2rosmsg_2std__msgs_2Int32MultiArray_8h.html#abae719ffe736d956f29162c5ee890487",
"yarp_data_dirs.html#datafiles_installedpkgs",
"yarp_without_yarp.html#yarp_without_yarp_listening"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';