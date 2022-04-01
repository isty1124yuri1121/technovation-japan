import 'package:flutter/material.dart';

import 'package:final_version/pages/farmer_list_page.dart';

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
              width: 150,
              child: ElevatedButton(
                style: style,
                onPressed: null,
                child: const Text('Farmer'),
              ),
            ),
            const SizedBox(height: 30),
            SizedBox(
              height: 50,
              width: 150,
              child: ElevatedButton(
                style: style,
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                        builder: (context) => const FarmerListPage()),
                  );
                },
                child: const Text('Consumer'),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
