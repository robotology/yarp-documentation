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
    [ "YARP Modules", "modules.html", "modules" ],
    [ "Other Pages", "usergroup0.html", [
      [ "YARP devices", "md_src_devices_README.html", null ],
      [ "How to add a device to YARP", "add_a_device.html", [
        [ "What is a device driver in YARP?", "add_a_device.html#dev2-howto-intro", null ],
        [ "Step by step instructions", "add_a_device.html#dev2-howto-steps", null ]
      ] ],
      [ "Audio in YARP", "AudioDoc.html", [
        [ "yarp::sig::Sound data type", "AudioDoc.html#datatype", null ],
        [ "yarp devices", "AudioDoc.html#devices_general", null ],
        [ "Physical device drivers", "AudioDoc.html#driver_devices", null ],
        [ "wrapper devices", "AudioDoc.html#devices_wrappers", null ],
        [ "Examples", "AudioDoc.html#AudioExamples", null ],
        [ "Limitations", "AudioDoc.html#AudioLimitations", null ]
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
          [ "Devices list ordered by folder", "md_src_devices_README.html#autotoc_md9", null ],
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
      [ "README", "md_doc_release_master_README.html", null ],
      [ "README", "md_doc_release_yarp_3_5_README.html", null ],
      [ "Ominous but Enigmatic Warning", "warning.html", null ],
      [ "Configuring your external build", "yarp_external_build.html", [
        [ "Install data files inside directories specific for your project", "yarp_external_build.html#data-files-inside-specific-directories", null ]
      ] ],
      [ "YARP Logos", "yarp_logos.html", null ],
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "LICENSE.gitgraph", "md__github_git_workflow_LICENSE_gitgraph.html", null ],
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
"CameraVocabs_8h.html#aad6c57028adc943cf38946c449ec1f6f",
"ControlBoardWrapperRemoteVariables_8h.html",
"FrameGrabberControl2_8h_source.html",
"IAudioRender_8cpp.html",
"ILocalization2D_8h.html#a35371875a70f225e9f5f7ca2dfc5915d",
"ImageFile_8h.html#ac8e3dbdc28947bf219fd63b80f2bde18",
"ImplementControlLimits_8cpp_source.html",
"Log_8cpp.html#a62f05b1e00666a7e59003a86c1ca68d6",
"MemoryOutputStream_8h_source.html",
"NetInt32_8h.html",
"PointCloudTypes_8h.html#ac143e7160c4dfde2e47ecf07f59e9716a0c458a60f82ff19e30b77fb7755bd108",
"RGBDRosConversionUtils_8h.html#a910386fd952716f4249dfa5745156a06",
"RunProcManager_8h.html#a932ecfb6481a28832e1433b213e9ab3a",
"Storable_8h.html#a28e5b5afeb95864e283fafeaeacfda65",
"V4L__camera_8cpp.html#a7ca5f65882135b65a91fbe97f4a663d1",
"arbitration.html#arbitration_line_monitor",
"classAnalogWrapper.html#a40c304ddfb37a7b9280fa595c9ad3f2f",
"classControlBoardRemapper.html#a0daf116e9021728f2e417a11e5bc88e9",
"classControlBoardWrapperCommon.html#a1b75ef1bab06308c8a63a3bcebc545d0",
"classDecoderState.html#a46aa6fee841db819ec927683ab77040e",
"classFakeBatteryService.html#ad6e7b6b7941232da4b9b8c7d09ebadb6",
"classFakeFrameGrabber.html#aa3f2570a6aadad74f6f8d4cd332f1c73",
"classFakeMotionControl.html#a685bbc4f688f7ea506bc6aaa04611705",
"classFakeMotor.html#a218ddb17f2ba4512b327484914f25061",
"classForwardingCarrier.html#ae645c61519a351fa592af2242f18a0a2",
"classFrameTransformSetMultiplexer.html#a4988d95d050c4071383804b72f885f5d",
"classIMURosPublisher.html",
"classLocalization2DServer.html#a33546767a62c819bc655ada71c9d82a8",
"classMap2DClient.html#aff815c5b34ab0a43cff827a73da12cf5",
"classMonitorSharedLib.html#a57c64418309995982e8e3b21b5c8fc31",
"classMultipleAnalogSensorsRemapper.html#a571c6a5a5a6c0808e63e539afd99b49d",
"classPcmWavHeader.html#ac30c4ac7615f15f9f28a43bc08ac1fbb",
"classProperty_1_1Private.html#a6b101f4eaa5acf8d6e9853ff00182cc7",
"classRPCMessagesParser.html#ae086467e74e27bdc590723fed18c2563",
"classRemoteControlBoard.html#a5c577a375ab62da19cfc5a762dc972c4",
"classRgbdSensor__nws__yarp.html#a3f592bc38d08eb27c61896027dccb252",
"classSensorMeasurements.html#af2feb047b8bba92341fb81b8014c40ab",
"classSerialDeviceDriver.html#ad9c2fd810d9de400048fb2ed478a9cf9",
"classShmemOutputStreamImpl.html#aec94722f2bfad10e1a23d651bd838bcf",
"classTransformClient.html#aed70bcba76d7d4b8296fa4696d254862",
"classWebSocketStream.html#a6c1352aed043fe39918dda7c3e0c3f22",
"classfakeDepthCameraDriver.html#ae93b4e0f53c2a78af8671eb72112e4a9",
"classreturn__getAllTransforms_1_1Editor.html#a072f64d9585812a9dd974d73d495cc6e",
"classyarp_1_1dev_1_1CanMessage.html#af324031b92fb72e74efffb004ef2666a",
"classyarp_1_1dev_1_1IAudioRender.html#ab4fc3c30b63c05413e68f76883c7edeb",
"classyarp_1_1dev_1_1IFrameGrabberControls.html#a2d7dca53dafe13dcca0f20591a68c901",
"classyarp_1_1dev_1_1IJoypadController.html#a3bcb70131d77e358ea39af3784ad28db",
"classyarp_1_1dev_1_1IPositionDirect.html#a863ae6ae98a5e94510ac8853934833df",
"classyarp_1_1dev_1_1IVirtualAnalogSensorRaw.html#a0a7fdd9724646cd4c624851df96f4c2d",
"classyarp_1_1dev_1_1ImplementPidControl.html#a10a83b8bf28a5b16750208c3a7df5dda",
"classyarp_1_1dev_1_1Map2DLocationData.html#aa2f4ced492b14436de872513aaea7fda",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#a5ba416e040ee21c58f945caaa39da3b2",
"classyarp_1_1dev_1_1Pid.html#a039840d2dc1c49b4042645b062c597e0",
"classyarp_1_1dev_1_1impl_1_1jointData.html#a14c96205c7df104b7539d354536893c2",
"classyarp_1_1manager_1_1Argument.html#aa4a7ae1da9539b9b10479bd8439fb011",
"classyarp_1_1manager_1_1GPU.html#a05da4a9511c7eb9e78e70c539cf50f7d",
"classyarp_1_1manager_1_1Manager.html#a6ef1d7569d08c6ebdcdec8a4c219875f",
"classyarp_1_1manager_1_1Processor.html#a963cc75e2022c12a2c5dad7f2b0e161c",
"classyarp_1_1math_1_1Rand.html#a22a6d8e58685cfe453debbae73643de8",
"classyarp_1_1os_1_1BufferedPort.html#a05606275e9c75b4fa90096ee2b2aa60b",
"classyarp_1_1os_1_1Contact.html#a7bfba47ee633e21f62655909369d25ea",
"classyarp_1_1os_1_1LogStream.html#a91f977a73eeacfa979e2c0e5ba5af61a",
"classyarp_1_1os_1_1Node.html",
"classyarp_1_1os_1_1PeriodicThread_1_1Private.html#aab8c807d3e8125adec8345c01356bf86",
"classyarp_1_1os_1_1QosStyle.html#a18c75b3e75daf971d0bba7213f8c4250a83598a5b70a6f18820990aeed72b98bc",
"classyarp_1_1os_1_1Route.html#a6c82c3face96e368e8e806908fd8fb07",
"classyarp_1_1os_1_1Terminee.html#a14c79ee49ce65a87837797fdfa21ae7c",
"classyarp_1_1os_1_1YarpNameSpace.html",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#af12011f09aa292add3d0a0acbaf7ad30",
"classyarp_1_1os_1_1impl_1_1LocalCarrierStream.html#aa81a29c56e5db8efc82f032959a99e73",
"classyarp_1_1os_1_1impl_1_1PortCoreAdapter.html#a306278b901346da3e446e3ee26e371fb",
"classyarp_1_1os_1_1impl_1_1StoreBlob.html#afb9208a022869096111b1bbff7a82146",
"classyarp_1_1os_1_1impl_1_1TcpCarrier.html#ac319922a09544952103aa1a4685ebd1f",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html#a7b5e9bb27b0a7c19603329b6eb95e835",
"classyarp_1_1robotinterface_1_1experimental_1_1Robot.html#aa3032273dc2d673cbd93cdfe9a75291d",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1AddDiagnostics.html#ab0bdb3c690d816d2a7f3b91dc245086e",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Point32.html#a4a8b8dfc96feb82e13c21dfd2db36880",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Twist.html#ad9ae3ffe134449b2d8172ecabb48df02",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1Odometry.html#a65b702d3a100f8f26afb9675a9a6a86a",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Imu.html#ab1dd0095469b98565489909a6445174a",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1PointCloud.html#af4ade785efb8f4ccdfe3506371bcdcad",
"classyarp_1_1rosmsg_1_1shape__msgs_1_1SolidPrimitive.html#a9eb313f72dbe31947713ca01f4aa284c",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int32.html#a82572fe80101204185024af8568c385b",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt64MultiArray.html#a6c2a986f0a0a37d594ac1f6843b8b7f8",
"classyarp_1_1rosmsg_1_1trajectory__msgs_1_1MultiDOFJointTrajectoryPoint.html#a87a13a00d47f3e524b65c6b8ce92a5ec",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1MarkerArray.html#afd9ffaa59305c7a33f700f591a52eee7",
"classyarp_1_1sig_1_1Image.html#ab3d72c4c60d06ca1c897dd58526a8702",
"classyarp_1_1wire__rep__utils_1_1RosImageStamp.html",
"compiler_8h.html#a75e855f00032a3c3e53c82aa5eeab5e3",
"dir_62b38515552bd4cf176eebe977ae1028.html",
"experimental_2XMLReader_8h.html#a7bc7d4f0aefaac7eae2ecfbc04cc9452",
"geometry__msgs__AccelWithCovariance_8h.html#a5b5283c5687ccef8bc68cc53cd2669d9",
"group__portaudio__basic.html",
"laserFromPointCloud_8cpp.html#a0a5b7469780672075a9c7a186d0fbe75",
"localbroker_8cpp_source.html",
"namespacenav__msgs.html#afed251f69ea32ffffdffe201183a2071",
"namespaceyarp_1_1dev_1_1Nav2D_1_1INavigation2DHelpers.html#a36124e34643dff260b7e5203bf4ca47a",
"namespaceyarp_1_1os_1_1impl_1_1Time.html",
"nav__msgs_2GetPlan_8h.html",
"resource_8h.html",
"sensor__msgs__LaserScan_8h_source.html",
"string_8h.html#a83ad62cb97b876c6902ea1efb9baaef3",
"structgsl__matrix.html#a9d4c240f478e8dd14a3fcd3675a4bf7b",
"structyarp_1_1os_1_1SharedLibraryClassApi.html#ab924db586d71b00631e70467dd180d01",
"structyarp_1_1sig_1_1PixelHsv.html#ac7df7000586bfc5018964ba4bdc8813a",
"terms.html",
"v2_3_66_2.html#autotoc_md102",
"v3_0_1.html#autotoc_md348",
"v3_4_6.html#autotoc_md679",
"yarp_2rosmsg_2diagnostic__msgs_2AddDiagnostics_8h.html#a00017fb26959399980d726cc0e0f7c67",
"yarp_2rosmsg_2std__msgs_2Float32_8h_source.html",
"yarp_code_examples.html#yarp_code_example_simple_receiver",
"yarp_without_nameserver.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';