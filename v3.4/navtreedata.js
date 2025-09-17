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
      [ "The YARP os library", "yarp_os.html", "yarp_os" ],
      [ "LICENSE.gitgraph", "md__github_git_workflow_LICENSE_gitgraph.html", null ],
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
"ControlBoardRemapperHelpers_8h_source.html",
"FfmpegWriter_8cpp.html#a9bfef4e7af98d84ce02cb6e12863f966",
"HumanStream_8cpp.html",
"IMap2D_8h.html#afaeccd5921190b186bc81c071eca1c32",
"ImageUtils_8cpp.html#a5088665bd932007fd81eeb8f1c3c0b4d",
"ImplementCurrentControl_8cpp.html",
"Log_8h.html#a0101b3731faca1a50d2fcd1deb5c190b",
"MjpegLogComponent_8h_source.html",
"NetworkClock_8cpp.html",
"PointCloudTypes_8h.html#ac143e7160c4dfde2e47ecf07f59e9716a6d78011edb54497c08c8b328a3510f09",
"RGBDSensorParamParser_8cpp.html#afe1cf3589ea88980fc35daac46454015",
"Semaphore_8cpp.html",
"TcpRosLogComponent_8cpp.html#ac13a37069fc8217ea6fc31b80c00e9e7",
"Vocab_8h.html#adc62d76972262944c69f954b383b944a",
"carrier_h264_howto.html#client",
"classBoschIMU.html#a13c6b491b7568fed80f9dd256b1ef34c",
"classControlBoardRemapper.html#aea0bc5aee46e7645ab93f4e8f0d6048e",
"classDecoderState.html#a4bb7b6861c12d4c02f8c02e2d3d12133",
"classFakeBatteryService__getBatteryStatus__helper.html",
"classFakeMotionControl.html#a6345aa8d61a57f8ac0363350f684285f",
"classForwardingCarrier.html#a6a146ed419287e157a01ada44f19fd72",
"classImageStorage.html#a75d318c6eef82268fa094a5be51988f9",
"classLocalization2DServer.html#a99c58111757ab7fabba31a27fb6b655e",
"classMpiCarrier.html#a6146a131c7fb14e67906e1a755b91bb3",
"classNavigation2DClient.html#a3d5f8d3f69b3d59a4ae42eaa2e487cb7",
"classPortAudioRecorderDeviceDriver.html#afadf4422f7485b8abb41bf17a134413f",
"classRGBDSensor__StreamingMsgParser.html",
"classRemoteControlBoard.html#a6e3d7fa1ebc5a9219fb0fb0f04965e15",
"classRosLookup.html#abb9f752c3920b7915123ce91d5f0958b",
"classSensorMetadata_1_1Editor.html#a3fc2f98b10af8c301327b19c2e571512",
"classServerFrameGrabber.html#a1c846a662d82557d9df5b59f64d219db",
"classSubDevice.html#ae7a0f8ee5b92c9e6a7d8d88715bf2c66",
"classUSBCameraDriver.html#ad885abc9cd7c318eb51fad164fbbbbfc",
"classYarpRunProcInfo.html#a968447adc004dc6ea563105922d4afe1",
"classlaserHokuyo.html#a317b3ea095ebf02383b02a104487718da84e42a834c9cef674c451029bd6a6476",
"classstreamFrameListener.html#a7766afbdbad95e21bbfbff8da3e4cac3",
"classyarp_1_1dev_1_1FrameGrabberControls__Sender.html",
"classyarp_1_1dev_1_1ICurrentControl.html#a98515618de3a98c3074708ba5587834f",
"classyarp_1_1dev_1_1IGazeControl.html#a99d6762c873fde7386e0737901804056",
"classyarp_1_1dev_1_1IPidControlRaw.html#a86bf866acd3a0ee476b7bcd532303407",
"classyarp_1_1dev_1_1IThreeAxisMagnetometers.html#a242657f327018100bd4797fc57348746",
"classyarp_1_1dev_1_1ImplementImpedanceControl.html#a45a519f97649babf2854d755fd3fa8f5",
"classyarp_1_1dev_1_1Implement__RgbVisualParams__Parser.html#a696d3ff836bddbb92a4133fd38518d3c",
"classyarp_1_1dev_1_1Nav2D_1_1IMap2D.html#a18f917e41d8e8d18e620e36c6376f7fa",
"classyarp_1_1dev_1_1OdometryData6D_1_1Editor.html#a37eb296d251df83ffe5f1e6bb4ca268f",
"classyarp_1_1dev_1_1StubImplPositionControlRaw.html#ac96699222410de52f6b1caacacb2298b",
"classyarp_1_1manager_1_1AppSaver.html",
"classyarp_1_1manager_1_1Dying.html#a48852a5a728eb164393075b7cc93a714",
"classyarp_1_1manager_1_1KnowledgeBase.html#afb8ca5639a76d7bebb74573faf3708c9",
"classyarp_1_1manager_1_1ModuleInterface.html#aee0a940cf04db3e5619c72c9757e5aa8",
"classyarp_1_1manager_1_1YarpBroker.html#a1f50f5e564a7af6c8bf5d87e459f6424",
"classyarp_1_1os_1_1AbstractContactable.html#aaed6748f7a489ad48b450104ffccf641",
"classyarp_1_1os_1_1ConnectionReader.html#a6f99664285adebc8426aa2eaccd722b9",
"classyarp_1_1os_1_1Log.html#a3e3045fac7f457983209c07e25ef9235",
"classyarp_1_1os_1_1NetworkBase.html#a2dc3ec26ecc102b663456d0b8ed6f110",
"classyarp_1_1os_1_1OutputStream.html#a99b59d450e9b7546326cd1c164e8131e",
"classyarp_1_1os_1_1Property.html#a4cacd648b54c5a331f0ff5265d3b5680",
"classyarp_1_1os_1_1ResourceFinderOptions.html#a63957fdaafd3be9ad6ddbfd1aaf22379ae72a5517bbd21cd25c7072218ead404f",
"classyarp_1_1os_1_1Subscriber.html",
"classyarp_1_1os_1_1Value.html#a6aeaecd8a88780be1ab09b06374dd5e2",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a3d1c2ffa3b7e811b64ff4bcb5d3195dc",
"classyarp_1_1os_1_1impl_1_1LocalCarrier.html#a29f10adaede415e80a2a6df82fe47680",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a6e4bfe27b71390385c3a04f7aa474edf",
"classyarp_1_1os_1_1impl_1_1Storable.html#a555c43e4f948b0fc57351dcd5d3bc001",
"classyarp_1_1os_1_1impl_1_1StreamConnectionReader.html#a006a3baefb43a1f3928afe3f0cd7e1b9",
"classyarp_1_1robotinterface_1_1experimental_1_1Action.html#a430ca369abd28772d0ff29db4a67af51",
"classyarp_1_1robottestingframework_1_1TestCase.html#a4c48cf2c4f044e6edf9d40c5c4de47e1",
"classyarp_1_1rosmsg_1_1diagnostic__msgs_1_1SelfTestReply.html#a97482fba35a35922b0d31b683668b68a",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1PoseArray.html#ae6620e2ef9f291c55fb4993d3d99d7ff",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1WrenchStamped.html#a4a206a2f27d4d38a46eb0d6a77aa67bd",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1BatteryState.html#af58096610550e4936ba6556baa2f9c92",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1LaserScan.html#ac7ca7133b204dd6bf6c2f04992eafef9",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1RelativeHumidity.html#ad266a58572354707543667ed009b5536",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Duration.html#af674c7c9f329c88adb680c489aa93665",
"classyarp_1_1rosmsg_1_1std__msgs_1_1MultiArrayDimension.html#ad23e2fe3b88fd8e787ccd844981dca83",
"classyarp_1_1rosmsg_1_1tf2__msgs_1_1TF2Error.html#a46df7efeb5842bdb89c905456da643dc",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1InteractiveMarkerFeedback.html#a35edb7a824cb094865195ba3226dc26f",
"classyarp_1_1serversql_1_1impl_1_1NameTripleState.html#a0d31534fb59cd0b21ab2c3490cf7ac3a",
"classyarp_1_1sig_1_1PointCloud.html#af478462ac2a2713d9f442bb63ef9354e",
"classyarp_1_1yarpLogger_1_1LogEntry.html#a9119d0014017b6d5f0051eaffa6c4466",
"dev_2motortest_2motortest_8cpp-example.html",
"dir_e3f7fd961ac0e5275c128c7f5414f43e.html",
"geometry__msgs_2AccelWithCovariance_8h_source.html",
"globals_vars_r.html",
"imuBosch__BNO055_8h.html#a787ef2972691b8fbb857429a94245e70",
"libYARP__rosmsg_2src_2idl__generated__code_2yarp_2rosmsg_2std__msgs_2Time_8h_source.html",
"namespacemembers_func.html",
"namespaceyarp_1_1dev_1_1Nav2D.html#af9dcd4110f9ab7ea2bc43fc9472d9629aa13712514e1f124faf91c8acbe826e5b",
"namespaceyarp_1_1pcl.html",
"nav__msgs__MapMetaData_8h.html",
"resource_finder_spec.html#autotoc_md681",
"sensor__msgs__SetCameraInfo_8h.html",
"structImpedanceParameters.html#a076b540fb5d86365ad35df7d935889f2",
"structlaserHokuyo_1_1sensor__property__struct.html#a3ee7bd02a6359eafc6e9ef437aee5d0c",
"structyarp_1_1os_1_1SystemInfo_1_1ProcessInfo.html",
"structyarp_1_1sig_1_1PixelRgbInt.html#a2aa893f9ba387ebdaca2560b9dff23df",
"tf2__msgs__TF2Error_8h.html",
"v2_3_68.html#autotoc_md96",
"v3_1_0.html#autotoc_md353",
"visualization__msgs_2Marker_8h.html",
"yarp_2rosmsg_2geometry__msgs_2Vector3_8h.html#ac260cabc50b9228050af29276729e7c0",
"yarp_2rosmsg_2tf_2tfMessage_8h_source.html",
"yarp_plugins.html#yarp_plugins_listing",
"yarprun.html#yarprun_cmd"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';