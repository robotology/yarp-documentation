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
      [ "Device Drivers How-To", "dev-how-to.html", [
        [ "What is a device driver in YARP?", "dev-how-to.html#dev-howto-intro", null ],
        [ "Adding a device driver to libYARP_dev", "dev-how-to.html#dev-howto-lib", null ],
        [ "Adding a device driver factory", "dev-how-to.html#dev-howto-factory", null ],
        [ "Getting things compiled", "dev-how-to.html#dev-howto-compile", null ],
        [ "Hey, why not automate all this?", "dev-how-to.html#dev-howto-wow", null ]
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
      [ "installation_downloads", "installation_downloads.html", null ],
      [ "User Manual", "manual.html", null ],
      [ "User Manual Title", "manual_title.html", null ],
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
        [ "Running the example", "coder_decoder.html#coder_decoder_running", null ]
      ] ],
      [ "An example which shows how to use a Lua script to modify image data", "image_modification.html", [
        [ "Description", "image_modification.html#image_modification_desc", null ],
        [ "Requirements", "image_modification.html#image_modification_req", null ],
        [ "Running the example", "image_modification.html#image_modification_running", null ]
      ] ],
      [ "An example which shows how to use C++ and DLLS to modify incoming data in an input port", "simple_dll.html", [
        [ "Description", "simple_dll.html#simple_dll_desc", null ],
        [ "Requirements", "simple_dll.html#simple_dll_req", null ],
        [ "Running the example", "simple_dll.html#simple_dll_running", null ],
        [ "Code Samples", "simple_dll.html#simple_dll_sample", null ]
      ] ],
      [ "An example which shows how to use a Lua script to modify incoming data in an input port", "simple_modification.html", [
        [ "Description", "simple_modification.html#simple_modification_desc", null ],
        [ "Requirements", "simple_modification.html#simple_modification_req", null ],
        [ "Running the example", "simple_modification.html#simple_modification_running", null ]
      ] ],
      [ "An example which shows how to use a Lua script to create a new data type in a port", "type_modification.html", [
        [ "Description", "type_modification.html#type_modification_desc", null ],
        [ "Requirements", "type_modification.html#type_modification_req", null ],
        [ "Running the example", "type_modification.html#type_modification_running", null ]
      ] ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP OS library", "yarp_os.html", "yarp_os" ],
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
          [ "Related Functions", "functions_rela.html", null ]
        ] ]
      ] ],
      [ "File List", "files.html", [
        [ "File List", "files.html", "files_dup" ],
        [ "File Members", "globals.html", [
          [ "All", "globals.html", "globals_dup" ],
          [ "Functions", "globals_func.html", "globals_func" ],
          [ "Variables", "globals_vars.html", null ],
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
"ControlBoardInterfaces_8h.html#ae65674b2d1ecaec0e4877e48ba9a0eef",
"FrameGrabberInterfaces_8h.html#a0a97b6ed7d2613871d27820425f983ca",
"IEncoders_8h.html#ad4fc88cbd6d3132da273d2f32ff1e975",
"IRGBDSensor_8h.html#a65d812424e1eb496cb702f25d68128fb",
"ImageCopy_8cpp.html#abdffa71e358441b8ca746b81adb010db",
"Log_8cpp.html#af5bc6d48de6fe1a4c7446517fc8fdb98",
"MultipleAnalogSensorsClient_8cpp_source.html",
"OutputStream_8cpp.html",
"PortMonitor_8h.html",
"RpcServer_8h_source.html",
"SubDevice_8h_source.html",
"XmlRpcCarrier_8cpp.html#a6e3d821bee339708c68b45ddf8abf402",
"classFakeLaser.html#ace9fff50235031386d7df676e0005283",
"classMessageStackThread.html#a2c0cd8b2d0e5e65239a6db0484ec8909",
"classPortWriterBufferBaseHelper.html#ad75d5b9e93e72c7629d6c7edfd6ea75f",
"classRunReadWrite.html#a36d74540197bac31a63c31b28c72016b",
"classSensorRPCData.html#aca9e2785366e9a3b4d3f70f3f6ac07c8",
"classSerialServoBoard.html#ace3cbda6f2476c5cdf01831fcff67ced",
"classTextureStatic.html#ad62ccea40e2648bbeff62b6dc1655de0",
"classjointData.html#a89504c611cd7e1388f44be62599a3bc3",
"classlaserHokuyo.html#a9a869f8668d5d6c9f7273cebc052f7da",
"classyarp.html#acc6949ff303527fbd763b60a9bee0e55",
"classyarp_1_1dev_1_1ControlBoardHelper.html#a96f2abb9ed8e3f3371535538e2819f26",
"classyarp_1_1dev_1_1ControlBoardRemapper.html#af2e101a1764ca744ae449ff9ef05ce84",
"classyarp_1_1dev_1_1DevicePipe.html#a986e9b21997c54ba89ca46d0609a1ce7",
"classyarp_1_1dev_1_1FakeMotionControl.html#a047a0bcc30364e546f809949bc3421b6",
"classyarp_1_1dev_1_1FakeMotionControl.html#ae3a92b6ea8c5b74e4d83be52069108fa",
"classyarp_1_1dev_1_1IAudioVisualStream.html#a159c18c8246779c3aed91d006b1877e6",
"classyarp_1_1dev_1_1IFrameGrabberControls.html#a95414989b06d2134c07d56785bc04d76",
"classyarp_1_1dev_1_1IJoypadController.html#a9a6c1db99e1fcc8cdfe43799462a1017",
"classyarp_1_1dev_1_1IPositionControlRaw.html#aeb7160fddc46d4122ba10556224e4f24",
"classyarp_1_1dev_1_1IVisualServoing.html#a6f8779cc1533d7b47bd207216783da0f",
"classyarp_1_1dev_1_1ImplementPidControl.html#a421e939433d8127028774f97fd2f7cc3",
"classyarp_1_1dev_1_1Map2DServer.html",
"classyarp_1_1dev_1_1MultipleAnalogSensorsServer.html#ac2793c257021e9c0a04f5d7e3daf01b3",
"classyarp_1_1dev_1_1PortAudioDeviceDriverSettings.html#a96cf7c09240a6bafc38f393a6db5449f",
"classyarp_1_1dev_1_1RemoteControlBoard.html#a87c4d291781b49592f34416b7dcc34a4",
"classyarp_1_1dev_1_1ServerFrameGrabber.html#acad4e14effe6f719f337bac1f59cd665",
"classyarp_1_1dev_1_1TestFrameGrabber.html#a5a198ae475b123df725dd38eb1425b0f",
"classyarp_1_1dev_1_1fakeIMU.html#aeb32fcab53c4102bd9913e0133212020",
"classyarp_1_1name_1_1BootstrapServer.html#a683daf3f415f0fa59d93c1079d133fa5",
"classyarp_1_1os_1_1BufferedPort.html#a0ce8ec5b7a27c2407b0305cb1e589300",
"classyarp_1_1os_1_1Contact.html#a44450481ce5c8dd99f3a75eb9c8f310f",
"classyarp_1_1os_1_1Log.html#a418cfdfb2db2690fec170e8834776a81",
"classyarp_1_1os_1_1MpiControlThread.html#a6b23af0629618c480e2e041ec062b692",
"classyarp_1_1os_1_1Node_1_1Helper.html#a1fd72aaee42dc520c10a933979cc7e2b",
"classyarp_1_1os_1_1PeriodicThread_1_1Private.html#ad7c397ecf1d00fc1d7c2c47f0e08c4bf",
"classyarp_1_1os_1_1PriorityDebugThread.html#a8ddc6d60d33634f5b6c3701e35b273cf",
"classyarp_1_1os_1_1ResourceFinder.html#a9fd5d6e90c6b5054685b3246ee5896d2",
"classyarp_1_1os_1_1ShiftStream.html#aaacd2ed0a990c8d48dbc7faa64071e9a",
"classyarp_1_1os_1_1Thread_1_1Private.html",
"classyarp_1_1os_1_1XmlRpcStream.html#a35f28d235edac05cad606926404c306a",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a340c8fc912cb567efcfccc48bfc025d0",
"classyarp_1_1os_1_1impl_1_1FakeTwoWayStream.html",
"classyarp_1_1os_1_1impl_1_1NameClient.html#a3a48facdaa34c49b53b8864e0016d834",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a580b57033978eee3734198822ffa9f96",
"classyarp_1_1os_1_1impl_1_1PortCoreUnit.html#ab232c67af34993e640da9798d1ae702c",
"classyarp_1_1os_1_1impl_1_1StoreFloat32.html#a9cf8057b00a77c698c63b48ea74986e5",
"classyarp_1_1os_1_1impl_1_1TcpCarrier.html#aaaaa59d7778b2b8694beb68550e5cb8d",
"classyarp_1_1rosmsg_1_1actionlib__msgs_1_1GoalStatusArray.html#aa1513ee9fe7f0aafe080c89701906f6e",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Point.html#a8b6b7e44a582d5c87d6aa86792701800",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Twist.html",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1OccupancyGrid.html#a7b79a9992b7af5374e3968661bea5ec0",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Imu.html#a3e9f6838b1dcd2dee03073434adcf291",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1PointCloud.html#a1ea533a2291e05e1b478d3ea1f574e5e",
"classyarp_1_1rosmsg_1_1shape__msgs_1_1SolidPrimitive.html#a11a9fe6fc2c9c073e1f6859fc3786f76",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int16MultiArray.html#a8af42136a9e9df8fd733dd1f3f4fb390",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt64.html#ab8dfcfdeaab1e883a6ded06f78341c90",
"classyarp_1_1rosmsg_1_1trajectory__msgs_1_1MultiDOFJointTrajectory.html#af4fa3177d577f45df661c177425daeb3",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1MarkerArray.html",
"classyarp_1_1sig_1_1PointCloud.html#a83b0d532dacab13ccf1631834caf9430",
"compiler_8h.html#aeb60d1e3ed9afeae7d814ef65f2fdb6b",
"dir_d6efc165c0ca1d5391c5ce93d22a7207.html",
"geometry__msgs_2Pose_8h.html",
"imagemagick_2main_8cpp-example.html",
"laserFromDepth_8h.html#a0c8186d9b9b7880309c27230bbb5e69d",
"lua__swig_8h.html#afc5b08bb3c3cd2e3fb2e34b775346153",
"numeric_8h.html#ab489a6d2d15c75a8a4843e0680784939",
"rtf_plugins.html",
"std__msgs__Byte_8h_source.html",
"structdata__for__gst__callback.html",
"structyarp_1_1os_1_1SharedLibraryClassApi.html#a9433232797f8946a7bbb9b708c8a29a5",
"system_8h.html#a8a5e8630c5fb6e2c7f2e0e9e078c655a",
"v2_3_72.html#autotoc_md134",
"yarp_2rosmsg_2geometry__msgs_2PoseArray_8h_source.html",
"yarp_2rosmsg_2std__msgs_2UInt32_8h.html",
"yarp_protocol.html#carrier_tcp"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';