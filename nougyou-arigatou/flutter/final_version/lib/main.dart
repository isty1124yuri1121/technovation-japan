import 'package:flutter/material.dart';

import 'package:final_version/pages/farmer_list_page.dart';
import 'package:final_version/pages/landing_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '農業ありがとう',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const LandingPage(title: 'Who are you?'),
    );
  }
}
