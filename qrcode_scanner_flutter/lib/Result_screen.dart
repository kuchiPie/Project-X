import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';
import 'package:http/http.dart' as http;
import 'package:flutter/material.dart';
import 'dart:convert';

class ResultScreen extends StatefulWidget {
  final result;
  ResultScreen({required this.result});

  @override
  State<ResultScreen> createState() => _ResultScreenState();
}

class _ResultScreenState extends State<ResultScreen> {
  bool _isloading = false;
  var response;
  void yourFunction(BuildContext context) async {
    setState(() {
      _isloading = true;
    });
    String url = 'http://10.0.5.46:5000/api/outpass/inOut?id=' +
        widget.result.toString();
    print(url);
    // var url = Uri.http('10.0.5.46:5000/api/outpass/inOut?id=', widget.result);
    // print(url);

    var res = await http.post(Uri.parse(url));
    response = json.decode(res.body);
    print(response);
    setState(() {
      _isloading = false;
    });
  }

  @override
  void initState() {
    // TODO: implement initState
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => yourFunction(context));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Scan Result'),
      ),
      body: Center(
        child: _isloading
            ? CircularProgressIndicator()
            : Text(response.toString()),
      ),
    );
  }
}
