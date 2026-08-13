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
        [ "Adding a device driver to libYARP_dev", "dev-how-to.html#dev-howto-lib", null ],
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
"Cv_8h.html#a3bf61c957afa3b282c3b36bff9900ab7",
"FrameGrabberInterfaces_8h.html#a79239ff26e3523a2969e48b9b69c0b7ca4913b42184efec33c9fc45314e14cdf7",
"IEncoders_8h.html#a4245b267e7e9f3516feed7c3717e9c23",
"IVisualParamsImpl_8h_source.html",
"ImageFile_8h.html",
"Localization2DClient_8cpp.html",
"MonitorSharedLib_8h.html",
"OVRHeadset_8cpp.html#a3df6f1622850f59c84ca447a778c8580",
"PortAudioDeviceDriver_8h.html#abe9b1c28165a7071e354bd9d7823ca1a",
"RateThread_8cpp_source.html",
"SharedLibraryFactory_8h_source.html",
"V4L__camera_8cpp.html",
"carrier_h264_howto.html#references",
"classDecoderState.html#a3606236e4548953eaf06843b98c56a26",
"classFakeLaser.html#a87f3b9028649955cd0d55c71e9a7a0f9",
"classFfmpegHelper.html#aa96e502ba6ab3ed04db70263bb7583d1",
"classImageStorage.html#a75d318c6eef82268fa094a5be51988f9",
"classMonitorEventRecord.html#af8acbba17130b156a9c2ad00b3079c3d",
"classMultipleAnalogSensorsRemapper.html#a939c257d672d4fa58f9063deb6524abe",
"classPortAudioPlayerDeviceDriver.html#a8a37f055f5c689b9ba04c93d06d4a774",
"classResourceFinder_1_1Private.html",
"classSensorMeasurements.html#aa0b81710385c5141a705e79a639d7196",
"classSerialServoBoard.html#a00f04c4242c3a2fb5722aa413701d365",
"classTextureBattery.html#a6324394e227867f717f5e8f62169b605a63fe5200c98a8077d40317f6cdb66a49",
"classXmlRpcCarrier.html#a2d33136d5738c810304775fb1660ae5f",
"classfakeLocalizerThread.html#a0b0c952e046c77bbd51804972872f690",
"classyarp_1_1dev_1_1AnalogSensorClient.html#ab59da26f03f5adc260fae9a3d6f4bae4",
"classyarp_1_1dev_1_1ControlBoardRemapper.html#a3c4a092e9d37df9149ead283fbbae0b7",
"classyarp_1_1dev_1_1ControlBoardWrapper.html#a834d33e1d852545518681f1954d16077",
"classyarp_1_1dev_1_1IAudioGrabberSound.html#aa861540f1ff008130535b89d00346420",
"classyarp_1_1dev_1_1IFrameGrabber.html#acd5312bc3d87ae8de4c02ac3c484a044",
"classyarp_1_1dev_1_1IJoypadController.html#a1e00dbb41b250a450b43f3cab251a02a",
"classyarp_1_1dev_1_1IPositionControl.html#a151d447b32aa5bb1676fa09de9a23aa1",
"classyarp_1_1dev_1_1ITorqueControlRaw.html#a709cbcbc2f473ab7a5d7ec3782ea8365",
"classyarp_1_1dev_1_1ImplementEncodersTimed.html#ac6f70be5f0244677d711bb68d889f2b0",
"classyarp_1_1dev_1_1Implement__DepthVisualParams__Sender.html#a56b8ff337a4890feea271d13cbfc351b",
"classyarp_1_1dev_1_1RGBDSensorClient.html#a2fc2698e560528d56b6ba7714eaa1dd7",
"classyarp_1_1dev_1_1RemoteControlBoard.html#ae02e839e1159a69434ef0f0b60ce22dc",
"classyarp_1_1dev_1_1TestMotor.html#a4af6109570c25c7f8d25feea421d7433",
"classyarp_1_1os_1_1AbstractCarrier.html#a49c03065d09bb74a3505f067c223374b",
"classyarp_1_1os_1_1Carriers.html#ad2b5ff6e56e825b17d0de52ed04b5bc4",
"classyarp_1_1os_1_1InputProtocol.html",
"classyarp_1_1os_1_1NetworkBase.html#a15a8d579bf5d730491bcfb49bf5d67c6",
"classyarp_1_1os_1_1OutputStream.html#a36ab9b168185c63a46c4b8bd70205e97",
"classyarp_1_1os_1_1Property.html#a275d87fffe69cd2333b777b721967ab3",
"classyarp_1_1os_1_1ResourceFinderOptions.html#a63957fdaafd3be9ad6ddbfd1aaf22379ac4ea90fe16ba5d48049b3b386a8aa023",
"classyarp_1_1os_1_1StringOutputStream.html#acb36aa385e9eebe767a8093464673bc5",
"classyarp_1_1os_1_1Value.html#a71e9b4e1df2f9e31fc3334c0aa514371",
"classyarp_1_1os_1_1impl_1_1BottleImpl.html#a3f623c61c42590943748e60a4af5585f",
"classyarp_1_1os_1_1impl_1_1LocalCarrier.html#a2b8041a9fe6fa9d96336d0479e85c7ce",
"classyarp_1_1os_1_1impl_1_1PortCore.html#a51396c0243f5ab1cc01040b1788f831e",
"classyarp_1_1os_1_1impl_1_1Storable.html#a455dbd351403475b10ed3743810d80f9",
"classyarp_1_1os_1_1impl_1_1StoreVocab.html#acd78b271b6e0b5e97362138464fc835e",
"classyarp_1_1rosmsg_1_1actionlib__msgs_1_1GoalID.html#a94e37307f57f0c5154e7aeeb9d2d8299",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1Inertia.html#a3d1a2f0d8b1ea83aeab1f2165691414b",
"classyarp_1_1rosmsg_1_1geometry__msgs_1_1QuaternionStamped.html#a6d9381a5e3384111a45b1478526cf425",
"classyarp_1_1rosmsg_1_1nav__msgs_1_1GridCells.html#a22f55dc6c65d7f97b1546e5d65a80dca",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1FluidPressure.html#ae43bcae1a795edf837fe8de4f289172d",
"classyarp_1_1rosmsg_1_1sensor__msgs_1_1NavSatFix.html#a68f0e32c417460956343da6aa036c3f0",
"classyarp_1_1rosmsg_1_1shape__msgs_1_1Mesh.html#a7d5f2a0db5a92c82fd0c7fbcadb49318",
"classyarp_1_1rosmsg_1_1std__msgs_1_1Float64MultiArray.html#ac3273f15208be60b8783cfbe77239658",
"classyarp_1_1rosmsg_1_1std__msgs_1_1UInt16MultiArray.html#af276516ba23e0b44e875a113fe69e9f5",
"classyarp_1_1rosmsg_1_1trajectory__msgs_1_1JointTrajectory.html#a5ddbde5a6ec168a68597d34d220b2fb7",
"classyarp_1_1rosmsg_1_1visualization__msgs_1_1Marker.html#a0001c40c38c30476c0a17d4be11953a6",
"classyarp_1_1sig_1_1PointCloudBase.html#a907f4941bfafe73e5e20cb0d3ca926b3",
"data_rep.html#data_rep_code_cmd",
"dir_d6789916daa07303a46fc4c59706adb2.html",
"geometry__msgs_2QuaternionStamped_8h.html",
"group__group__basic.html",
"install_yarp_mac.html#install_mac_YARP_optional_GDK",
"lua__swig_8h.html#aa9c0c70d186a5909abbe41912664704b",
"nav__msgs_2GetMapReply_8h_source.html",
"portmonitor.html#what_is",
"sensor__msgs__CameraInfo_8h.html",
"std__msgs__String_8h.html#acc5c3cde9d96cc0ff2a32414e01ecf88",
"structgsl__matrix.html#af411ee343f59b57799af63a0eb152610",
"structyarp_1_1os_1_1SystemInfo_1_1PlatformInfo.html",
"system_8h.html#a5f054c6e51cdc1f2a494f1e145b485d1",
"v2_3_66_1.html#autotoc_md69",
"visualization__msgs__InteractiveMarkerControl_8h.html",
"yarp_2rosmsg_2sensor__msgs_2BatteryState_8h_source.html",
"yarp_2src_2libYARP__OS_2include_2yarp_2os_2api_8h.html",
"yarp_protocol.html#connection_phases",
"yarpmotorgui.html#yarpmotorgui_portsa"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';