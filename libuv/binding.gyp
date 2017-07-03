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
  ]
}
