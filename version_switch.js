(function() {
  'use strict';

  var yarp_url = 'www.yarp.it/';
  var url_re = /(www\.)?yarp\.it\/(git-master|latest|(v\d\.\d+))\//;
  var all_versions = {
    'git-master': 'git-master',
    'latest': 'latest release',
    'v3.12': '3.12',
    'v3.11': '3.11',
    'v3.10': '3.10',
    'v3.9': '3.9',
    'v3.8': '3.8',
    'v3.7': '3.7',
    'v3.6': '3.6',
    'v3.5': '3.5',
    'v3.4': '3.4',
    'v3.3': '3.3',
    'v3.2': '3.2',
    'v3.1': '3.1',
    'v3.0': '3.0',
  };

  function build_select(current_version, current_release) {
    var buf = ['<select>'];

    $.each(all_versions, function(version, title) {
      buf.push('<option value="' + version + '"');
      if (version == current_version) {
        buf.push(' selected="selected">');
        if (version[0] == 'v') {
          buf.push(current_release);
        } else {
          buf.push(title + ' (' + current_release + ')');
        }
      } else {
        buf.push('>' + title);
      }
      buf.push('</option>');
    });

    buf.push('</select>');
    return buf.join('');
  }

  function patch_url(url, new_version) {
    return url.replace(url_re, yarp_url + new_version + '/');
  }

  function on_switch() {
    var selected = $(this).children('option:selected').attr('value');

    var url = window.location.href,
        new_url = patch_url(url, selected);

    if (new_url != url) {
      // check beforehand if url exists, else redirect to version's start page
      $.ajax({
        url: new_url,
        success: function() {
           window.location.href = new_url;
        },
        error: function() {
           window.location.href = window.location.protocol + '//' + yarp_url + selected;
        }
      });
    }
  }

  $(document).ready(function() {
    var match = url_re.exec(window.location.href);
    if (match) {
      var release = DOCUMENTATION_OPTIONS.VERSION;
      var version = match[2];
      var select = build_select(version, release);
      $('.version_switch').html(select);
      $('.version_switch select').bind('change', on_switch);
    }
  });
})();
