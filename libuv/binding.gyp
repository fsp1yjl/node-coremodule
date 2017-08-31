{
  "targets":[
    {
			"target_name":"my_addon",
			"cflags" :[ "-Wall","-std=c++11"],
			"sources":["a.cc"],
			"include_dirs":[
				"<!(node -e \"require('nan')\")"
			]
    }
		,{
			"target_name":"my_async",
			"cflags" :[ "-Wall","-std=c++11"],
			"sources":["async.cc"],
			"include_dirs":[
				"<!(node -e \"require('nan')\")"
			]
    }
  ]
}
