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
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
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
"",
"CameraVocabs_8h.html#aaa5b72cc94b3198e514abcf5314d49e2",
"ControlBoardWrapperRemoteVariables_8cpp.html",
"FrameGrabberControl2_8h.html#a09672b855c6bc1aba9d45f9a2a623435",
"IAudioGrabberSound_8h.html",
"ILocalization2D_8h.html#a078058dc44e7c66a6e91c93c224dd631",
"ImageFile_8h.html#a93dd198bb228a13eca91e66a006266b2",
"ImplementControlLimits2_8h_source.html",
"Log_8cpp.html#a58f9401d546703859ab9c8720c61ee9e",
"McastCarrier_8h_source.html",
"NetInt32_8cpp.html",
"PointCloudTypes_8h.html#ac143e7160c4dfde2e47ecf07f59e9716",
"RGBDRosConversionUtils_8h.html#a31721e34ca16bb6188d1f6458b7a3e7d",
"RunProcManager_8h.html#a3f6e595fec0bd0295caddc78fba46f7c",
"Storable_8cpp_source.html",
"V4L__camera_8cpp.html#a4599757ee13f72ce4fa8931ef7c3b5c5",
"arbitration.html#arbitration_ball_monitor",
"classAnalogWrapper.html#a576494d675fbe46a34ff1d42fa8bf2d6",
"classControlBoardRemapper.html#a0fbc903c1d736e3240fa76094f67c717",
"classControlBoardWrapperCommon.html#a5b6c7ec908f03fe903b267da9150b5d9",
"classDecoderState.html#a5764c7d831cce09e415076ced370c99a",
"classFakeBatteryService__getBatteryCharge__helper.html#a031fca839cc53d9a2ecb46f6765f2411",
"classFakeFrameGrabber.html#aabff7eae77f5e75bd029393f11912c6a",
"classFakeMotionControl.html#a6c6db24bdd763f8f9a3dc463f8a0682f",
"classFakeMotor.html#a21c7bc2613dfa57e4a9f7bb800b1889e",
"classForwardingCarrier.html#af3ae01f5f36c79e2726a8c2afe3131ce",
"classFrameTransformSet__nwc__ros.html",
"classImageStorage.html#a23801ab3964c3d2d224322cd8c7d6e5a",
"classLocalization2DServer.html#a7b8a77a3921b622534f506012af070fc",
"classMap2DServer.html#a1d89ea0be8f451c9481ce7d68ef4f43d",
"classMonitorSharedLib.html#aad0ecbd0d74b485e04f8a52de6a03979",
"classMultipleAnalogSensorsRemapper.html#a676bc46c09b1c81b41d2cd6823be9e7f",
"classPingSampler.html#a793749ae8c2e5db4eaf16ac77b87aea7",
"classProperty_1_1Private.html#aadaa2fc0356657c1c066c7e6ac2c3988",
"classRPCMessagesParser.html#ace39f119ca2220c96016a67757bcd72b",
"classRemoteControlBoard.html#a5b464b7a63c18906639fe9f581ee55c3",
"classRgbdSensor__nws__yarp.html#a10c81d6ce9b12ecdc28c5f66a1398189",
"classSensorMeasurements.html#ad38269732ccdc5aad3e73096e9a139ed",
"classSerialDeviceDriver.html#ac3be6958524a130a006e2a00eb283c90",
"classShmemOutputStreamImpl.html#abb7d9bd472a957dec962c441c432c370",
"classTransformClient.html#ae157df3ec36684ed602ed6082066446d",
"classWebSocketStream.html#a467a6dfb51f34ed6ec2d0e2f3c6bd5fb",
"classfakeDepthCameraDriver.html#ad475f81c05aa313e5f0022b1a9d4867e",
"classreturn__getAllTransforms_1_1Editor.html",
"classyarp_1_1dev_1_1CanMessage.html#ac1f845f741e668f19e94acd697124a77",
"classyarp_1_1dev_1_1IAudioRender.html#a77ce6e03c84fb776a583a92b9ba9eaff",
"classyarp_1_1dev_1_1IFrameGrabberControls.html#a21260c7300667092927ead41e351afa9",
"classyarp_1_1dev_1_1IJoypadController.html#a00dfd029b57abe1d312a167d93bc4095",
"classyarp_1_1dev_1_1IPositionDirect.html",
"classyarp_1_1dev_1_1IVirtualAnalogSensor.html#a4d1eb3d89232982bab4902cd82a65142",
"classyarp_1_1dev_1_1ImplementPWMControl.html#ae9efa5bdb8b4552d46ebe784d757230e",
"classyarp_1_1dev_1_1Map2DLocationData.html",
"classyarp_1_1dev_1_1Nav2D_1_1MapGrid2D.html#a4e3d53cf8124c422e2fb5a68e42475ff",
"classyarp_1_1dev_1_1OdometryData_1_1Editor.html#aed7f792666b5b6146e5b05c71a8095b6",
"classyarp_1_1dev_1_1impl_1_1FixedSizeBuffersManager.html#ac220c0232d8d30e1090fc46f3133c10f",
"classyarp_1_1manager_1_1Argument.html#a50d7e937bbb58c095515beadc5dcd416",
"classyarp_1_1manager_1_1Executable.html#afcd56d7140c5e9a780074486f1e318b2",
"classyarp_1_1manager_1_1Manager.html#a61357db55ae74e7dc787ae39b9b42353",
"classyarp_1_1manager_1_1Processor.html#a3180c02c1c95dceced9926559a84d30e",
"classyarp_1_1math_1_1Quaternion.html#ac1dcb727636fc854e6139bf604b49f10",
"classyarp_1_1os_1_1Bottle.html#ae8939637bc004408c9347b80d04337c7",
"classyarp_1_1os_1_1Contact.html#a41687f5a743f3f8249f875deb73f2a3b",
"classyarp_1_1os_1_1LogStream.html#a7940b3eb61eb2ffc8e5484c57b0a3f40",
"classyarp_1_1os_1_1NetworkClock.html#a0179bf7e2017ec5bcc8cf644914d2e67",
"classyarp_1_1os_1_1PeriodicThread_1_1Private.html#a5cff5c7abd86bd0f6a1fd075a1cc768e",
"classyarp_1_1os_1_1QosStyle.html#a18c75b3e75daf971d0bba7213f8c4250a51f1a730978f549c72ccbf2df0354442",
"classyarp_1_1os_1_1Route.html#a2b1c971aaf032109cee8081c97e9b9e9",
"classyarp_1_1os_1_1SystemRateThread.html#af3e5722f377cdf35d3482568fade7769",
"classyarp_1_1os_1_1WireLink.html#ae30f4b1bae35fc701605964d33bd504c",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#ac7869a9ba45c55817c2b7b079c1e4b0a",
"classyarp_1_1os_1_1impl_1_1LocalCarrierStream.html#a5c876c78e16cee964f47b5d81226474e",
"classyarp_1_1os_1_1impl_1_1PortCore.html#afc60ce475843305ac2afffcfae29c27b",
"classyarp_1_1os_1_1impl_1_1StoreBlob.html#a69bfb2d2f5aa56fad8ca9564915616df",
"classyarp_1_1os_1_1impl_1_1TcpCarrier.html#a53d77e46de52011ed8e1d850929ee431",
"classyarp_1_1proto_1_1framegrabber_1_1FrameGrabberControls__Forwarder.html#a4bf18e64088ef3e1c20e7c62bc06d97d",
"classyarp_1_1robotinterface_1_1experimental_1_1Robot.html#a6f3474faca1140b5a83807c8c5446c27",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1AddDiagnostics.html#a3561da0a46b61a5940bbf30c9cf7a79f",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Point32.html#a027681f63d5d5f4c833e014e14cf4a24",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Twist.html#a94c3bb3fe16a83c0b8a5dd477815924c",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1Odometry.html",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1Imu.html#a61f5a89ba4312d0d24fba72b3c077f19",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1PointCloud.html#a903ba4deef68961f98fe982f6fcdac7e",
"classyarp_1_1rosmsg_1_1shape__msgs_1_1SolidPrimitive.html#a539abe35fb813ba2d458f25f78062177",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Int32.html#a043bca8d90b82682a55007e085b3b193",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt64MultiArray.html#a4d0d2e2dc4577abd0e5afa37391733c6",
"classyarp_1_1rosmsg_1_1trajectory__msgs_1_1MultiDOFJointTrajectoryPoint.html#a49e040e83f094d2c06a491ba4d59eb7c",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1MarkerArray.html#a8d77abfba3cfb671362633a65d9fd556",
"classyarp_1_1sig_1_1Image.html#a973864b80bf12a2f1575234d8d64fc37",
"classyarp_1_1sig_1_1file_1_1soundStreamReader.html#aec99c1fa5da6c5cad5eb0a0f3a37587b",
"compiler_8h.html#a6a2bc046e312dbf7666978d15da42c14",
"dir_61ea7e5301d5e74f530aba60fe068132.html",
"experimental_2XMLReader_8h.html",
"geometry__msgs__AccelWithCovarianceStamped_8h.html",
"group__group__basic.html",
"laserFromExternalPort_8h.html#a2b4f52a873799b01137f1b448b5fd28bae22c948dd6f93adf6f012002c5dc82c2",
"localbroker_8cpp.html#a57bc1c1d07f88f91d3ec51df18515534",
"namespacesensor__msgs.html",
"namespaceyarp_1_1dev_1_1RGBDRosConversionUtils.html",
"namespaceyarp_1_1os_1_1impl_1_1Time.html#a4c1393a75fb484360ee2e78760736724",
"nav__msgs_2GetPlan_8h_source.html",
"resource_8h.html#a6f925648382c660bd50e88fe7309a2d8",
"sensor__msgs__MagneticField_8h.html",
"string_8h.html#a8a5b1581618c82a71087762b3e35f68c",
"structgsl__matrix.html#a1f6a5661189ce50d53836f2707fa5aa1",
"structyarp_1_1os_1_1SharedLibraryClassApi.html#aa2bc2014c266038f7da2f39221c2b179",
"structyarp_1_1sig_1_1PixelHsv.html",
"system_8h.html#af2c46ace118f38c762d8d7bd31d39142",
"v2_3_66_1.html#autotoc_md90",
"v3_0_1.html#autotoc_md327",
"v3_4_4.html#autotoc_md649",
"yarp-v3_85-build_2src_2libYARP__conf_2src_2yarp_2conf_2api_8h_source.html",
"yarp_2rosmsg_2sensor__msgs_2MultiDOFJointState_8h_source.html",
"yarp_2src_2libYARP__robottestingframework_2src_2yarp_2robottestingframework_2api_8h.html#ae0a5743c6bcce58e73d29eaa4609f89a",
"yarp_swig.html#yarp_swig_configure_main_build",
"ymm-types_8h.html#a930e67396f24699cdf4826a5fcaa1ab4"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';