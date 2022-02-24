import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  // This widget is the root of your application.
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

class LandingPage extends StatelessWidget {
  const LandingPage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  Widget build(BuildContext context) {
    final ButtonStyle style = ElevatedButton.styleFrom(
      textStyle: const TextStyle(fontSize: 20),
    );
    return Scaffold(
      appBar: AppBar(
        title: Text(title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            SizedBox(
                height: 50,
                width: 100,
                child: ElevatedButton(
                  style: style,
                  onPressed: null,
                  child: const Text('Farmer'),
                )),
            const SizedBox(height: 30),
            ElevatedButton(
              style: style,
              onPressed: null,
              child: const Text('Consumer'),
            ),
          ],
        ),
      ),
    );
  }
}
