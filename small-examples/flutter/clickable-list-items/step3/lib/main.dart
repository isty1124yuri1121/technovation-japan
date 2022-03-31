import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Clickable List Items'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  final List<String> categories = <String>['cats', 'dogs', 'chickens', 'pizza'];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: ListView.builder(
          padding: const EdgeInsets.all(8),
          itemCount: categories.length,
          itemBuilder: (BuildContext context, int index) {
            return MyButton(text: categories[index]);
          }),
    );
  }
}

class MyButton extends StatefulWidget {
  final String text;

  MyButton({Key? key, required this.text}) : super(key: key);

  @override
  State<MyButton> createState() => _MyButtonState();
}

class _MyButtonState extends State<MyButton> {
  bool _isClicked = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: () {
        setState(() {
          _isClicked = !_isClicked;
        });
      },
      child: Container(
        height: 50,
        margin: EdgeInsets.all(2),
        color: _isClicked ? Colors.blue : Colors.grey,
        child: Text('${widget.text}'),
      ),
    );
  }
}
