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
"DeviceGroup_8cpp_source.html",
"FrameGrabberInterfaces_8h.html#ab32e53d82a0b250627e27eac32cc9b83a66c1fc36a50634d5fcad68b32cb75242",
"IJoypadController_8cpp.html#a02e8cb4c3a09f99c4c0c70143c1b1660",
"ImageCopy_8cpp.html#a3a0cbc72f3a2e13dd83f3a53dc577227",
"ImplementControlMode_8cpp.html",
"Logger_8h.html",
"MultipleAnalogSensorsRemapper_8cpp.html",
"PidEnums_8h.html#ae6315c5ca764ec6b7ae6e7082430e90e",
"PortWriterBuffer_8cpp.html",
"Run_8cpp.html#a13984b7b8a17ae8a4c58e3a94728cd90",
"TcpFace_8cpp.html",
"actionlib__msgs__GoalID_8h.html#a7954c589db58eb212356a6a600693ad1",
"classForwardingCarrier.html#a2b1e990763d8f505ea61f22838e3787f",
"classMonitorBinding.html#ab14b2ae70e78009bd3a8304ef73d6852",
"classPortWriterBufferBaseHelper.html#aa8c3ac360dff24a6e5cd0b6bee006889",
"classRunRead.html#ac96deaeec44b40bd4b2e0a5b8745267e",
"classSensorRPCData.html#aac12b0f8ac433b1cef1c78ca0ce0b730",
"classSerialServoBoard.html#aa154411b4cbfed62de96175834fc7856",
"classTextureStatic.html",
"classjointData.html#a7b0803fb4be6bb7c01086bf12e402420",
"classlaserHokuyo.html#a73fc5528124ea9de944a95367298175c",
"classyarp_1_1dev_1_1BoschIMU.html#afbf12f248577997db9fc38edfeb7d776",
"classyarp_1_1dev_1_1ControlBoardRemapper.html#a6c268f645989071de08e1e0f2c34567d",
"classyarp_1_1dev_1_1ControlBoardWrapper.html#a96acd5585dc97a322c14af535be765ac",
"classyarp_1_1dev_1_1DynamixelAX12FtdiDriver.html#af59692b2970675a5ec8fbcb370f6bf5f",
"classyarp_1_1dev_1_1FakeMotionControl.html#a7af8161dcf61b8584fd68410f4c220d0",
"classyarp_1_1dev_1_1FrameGrabberControls__Sender.html#aad1a8b163828297945d13451a0f0e717",
"classyarp_1_1dev_1_1IControlLimitsRaw.html#a2177654a7ff4c70595496900e615f50b",
"classyarp_1_1dev_1_1IGazeControl.html#a4ce40c2de49ecf0cfbd9f7b55c619792",
"classyarp_1_1dev_1_1IOrientationSensors.html#aab028ad0825414f53a9c54728eda4423",
"classyarp_1_1dev_1_1ISerialDevice.html#afc560f0c7b9d150eb6b4270349b1543c",
"classyarp_1_1dev_1_1ImplementCurrentControl.html#a679e2b2f8d61da06bf8a750dcfe42594",
"classyarp_1_1dev_1_1ImplementVelocityControl.html#afe5db657ce139d965ae718fed85a1581",
"classyarp_1_1dev_1_1MultipleAnalogSensorsClient.html#a6b922701ef9f4827dfeb36ee4721c96c",
"classyarp_1_1dev_1_1OVRHeadset.html#af03a868e7dba71be829f44d6d433b2e8",
"classyarp_1_1dev_1_1RemappedAxis.html",
"classyarp_1_1dev_1_1RemoteFrameGrabber.html#a54405dbe2d42b642e5d16302bd7e85fb",
"classyarp_1_1dev_1_1ServerSerial.html#af511758f920d6092d55af03fd65a545a",
"classyarp_1_1dev_1_1depthCameraDriver.html#a12afe784891a040aa310e4ca71d97d12",
"classyarp_1_1math_1_1FrameTransform.html#a55b3b8fa137a728e7021285f2758e816",
"classyarp_1_1os_1_1AbstractLockGuard.html#a08930c6a01aea4cff0c989eba8d2c35b",
"classyarp_1_1os_1_1Carriers.html#a6f37d310a89e67bcebbd8ad0d3838ad1",
"classyarp_1_1os_1_1Event_1_1Private.html#ac1ddb6f5038852bc45fb37a36ccb217a",
"classyarp_1_1os_1_1MjpegStream.html#a202ade90f94853376b7e5040b9faf063",
"classyarp_1_1os_1_1NestedContact.html#aaa6c00059bcdec857af8e7556e9f2305",
"classyarp_1_1os_1_1NullStream.html#a37280f1446d05c8a97fa7dee017f03d7",
"classyarp_1_1os_1_1PortReaderBuffer.html#a6ce5e4c073049c2d215b5e8db91353db",
"classyarp_1_1os_1_1RFModule.html#a679ac4e820e92304c89648b1b7b85c1e",
"classyarp_1_1os_1_1RpcServer.html#a9a7fa8403ca2195d201b1fec1e41dcfb",
"classyarp_1_1os_1_1TcpRosCarrier.html#a07633989ebe018616d03e09a01c1cfae",
"classyarp_1_1os_1_1Value.html#a7a1d0a26672007d717ac29aed5153157",
"classyarp_1_1os_1_1idl_1_1WireReader.html#a71ecc8afef2e2cd5025e040b90612df5",
"classyarp_1_1os_1_1impl_1_1ConnectionRecorder.html#aa6e2028d20ed072c99bfc59ea4d09e17",
"classyarp_1_1os_1_1impl_1_1LocalCarrierStream.html#aa81a29c56e5db8efc82f032959a99e73",
"classyarp_1_1os_1_1impl_1_1NameServer_1_1NameRecord.html#aba053ee814171c829164cd9ed61d9e6f",
"classyarp_1_1os_1_1impl_1_1PortCoreInputUnit.html#a2ce5d10fc5e1830bce2e5bd6893a9f07",
"classyarp_1_1os_1_1impl_1_1Storable.html#a3fa9353159e043da5148b0c7674bda4b",
"classyarp_1_1os_1_1impl_1_1StoreVocab.html#a3fa997459f1dc08491c0e3abf609f802",
"classyarp_1_1rosmsg_1_1TickDuration.html#a667bbe5aee82d3c41d0f81ee98a1ae5f",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1AccelWithCovariance.html",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PoseWithCovarianceStamped.html#a2a9a0607eaea63c685bbb6098e6d14d4",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GetMapReply.html#ad2e2193a303b17ed82138f4939dce156",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1ChannelFloat32.html#aced08056eb97f8f4e8101d117977f2b6",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1MultiDOFJointState.html#a84e7470a465efbd0548ea8903da2ff2e",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Temperature.html#a2af614e4045ca7ac0f3c7c3f975ba4c3",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float32MultiArray.html#a6eb96a898868df33179a5b1070863d5d",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Time.html#a69615b179df2f47d3c0cd41116d753e7",
"classyarp_1_1rosmsg_1_1tf_1_1FrameGraphReply.html#a02a2f6bbe567533d5bd7f9417c61d8ff",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerPose.html#a3d9fa046c5f00a4393d0ad3c5cc6918e",
"classyarp_1_1sig_1_1ImageOf.html#a3a38c64e06dedfa88b609c9fb2dc6852",
"compiler_8h.html#a4fdcdf8fcce24ccaeac60136e2b3bb31",
"dir_81bc694f6dd7d10cafd2b6b1fb2048db.html",
"functions_z.html",
"group__cmd__device__portaudio.html",
"index.html#yarp_related_links",
"lua__swig_8h.html#aa11fe417abd4c5a02d31cc1a51dee007",
"nav__msgs_2Path_8h_source.html",
"rosPixelCode_8h.html#ae0a3623a86cec3ee4679e74c69143a5a",
"std__msgs_2Float32MultiArray_8h_source.html",
"structTextureStatic_1_1Image.html#a58e276fb258b966fcb5648cdc70b4bb1",
"structyarp_1_1dev_1_1RGBDSensorParamParser_1_1IntrinsicParams_1_1plum__bob.html#a1adab1e5e69842fffa55f09498b3fd32",
"structyarp_1_1sig_1_1PixelRgb.html#ae9e92fdc58c09e217943ee568678267c",
"v2_3_70.html#autotoc_md101",
"yarp_2rosmsg_2TickDuration_8h_source.html",
"yarp_2rosmsg_2std__msgs_2Byte_8h.html",
"yarp_data_dirs.html#datafiles_installedpkgs",
"yarpview.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';